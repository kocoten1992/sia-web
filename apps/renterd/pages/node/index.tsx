import { DatumCard, TxPoolList, PeerList } from '@siafoundation/design-system'
import { useRouter } from 'next/router'
import {
  useConsensusTip,
  useSyncerPeers,
  useTxPoolTransactions,
} from '@siafoundation/react-core'
import { routes } from '../../config/routes'
import { useDialog } from '../../contexts/dialog'
import { RenterSidenav } from '../../components/RenterSidenav'
import { RenterdAuthedLayout } from '../../components/RenterdAuthedLayout'

export default function NodePage() {
  const peers = useSyncerPeers()
  const txPool = useTxPoolTransactions({
    refreshInterval: 30_000,
  })
  const tip = useConsensusTip({
    refreshInterval: 30_000,
  })
  const router = useRouter()
  const { openDialog } = useDialog()

  return (
    <RenterdAuthedLayout
      routes={routes}
      sidenav={<RenterSidenav />}
      openSettings={() => openDialog('settings')}
      title="Node"
    >
      <div className="flex flex-wrap gap-7">
        <DatumCard
          label="Height"
          value={
            tip.data ? Number(tip.data.Height).toLocaleString() : undefined
          }
        />
        <DatumCard
          label="Connected peers"
          value={peers.data?.length}
          onClick={() => router.push(routes.node.peers)}
        />
        <DatumCard label="Transactions in pool" value={txPool.data?.length} />
        {/* <DatumCard
          label="Consensus tip"
          hash={tip.data?.ID.replace('bid:', '')}
        /> */}
      </div>
      <div className="flex flex-wrap gap-7">
        <div className="flex-1">
          <PeerList connectPeer={() => openDialog('connectPeer')} />
        </div>
        <div className="flex-1">
          <TxPoolList />
        </div>
      </div>
    </RenterdAuthedLayout>
  )
}
