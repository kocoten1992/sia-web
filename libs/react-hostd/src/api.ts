import {
  useGetSwr,
  usePostFunc,
  usePutFunc,
  usePostSwr,
  HookArgsSwr,
  HookArgsCallback,
  Transaction,
  HookArgsWithPayloadSwr,
  FileContractID,
  PublicKey,
  getTestnetZenBlockHeight,
  getMainnetBlockHeight,
} from '@siafoundation/react-core'
import useSWR from 'swr'
import { Contract, ContractStatus, WalletTransaction } from './siaTypes'

export type StateHost = {
  publicKey: string
  walletAddress: string
  buildState: {
    network: string
    version: string
    commit: string
    buildTime: string
  }
}

export function useStateHost(args?: HookArgsSwr<void, StateHost>) {
  return useGetSwr({
    ...args,
    route: '/state/host',
  })
}

export type StateConsensus = {
  chainIndex: {
    height: number
    ID: string
  }
  synced: boolean
}

export function useStateConsensus(args?: HookArgsSwr<void, StateConsensus>) {
  return useGetSwr({
    ...args,
    route: '/state/consensus',
  })
}

export function useNetworkBlockHeight(): number {
  const state = useStateHost()
  const res = useSWR(
    state,
    () => {
      if (state.data?.buildState.network === 'zen') {
        return getTestnetZenBlockHeight()
      }
      return getMainnetBlockHeight()
    },
    {
      refreshInterval: 5_000,
      keepPreviousData: true,
    }
  )
  return res.data || 0
}

// syncer

type Peer = {
  address: string
  version: string
}

const syncerPeers = '/syncer/peers'

export function useSyncerPeers(args?: HookArgsSwr<void, Peer[]>) {
  return useGetSwr({
    ...args,
    route: syncerPeers,
  })
}

export function useSyncerConnect(
  args?: HookArgsCallback<void, { address: string }, never>
) {
  return usePutFunc(
    {
      ...args,
      route: '/syncer/peers',
    },
    (mutate) => {
      mutate((key) => key === syncerPeers)
    }
  )
}

// wallet

type WalletResponse = {
  scanHeight: number
  address: string
  spendable: string
  confirmed: string
  unconfirmed: string
}

export function useWallet(args?: HookArgsSwr<void, WalletResponse>) {
  return useGetSwr({
    ...args,
    route: '/wallet',
  })
}

export function useWalletTransactions(
  args?: HookArgsSwr<void, WalletTransaction[]>
) {
  return useGetSwr({
    ...args,
    route: '/wallet/transactions',
  })
}

const walletPendingRoute = '/wallet/pending'
export function useWalletPending(args?: HookArgsSwr<void, Transaction[]>) {
  return useGetSwr({
    ...args,
    route: walletPendingRoute,
  })
}

type WalletSendRequest = {
  amount: string
  address: string
}

export function useWalletSend(
  args?: HookArgsCallback<void, WalletSendRequest, void>
) {
  return usePostFunc({ ...args, route: '/wallet/send' }, (mutate) => {
    mutate((key) => {
      return (
        // key.startsWith(txPoolTransactionsRoute) ||
        key.startsWith(walletPendingRoute)
      )
    })
  })
}

// contracts

export type ContractFilterRequest = {
  // filters
  statuses?: ContractStatus[]
  contractIDs?: FileContractID[]
  renewedFrom?: FileContractID[]
  renewedTo?: FileContractID[]
  renterKey?: PublicKey[]

  minNegotiationHeight?: number
  maxNegotiationHeight?: number

  minExpirationHeight?: number
  maxExpirationHeight?: number

  // pagination
  limit?: number
  offset?: number

  // sorting
  sortField?: 'status' | 'negotiationHeight' | 'expirationHeight'
  sortDesc?: boolean
}

export type ContractFilterResponse = {
  contracts: Contract[]
  count: number
}

const contractsRoute = '/contracts'
export function useContracts(
  args: HookArgsWithPayloadSwr<
    void,
    ContractFilterRequest,
    ContractFilterResponse
  >
) {
  return usePostSwr({
    ...args,
    route: contractsRoute,
  })
}

// metrics

// Revenue is a collection of metrics related to revenue.
type Revenue = {
  rpc: string
  storage: string
  ingress: string
  egress: string
  registryRead: string
  registryWrite: string
}

// Data is a collection of metrics related to data usage.
type Data = {
  // Ingress returns the number of bytes received by the host.
  ingress: number
  // Egress returns the number of bytes sent by the host.
  egress: number
}

// Contracts is a collection of metrics related to contracts.
type Contracts = {
  pending: number
  active: number
  rejected: number
  failed: number
  successful: number
}

// Pricing is a collection of metrics related to the host's pricing settings.
type Pricing = {
  contractPrice: string
  ingressPrice: string
  egressPrice: string
  baseRPCPrice: string
  sectorAccessPrice: string
  storagePrice: string
  collateral: string
}

// Storage is a collection of metrics related to storage.
type Storage = {
  totalSectors: number
  physicalSectors: number
  contractSectors: number
  tempSectors: number
  registryEntries: number
}

// RevenueMetrics is a collection of metrics related to revenue.
type RevenueMetrics = {
  potential: Revenue
  earned: Revenue
}

// DataMetrics is a collection of metrics related to data usage.
type DataMetrics = {
  rhp2: Data
  rhp3: Data
}

type Metrics = {
  revenue: RevenueMetrics
  pricing: Pricing
  contracts: Contracts
  storage: Storage
  data: DataMetrics
  balance: string
  timestamp: string
}

const metricsRoute = '/metrics'
export function useMetrics(args?: HookArgsSwr<{ timestamp: number }, Metrics>) {
  return useGetSwr({
    ...args,
    route: metricsRoute,
  })
}

const metricsPeriodRoute = '/metrics/:period'
export function useMetricsPeriod(
  args?: HookArgsSwr<{ period: number; start: number; end: number }, Metrics>
) {
  return useGetSwr({
    ...args,
    route: metricsPeriodRoute,
  })
}
