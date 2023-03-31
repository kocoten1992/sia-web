import { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { HostData } from './types'
import {
  Host,
  useAutopilotHostsSearch,
  useHostsAllowlist,
  useHostsBlocklist,
  useHostsSearch,
} from '@siafoundation/react-core'
import { ContractData } from '../contracts/types'
import { useAutopilot } from '../../hooks/useAutopilot'

export function useDataset({
  autopilotMode,
  regularResponse,
  autopilotResponse,
  allContracts,
  allowlist,
  blocklist,
  isAllowlistActive,
}: {
  autopilotMode: ReturnType<typeof useAutopilot>['autopilotMode']
  regularResponse: ReturnType<typeof useHostsSearch>
  autopilotResponse: ReturnType<typeof useAutopilotHostsSearch>
  allContracts: ContractData[]
  allowlist: ReturnType<typeof useHostsAllowlist>
  blocklist: ReturnType<typeof useHostsBlocklist>
  isAllowlistActive: boolean
}) {
  return useMemo<HostData[] | null>(() => {
    if (autopilotMode === 'off') {
      return (
        regularResponse.data?.map((host) => {
          return {
            ...getHostFields(host, allContracts),
            ...getAllowedFields({
              host,
              allowlist: allowlist.data,
              blocklist: blocklist.data,
              isAllowlistActive,
            }),
            ...getAutopilotFields(),
          }
        }) || null
      )
    } else if (autopilotMode === 'on') {
      return (
        autopilotResponse.data?.map((ah) => {
          return {
            ...getHostFields(ah.host, allContracts),
            ...getAllowedFields({
              host: ah.host,
              allowlist: allowlist.data,
              blocklist: blocklist.data,
              isAllowlistActive,
            }),
            ...getAutopilotFields(ah),
          }
        }) || null
      )
    }
    return null
  }, [
    autopilotMode,
    regularResponse.data,
    autopilotResponse.data,
    allContracts,
    allowlist.data,
    blocklist.data,
    isAllowlistActive,
  ])
}

function getHostFields(host: Host, allContracts: ContractData[]) {
  return {
    id: host.public_key,
    netAddress: host.netAddress,
    publicKey: host.public_key,
    lastScanSuccess: host.interactions.LastScanSuccess,
    lastScan: host.interactions.LastScan,
    knownSince: host.knownSince,
    uptime: new BigNumber(host.interactions.Uptime || 0),
    downtime: new BigNumber(host.interactions.Downtime || 0),
    successfulInteractions: new BigNumber(
      host.interactions.SuccessfulInteractions || 0
    ),
    totalInteractions: new BigNumber(
      host.interactions.SuccessfulInteractions +
        host.interactions.FailedInteractions || 0
    ),
    failedInteractions: new BigNumber(
      host.interactions.FailedInteractions || 0
    ),
    totalScans: new BigNumber(host.interactions.TotalScans || 0),
    activeContracts: new BigNumber(
      allContracts?.filter((c) => c.hostKey === host.public_key).length || 0
    ),
  }
}

function getAllowedFields({
  host,
  allowlist,
  blocklist,
  isAllowlistActive,
}: {
  host: Host
  allowlist: string[]
  blocklist: string[]
  isAllowlistActive: boolean
}) {
  const isOnAllowlist = !!allowlist?.find((a) => a === host.public_key)
  const allowed = !isAllowlistActive || isOnAllowlist
  const isOnBlocklist = !!blocklist?.find((b) => {
    if (b === host.netAddress) {
      return true
    }
    try {
      const hostname = new URL('https://' + host.netAddress).hostname
      return b === hostname
    } catch (e) {
      return false
    }
  })
  const isBlocked = isOnBlocklist || !allowed
  return {
    isOnAllowlist,
    isOnBlocklist,
    isBlocked,
  }
}

function getAutopilotFields(ah?: {
  score: number
  scoreBreakdown: {
    age: number
    collateral: number
    interactions: number
    prices: number
    storageRemaining: number
    uptime: number
    version: number
  }
  unusableReasons: string[]
  usable: boolean
}) {
  return {
    score: new BigNumber(ah?.score || 0),
    scoreBreakdown: {
      age: new BigNumber(ah?.scoreBreakdown.age || 0),
      collateral: new BigNumber(ah?.scoreBreakdown.collateral || 0),
      interactions: new BigNumber(ah?.scoreBreakdown.interactions || 0),
      prices: new BigNumber(ah?.scoreBreakdown.prices || 0),
      storageRemaining: new BigNumber(ah?.scoreBreakdown.storageRemaining || 0),
      uptime: new BigNumber(ah?.scoreBreakdown.uptime || 0),
      version: new BigNumber(ah?.scoreBreakdown.version || 0),
    },
    unusableReasons: ah?.unusableReasons || [],
    usable: ah?.usable,
  }
}