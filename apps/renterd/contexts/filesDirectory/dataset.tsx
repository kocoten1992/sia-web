import {
  ObjectDirectoryParams,
  useObjectDirectory,
} from '@siafoundation/react-renterd'
import { useDataset as useDatasetGeneric } from '../filesManager/dataset'
import { bucketAndKeyParamsFromPath } from '../../lib/paths'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { useFilesManager } from '../filesManager'
import { defaultDatasetRefreshInterval } from '../../config/swr'

const defaultLimit = 50

export function useDataset() {
  const {
    activeBucketName,
    activeDirectoryPath,
    fileNamePrefixFilter,
    sortDirection,
    sortField,
  } = useFilesManager()
  const router = useRouter()
  const limit = Number(router.query.limit || defaultLimit)
  const offset = Number(router.query.offset || 0)

  const params = useMemo(() => {
    const p: ObjectDirectoryParams = {
      ...bucketAndKeyParamsFromPath(activeDirectoryPath),
      sortBy: sortField,
      sortDir: sortDirection,
      offset,
      limit,
    }
    if (fileNamePrefixFilter) {
      p.prefix = fileNamePrefixFilter.startsWith('/')
        ? fileNamePrefixFilter.slice(1)
        : fileNamePrefixFilter
    }
    return p
  }, [
    activeDirectoryPath,
    fileNamePrefixFilter,
    sortField,
    sortDirection,
    offset,
    limit,
  ])

  const response = useObjectDirectory({
    disabled: !activeBucketName,
    params,
    config: {
      swr: {
        refreshInterval: defaultDatasetRefreshInterval,
      },
    },
  })

  const d = useDatasetGeneric({
    objects: {
      isValidating: response.isValidating,
      data: response.data?.entries,
    },
  })

  return {
    limit,
    offset,
    response,
    dataset: d.data,
    refresh: response.mutate,
  }
}
