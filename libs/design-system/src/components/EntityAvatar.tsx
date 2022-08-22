import { Avatar } from '../core/Avatar'
import { Box } from '../core/Box'
import { NextLink } from '../core/Link'
import { Tooltip } from '../core/Tooltip'
import {
  EntityType,
  getEntityTypeInitials,
  getEntityTypeLabel,
} from '../lib/entityTypes'

type Props = {
  initials?: string
  type?: EntityType
  label?: string
  href?: string
  shape?: 'square' | 'circle'
}

export function EntityAvatar({ type, label, initials, href, shape }: Props) {
  const avatarEl = (
    <Avatar
      interactive={!!href}
      fallback={initials || (type && getEntityTypeInitials(type))}
      shape={
        shape ||
        (!type || type === 'address' || type === 'block' ? 'square' : 'circle')
      }
    />
  )
  const linkEl = href && <NextLink href={href}>{avatarEl}</NextLink>
  const el = linkEl || avatarEl

  if (type) {
    return (
      <Tooltip content={label || getEntityTypeLabel(type)}>
        <Box>{el}</Box>
      </Tooltip>
    )
  }

  return el
}
