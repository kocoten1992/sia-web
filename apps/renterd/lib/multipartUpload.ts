import { triggerErrorToast } from '@siafoundation/design-system'
import { delay } from '@siafoundation/react-core'
import {
  useMultipartUploadAbort,
  useMultipartUploadPart,
  useMultipartUploadComplete,
  useMultipartUploadCreate,
} from '@siafoundation/react-renterd'

type ApiWorkerUploadPart = ReturnType<typeof useMultipartUploadPart>
type ApiBusUploadComplete = ReturnType<typeof useMultipartUploadComplete>
type ApiBusUploadCreate = ReturnType<typeof useMultipartUploadCreate>
type ApiBusUploadAbort = ReturnType<typeof useMultipartUploadAbort>

export type MultipartParams = {
  bucket: string
  path: string
  file: File
  apiWorkerUploadPart: ApiWorkerUploadPart
  apiBusUploadComplete: ApiBusUploadComplete
  apiBusUploadCreate: ApiBusUploadCreate
  apiBusUploadAbort: ApiBusUploadAbort
  partSize?: number
  maxConcurrentParts?: number
  onProgress?: (event: {
    sent: number
    total: number
    percentage: number
  }) => void
  onError?: (error: Error) => void
  onComplete?: () => void
}

type UploadedPart = {
  partNumber: number
  eTag: string
}

