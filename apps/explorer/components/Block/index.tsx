import { Badge, Tooltip, EntityList } from '@siafoundation/design-system'
import { humanNumber } from '@siafoundation/units'
import { ExplorerDatum, DatumProps } from '../ExplorerDatum'
import { useMemo } from 'react'
import { routes } from '../../config/routes'
import { EntityHeading } from '../EntityHeading'
import { ContentLayout } from '../ContentLayout'
import { SiaCentralBlock } from '@siafoundation/sia-central-types'

type Props = {
  block: SiaCentralBlock
}

export function Block({ block }: Props) {
  const values = useMemo(() => {
    const list: DatumProps[] = [
      {
        label: 'Block hash',
        entityType: 'blockHash',
        entityValue: block.id,
      },
      {
        label: 'Miner payout address',
        entityType: 'address',
        entityValue: block.siacoin_outputs?.find(
          (output) => output.source === 'miner_payout'
        )?.unlock_hash,
      },
    ]
    return list
  }, [block])

  return (
    <ContentLayout
      panel={
        <div className="flex flex-col gap-10">
          <div className="flex flex-wrap gap-y-2 items-center justify-between">
            <EntityHeading
              label="block"
              type="block"
              value={String(block.height)}
              href={routes.block.view.replace(':id', String(block.height))}
            />
            <div className="flex gap-2 items-center">
              <Tooltip
                content={`${humanNumber(
                  block.transactions?.length || 0
                )} transactions`}
              >
                <Badge variant="accent">
                  {`${humanNumber(block.transactions?.length || 0)}`}{' '}
                  transactions
                </Badge>
              </Tooltip>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 md:gap-y-4">
            {values.map((item) => (
              <ExplorerDatum key={item.label} {...item} />
            ))}
          </div>
        </div>
      }
    >
      <EntityList
        title={`Transactions (${block.transactions?.length || 0})`}
        dataset={block.transactions?.map((tx) => ({
          type: 'transaction',
          hash: tx.id,
          label: 'transaction',
          initials: 'T',
          href: routes.transaction.view.replace(':id', tx.id),
        }))}
      />
    </ContentLayout>
  )
}
