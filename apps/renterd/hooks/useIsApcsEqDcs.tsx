import { useAutopilotConfig } from '@siafoundation/renterd-react'
import { useApp } from '../contexts/app'
import { useContractSetSettings } from './useContractSetSettings'

// is the autopilot contract set the same as the default contract set
export function useIsApcsEqDcs() {
  const { autopilot } = useApp()
  const apc = useAutopilotConfig({
    disabled: autopilot.status !== 'on',
  })
  const css = useContractSetSettings()

  return {
    isValidating: apc.isValidating || css.isValidating,
    data: apc.data?.contracts.set === css.data?.default,
  }
}