export class MultipartUpload {
  // params
  #bucket: string
  #path: string
  #file: File
  #partSize: number
  #maxConcurrentParts: number
  #apiWorkerUploadPart: ApiWorkerUploadPart
  #apiBusUploadComplete: ApiBusUploadComplete
  #apiBusUploadCreate: ApiBusUploadCreate
  #apiBusUploadAbort: ApiBusUploadAbort
  #onProgress: (progress: {
    sent: number
    total: number
    percentage: number
  }) => void
  #onError: (error: Error) => void
  #onComplete: () => void

  // state
  #resolve: () => void
  #progressCache: Record<number, number>
  #activeConnections: Record<number, AbortController>
  #pendingPartNumbers: number[]
  #uploadedParts: UploadedPart[]
  #uploadId: string
  #aborted: boolean
  // error retry backoff
  #initialDelay = 500 // 1/2 second
  #maxDelay = 60_000 // 1 minute
  #currentDelay = this.#initialDelay

  constructor(options: MultipartParams) {
    // params
    this.#bucket = options.bucket
    this.#path = options.path
    this.#partSize = options.partSize || 1024 * 1024 * 5
    this.#maxConcurrentParts = Math.min(options.maxConcurrentParts || 5, 15)
    this.#file = options.file
    this.#apiWorkerUploadPart = options.apiWorkerUploadPart
    this.#apiBusUploadAbort = options.apiBusUploadAbort
    this.#apiBusUploadComplete = options.apiBusUploadComplete
    this.#apiBusUploadCreate = options.apiBusUploadCreate
    this.#onProgress = options.onProgress || (() => null)
    this.#onError = options.onError || (() => null)
    this.#onComplete = options.onComplete || (() => null)

    // state
    this.#progressCache = {}
    this.#activeConnections = {}
    this.#pendingPartNumbers = []
    this.#uploadedParts = []
    this.#uploadId = null
    this.#aborted = false
  }

  public async create() {
    const createPayload = {
      bucket: this.#bucket,
      generateKey: true,
      path: this.#path,
    }
    const response = await this.#apiBusUploadCreate.post({
      payload: createPayload,
    })

    this.#uploadId = response.data?.uploadID

    const partCount = Math.ceil(this.#file.size / this.#partSize)
    this.#pendingPartNumbers = Array.from(
      { length: partCount },
      (_, i) => i + 1
    )
    return this.#uploadId
  }

  public async start() {
    const promise = new Promise<void>((resolve) => {
      this.#resolve = resolve
    })
    this.#sendNext()
    await promise
  }

  public async abort() {
    this.#aborted = true
    Object.keys(this.#activeConnections)
      .map(Number)
      .forEach((id) => {
        this.#activeConnections[id].abort()
      })

    try {
      await this.#apiBusUploadAbort.post({
        payload: {
          bucket: this.#bucket,
          path: this.#path,
          uploadID: this.#uploadId,
        },
      })
    } catch (e) {
      triggerErrorToast(e.message)
    }
  }

  public setOnProgress(
    onProgress: (progress: {
      sent: number
      total: number
      percentage: number
    }) => void
  ) {
    this.#onProgress = onProgress
  }

  public setOnError(onError: (error: Error) => void) {
    this.#onError = onError
  }

  public setOnComplete(onComplete: () => void) {
    this.#onComplete = onComplete
  }

  async #sendNext() {
    if (this.#aborted) {
      return
    }

    const activeConnections = Object.keys(this.#activeConnections).length

    if (activeConnections >= this.#maxConcurrentParts) {
      return
    }

    if (!this.#pendingPartNumbers.length) {
      if (!activeConnections) {
        this.#complete()
      }

      return
    }

    const partNumber = this.#pendingPartNumbers.pop()
    const partIndex = partNumber - 1
    const partOffset = partIndex * this.#partSize
    const partData = this.#file.slice(partOffset, partOffset + this.#partSize)

    // Callback to start another upload after the current one is added to the
    // active connections.
    // This will boot up the max concurrent uploads.
    const tryStartingAnother = () => {
      this.#sendNext()
    }

    try {
      await this.#upload(partNumber, partData, partOffset, tryStartingAnother)
      // On successful upload, reset the delay
      this.#resetDelay()
    } catch (error) {
      if (error.name === 'canceled') {
        return
      }
      this.#pendingPartNumbers.push(partNumber)
      await this.#waitToRetry()
    }
    // try again even after a part errors
    this.#sendNext()
  }

  #resetDelay() {
    this.#currentDelay = this.#initialDelay
  }

  async #waitToRetry() {
    // Increase the delay for the next retry, capped at the maximum delay
    const backoff = delay(this.#currentDelay)
    this.#currentDelay = Math.min(this.#currentDelay * 2, this.#maxDelay)
    await backoff
  }

  async #complete() {
    try {
      const payload = {
        bucket: this.#bucket,
        path: this.#path,
        uploadID: this.#uploadId,
        parts: this.#uploadedParts.sort((a, b) => a.partNumber - b.partNumber),
      }
      await this.#apiBusUploadComplete.post({
        payload: payload,
      })
      this.#onComplete()
    } catch (error) {
      this.#onError(error)
    }
    this.#resolve()
  }

  #handleProgress(partNumber: number, event: ProgressEvent) {
    this.#progressCache[partNumber] = event.loaded

    const progressTotal = Object.keys(this.#progressCache)
      .map(Number)
      .reduce((acc, id) => (acc += this.#progressCache[id]), 0)

    const sent = Math.min(progressTotal, this.#file.size)
    const total = this.#file.size

    const percentage = Math.round((sent / total) * 100)

    this.#onProgress({
      sent: sent,
      total: total,
      percentage: percentage,
    })
  }

  async #upload(
    partNumber: number,
    partData: Blob,
    partOffset: number,
    afterConnectionIsAdded: () => void
  ): Promise<void> {
    const controller = new AbortController()
    this.#activeConnections[partNumber] = controller
    afterConnectionIsAdded()
    try {
      const response = await this.#apiWorkerUploadPart.put({
        params: {
          key: this.#path.slice(1),
          bucket: this.#bucket,
          uploadid: this.#uploadId,
          offset: partOffset,
          partnumber: partNumber,
        },
        payload: partData,
        config: {
          axios: {
            onUploadProgress: (e) => this.#handleProgress(partNumber, e),
            signal: controller.signal,
          },
        },
      })

      // errors such as aborted/canceled request
      if (response.error) {
        throw new Error(response.error)
      }

      const eTag = response.headers['etag']
      if (!eTag) {
        throw new Error(
          'No ETag in response, add ETag to Access-Control-Expose-Headers list'
        )
      }
      const uploadedPart = {
        partNumber: partNumber,
        // removing the " enclosing characters from the raw ETag
        eTag: eTag.replace(/"/g, ''),
      }

      this.#uploadedParts.push(uploadedPart)
      delete this.#activeConnections[partNumber]
    } catch (e) {
      delete this.#activeConnections[partNumber]
      throw e
    }
  }
}
