import { routes } from '../config/routes'
import { CalloutCoreSoftware } from './CalloutCoreSoftware'
import { patterns, getAssetUrl } from '../content/assets'

type Props = {
  version?: string
}

export function CalloutHostd({ version }: Props) {
  return (
    <CalloutCoreSoftware
      name="hostd"
      description={
        'A next-generation Sia host, developed by the Sia Foundation. Built for performance and reliability.'
      }
      daemon="hostd"
      version={version}
      href={routes.software.hostd}
      image={getAssetUrl('assets/hostd/metrics.png')}
      background={patterns.nateTrickle}
    />
  )
}
