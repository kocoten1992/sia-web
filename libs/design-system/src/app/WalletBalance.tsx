import { Panel } from '../core/Panel'
import { Text } from '../core/Text'
import { humanSiacoin } from '@siafoundation/sia-js'
import BigNumber from 'bignumber.js'
import { Warning16 } from '@siafoundation/react-icons'
import { Tooltip } from '../core/Tooltip'
import { ValueSc } from '../components/ValueSc'

export function WalletBalance({
  balanceSc,
  isSynced,
  syncingMessage,
}: {
  balanceSc?: {
    unconfirmed: BigNumber
    confirmed: BigNumber
    spendable: BigNumber
  }
  isSynced: boolean
  syncingMessage?: string
}) {
  if (!balanceSc) {
    return null
  }

  if (!isSynced) {
    return (
      <Tooltip
        content={
          syncingMessage || 'Blockchain is syncing, balance may be incorrect.'
        }
      >
        <Panel className="hidden sm:flex h-7 pl-2 pr-3 gap-1.5 items-center">
          <Text color="amber">
            <Warning16 className="" />
          </Text>
          <Text size="12" weight="semibold">
            {humanSiacoin(balanceSc.spendable.plus(balanceSc.unconfirmed))}
          </Text>
        </Panel>
      </Tooltip>
    )
  }

  return (
    <Tooltip
      content={
        <div className="flex flex-col gap-1">
          <div className="flex gap-2">
            <div className="flex flex-col flex-1">
              <Text>spendable</Text>
              <Text color="subtle">All confirmed outputs not in-use.</Text>
            </div>
            <div className="flex justify-end">
              <ValueSc variant="value" value={balanceSc.spendable} />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col flex-1">
              <Text>confirmed</Text>
              <Text color="subtle">All confirmed outputs.</Text>
            </div>
            <div className="flex justify-end">
              <ValueSc variant="value" value={balanceSc.confirmed} />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col flex-1">
              <Text>unconfirmed</Text>
              <Text color="subtle">All unconfirmed outputs not in-use.</Text>
            </div>
            <div className="flex justify-end">
              <ValueSc variant="value" value={balanceSc.unconfirmed} />
            </div>
          </div>
        </div>
      }
    >
      <Panel className="hidden sm:flex h-7 px-3 items-center">
        <Text size="12" weight="semibold">
          {humanSiacoin(balanceSc.spendable.plus(balanceSc.unconfirmed))}
        </Text>
      </Panel>
    </Tooltip>
  )
}
