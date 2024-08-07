/* eslint-disable react/no-unescaped-entities */
import {
  Code,
  ConfigFields,
  Separator,
  Switch,
  Text,
  Tooltip,
  hoursInDays,
  secondsInMinutes,
  toFixedMax,
} from '@siafoundation/design-system'
import BigNumber from 'bignumber.js'
import React from 'react'
import { ConfigViewMode, RecommendationItem, SettingsData } from './types'
import { humanSiacoin, toHastings } from '@siafoundation/units'
import { Information16 } from '@siafoundation/react-icons'

export const scDecimalPlaces = 6

type Categories =
  | 'storage'
  | 'gouging'
  | 'hosts'
  | 'wallet'
  | 'contractset'
  | 'uploadpacking'
  | 'redundancy'

type GetFields = {
  advancedDefaults?: SettingsData
  maxStoragePriceTBMonth: BigNumber
  maxUploadPriceTB: BigNumber
  minShards: BigNumber
  totalShards: BigNumber
  redundancyMultiplier: BigNumber
  storageAverage?: BigNumber
  uploadAverage?: BigNumber
  downloadAverage?: BigNumber
  contractAverage?: BigNumber
  isAutopilotEnabled: boolean
  configViewMode: ConfigViewMode
  recommendations: Partial<Record<keyof SettingsData, RecommendationItem>>
  allowanceDerivedPricing: boolean
  setAllowanceDerivedPricing: (value: boolean) => void
  validationContext: {
    isAutopilotEnabled: boolean
    configViewMode: ConfigViewMode
  }
}

export type Fields = ReturnType<typeof getFields>

export function getFields({
  advancedDefaults,
  maxStoragePriceTBMonth,
  maxUploadPriceTB,
  minShards,
  totalShards,
  redundancyMultiplier,
  storageAverage,
  uploadAverage,
  downloadAverage,
  contractAverage,
  recommendations,
  isAutopilotEnabled,
  configViewMode,
  validationContext,
  allowanceDerivedPricing,
  setAllowanceDerivedPricing,
}: GetFields): ConfigFields<SettingsData, Categories> {
  return {
    // storage
    storageTB: {
      type: 'number',
      category: 'storage',
      title: 'Expected storage',
      description: <>The amount of storage you would like to rent in TB.</>,
      units: 'TB',
      hidden: !isAutopilotEnabled,
      validation: {
        validate: {
          required: requiredIfAutopilot(validationContext),
        },
      },
    },
    uploadTBMonth: {
      type: 'number',
      category: 'storage',
      title: 'Expected upload',
      description: (
        <>The amount of upload bandwidth you plan to use each month in TB.</>
      ),
      units: 'TB/month',
      hidden: !isAutopilotEnabled,
      validation: {
        validate: {
          required: requiredIfAutopilot(validationContext),
        },
      },
    },
    downloadTBMonth: {
      type: 'number',
      category: 'storage',
      title: 'Expected download',
      description: (
        <>The amount of download bandwidth you plan to use each month in TB.</>
      ),
      units: 'TB/month',
      hidden: !isAutopilotEnabled,
      validation: {
        validate: {
          required: requiredIfAutopilot(validationContext),
        },
      },
    },
    allowanceMonth: {
      type: 'siacoin',
      category: 'storage',
      title: 'Allowance',
      description: (
        <>The amount of Siacoin you would like to spend per month.</>
      ),
      before: () => (
        <div className="pb-1">
          <Tooltip
            align="end"
            content="Automatically calculate and set max storage, upload, and download prices based on the allowance."
          >
            <div className="flex w-full justify-between">
              <Text weight="medium" color="verySubtle" size="14">
                Calculate prices
              </Text>
              <Switch
                aria-label="allowanceDerivedPricing"
                size="small"
                checked={allowanceDerivedPricing}
                onCheckedChange={setAllowanceDerivedPricing}
              />
            </div>
          </Tooltip>
        </div>
      ),
      units: 'SC/month',
      decimalsLimitSc: scDecimalPlaces,
      hidden: !isAutopilotEnabled,
      validation: {
        validate: {
          required: requiredIfAutopilotAndAdvanced(validationContext),
        },
      },
    },
    periodWeeks: {
      type: 'number',
      category: 'storage',
      title: 'Period',
      description: <>The length of the storage contracts.</>,
      units: 'weeks',
      suggestion: advancedDefaults?.periodWeeks,
      suggestionTip: `Typically ${advancedDefaults?.periodWeeks} weeks.`,
      hidden: !isAutopilotEnabled || configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAutopilotAndAdvanced(validationContext),
        },
      },
    },
    renewWindowWeeks: {
      type: 'number',
      category: 'storage',
      title: 'Renew window',
      description: (
        <>
          The number of weeks prior to contract expiration that Sia will attempt
          to renew your contracts.
        </>
      ),
      units: 'weeks',
      decimalsLimit: 6,
      suggestion: advancedDefaults?.renewWindowWeeks,
      suggestionTip: `Typically ${advancedDefaults?.renewWindowWeeks} weeks.`,
      hidden: !isAutopilotEnabled || configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAutopilotAndAdvanced(validationContext),
        },
      },
    },
    amountHosts: {
      type: 'number',
      category: 'storage',
      title: 'Hosts',
      description: <>The number of hosts to create contracts with.</>,
      units: 'hosts',
      decimalsLimit: 0,
      suggestion: advancedDefaults?.amountHosts,
      suggestionTip: `Typically ${advancedDefaults?.amountHosts} hosts.`,
      hidden: !isAutopilotEnabled || configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAutopilotAndAdvanced(validationContext),
        },
      },
    },
    autopilotContractSet: {
      type: 'text',
      category: 'storage',
      title: 'Contract set',
      description: (
        <>
          The contract set that autopilot should use. This should typically be
          the same as the default contract set.
        </>
      ),
      placeholder: advancedDefaults?.autopilotContractSet,
      suggestion: advancedDefaults?.autopilotContractSet,
      suggestionTip: (
        <>
          The default contract set is{' '}
          <Code>{advancedDefaults?.autopilotContractSet}</Code>.
        </>
      ),
      hidden: !isAutopilotEnabled || configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAutopilotAndAdvanced(validationContext),
        },
      },
    },
    prune: {
      type: 'boolean',
      category: 'storage',
      title: 'Prune sector roots',
      description: (
        <>
          When enabled, autopilot will try to prune deleted sector roots from
          contracts one contract at a time, for a max duration of 10 minutes per
          contract. For old hosts this process takes quite a while, while for
          new hosts it is fast. For new hosts pruning effectively deletes data
          from the contract, allowing the renter to stop paying for storage they
          are not using.
        </>
      ),
      suggestion: advancedDefaults?.prune,
      suggestionTip: (
        <>
          The default value is <Code>{advancedDefaults?.prune}</Code>.
        </>
      ),
      hidden: !isAutopilotEnabled || configViewMode === 'basic',
      validation: {},
    },

    // hosts
    allowRedundantIPs: {
      type: 'boolean',
      category: 'hosts',
      title: 'Redundant IPs',
      description: (
        <>
          Whether or not to allow forming contracts with multiple hosts in the
          same IP subnet. The subnets used are /16 for IPv4, and /64 for IPv6.
        </>
      ),
      suggestion: advancedDefaults?.allowRedundantIPs,
      suggestionTip: `Defaults to ${
        advancedDefaults?.allowRedundantIPs ? 'on' : 'off'
      }.`,
      hidden: !isAutopilotEnabled || configViewMode === 'basic',
      validation: {},
    },
    maxDowntimeHours: {
      type: 'number',
      category: 'hosts',
      title: 'Max downtime',
      description: (
        <>
          The maximum amount of host downtime that autopilot will tolerate in
          hours.
        </>
      ),
      units: 'hours',
      suggestion: advancedDefaults?.maxDowntimeHours,
      suggestionTip: `Defaults to ${advancedDefaults?.maxDowntimeHours
        .toNumber()
        .toLocaleString()} which is ${toFixedMax(
        new BigNumber(
          hoursInDays(advancedDefaults?.maxDowntimeHours.toNumber())
        ),
        1
      )} days.`,
      hidden: !isAutopilotEnabled || configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAutopilotAndAdvanced(validationContext),
        },
      },
    },
    minRecentScanFailures: {
      type: 'number',
      category: 'hosts',
      title: 'Min recent scan failures',
      description: (
        <>
          The minimum number of recent scan failures that autopilot will
          tolerate.
        </>
      ),
      units: 'scans',
      decimalsLimit: 0,
      suggestion: advancedDefaults?.minRecentScanFailures,
      suggestionTip: `Defaults to ${advancedDefaults?.minRecentScanFailures.toNumber()}.`,
      hidden: !isAutopilotEnabled || configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAutopilotAndAdvanced(validationContext),
        },
      },
    },
    minProtocolVersion: {
      type: 'text',
      category: 'hosts',
      title: 'Min protocol version',
      description: (
        <>
          The minimum protocol version that autopilot will consider when forming
          contracts with hosts.
        </>
      ),
      suggestion: advancedDefaults?.minProtocolVersion,
      suggestionTip: `Defaults to ${advancedDefaults?.minProtocolVersion}.`,
      hidden: !isAutopilotEnabled || configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAutopilotAndAdvanced(validationContext),
          version: requiredIfAutopilotAndAdvanced(
            validationContext,
            (value: string) => {
              const regex = /^\d+\.\d+\.\d+$/
              return regex.test(value) || 'must be a valid version number'
            }
          ),
        },
      },
    },

    // contract
    defaultContractSet: {
      category: 'contractset',
      type: 'text',
      title: 'Default contract set',
      placeholder: advancedDefaults?.defaultContractSet,
      suggestion: advancedDefaults?.defaultContractSet,
      suggestionTip: (
        <>
          Autopilot users will typically want to keep this the same as the
          autopilot contract set.
        </>
      ),
      description: (
        <>The default contract set is where data is uploaded to by default.</>
      ),
      hidden: configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAdvanced(validationContext),
        },
      },
    },
    uploadPackingEnabled: {
      category: 'uploadpacking',
      type: 'boolean',
      title: 'Upload packing',
      description: (
        <>
          Data on the Sia network is stored in 4MiB sectors. With the default 10
          of 30 redundancy scheme, uploaded files are split into 40MiB chunks
          and encoded into 120MiB slabs. This means that storage is wasted on
          padding and files smaller than 40MiB still use 120MiB of space. The
          redundancy scheme can be configured, but unless all files are exactly
          4MiB * the redundancy's minimum shards, there will always be wasted
          storage. Upload packing avoids this waste by buffering files and
          packing them together before they are uploaded to the network. This
          trades some performance for storage efficiency. It is also important
          to note that because buffered files are temporarily stored on disk
          they must be considered when backing up your renterd data.
        </>
      ),
      hidden: configViewMode === 'basic',
      validation: {},
    },

    // gouging
    maxStoragePriceTBMonth: {
      category: 'gouging',
      type: 'siacoin',
      title: 'Max storage price',
      description: (
        <>
          The max allowed price a host is allowed to charge to store 1 TB worth
          of data per month.
        </>
      ),
      readOnly: allowanceDerivedPricing,
      units: 'SC/TB/month',
      average: storageAverage,
      averageTip: 'Averages provided by Sia Central.',
      suggestion: recommendations.maxStoragePriceTBMonth?.targetValue,
      suggestionTip: 'This value will help you match with more hosts.',
      after: function After() {
        if (!maxStoragePriceTBMonth || !minShards || !totalShards) {
          return null
        }
        return (
          <>
            <Separator />
            <Tooltip
              align="start"
              side="bottom"
              content={
                <>
                  Price per TB/month when factoring in the configured{' '}
                  {minShards.toString()} of {totalShards.toString()} redundancy.
                </>
              }
            >
              <div className="flex gap-1 items-center relative overflow-hidden">
                <Text className="flex relative">
                  <Information16 />
                </Text>
                <Text size="12" ellipsis>
                  {humanSiacoin(
                    toHastings(maxStoragePriceTBMonth).times(
                      redundancyMultiplier
                    ),
                    {
                      fixed: 0,
                      dynamicUnits: false,
                    }
                  )}
                  /TB/month with redundancy
                </Text>
              </div>
            </Tooltip>
          </>
        )
      },
      decimalsLimitSc: scDecimalPlaces,
      validation: {
        required: 'required',
      },
    },
    maxUploadPriceTB: {
      category: 'gouging',
      type: 'siacoin',
      title: 'Max upload price',
      description: (
        <>
          The max allowed price a host is allowed to charge for uploading 1 TB
          worth of data.
        </>
      ),
      units: 'SC/TB',
      readOnly: allowanceDerivedPricing,
      average: uploadAverage,
      averageTip: 'Averages provided by Sia Central.',
      suggestion: recommendations.maxUploadPriceTB?.targetValue,
      suggestionTip: 'This value will help you match with more hosts.',
      after: function After() {
        if (!maxUploadPriceTB || !minShards || !totalShards) {
          return null
        }
        return (
          <>
            <Separator />
            <Tooltip
              align="start"
              side="bottom"
              content={
                <>
                  Price per TB when factoring in the configured{' '}
                  {minShards.toString()} of {totalShards.toString()} redundancy.
                </>
              }
            >
              <div className="flex gap-1 items-center relative overflow-hidden">
                <Text className="flex relative">
                  <Information16 />
                </Text>
                <Text size="12" ellipsis>
                  {humanSiacoin(
                    toHastings(maxUploadPriceTB).times(redundancyMultiplier),
                    {
                      fixed: 0,
                      dynamicUnits: false,
                    }
                  )}
                  /TB with redundancy
                </Text>
              </div>
            </Tooltip>
          </>
        )
      },
      decimalsLimitSc: scDecimalPlaces,
      validation: {
        required: 'required',
      },
    },
    maxDownloadPriceTB: {
      category: 'gouging',
      type: 'siacoin',
      title: 'Max download price',
      description: <>The max allowed price to download 1 TB.</>,
      units: 'SC/TB',
      readOnly: allowanceDerivedPricing,
      average: downloadAverage,
      averageTip: `Averages provided by Sia Central.`,
      suggestion: recommendations.maxDownloadPriceTB?.targetValue,
      suggestionTip: 'This value will help you match with more hosts.',
      decimalsLimitSc: scDecimalPlaces,
      validation: {
        required: 'required',
      },
    },
    maxContractPrice: {
      category: 'gouging',
      type: 'siacoin',
      title: 'Max contract price',
      description: <>The max allowed price to form a contract.</>,
      average: contractAverage,
      decimalsLimitSc: scDecimalPlaces,
      tipsDecimalsLimitSc: 3,
      hidden: configViewMode === 'basic',
      suggestion: recommendations.maxContractPrice?.targetValue,
      suggestionTip: 'This value will help you match with more hosts.',
      validation: {
        validate: {
          required: requiredIfAdvanced(validationContext),
        },
      },
    },
    maxRpcPriceMillion: {
      category: 'gouging',
      type: 'siacoin',
      title: 'Max RPC price',
      description: (
        <>The max allowed base price for RPCs in siacoins per million calls.</>
      ),
      units: 'SC/million',
      decimalsLimitSc: scDecimalPlaces,
      hidden: configViewMode === 'basic',
      suggestion: recommendations.maxRpcPriceMillion?.targetValue,
      suggestionTip: 'This value will help you match with more hosts.',
      validation: {
        validate: {
          required: requiredIfAdvanced(validationContext),
        },
      },
    },
    hostBlockHeightLeeway: {
      category: 'gouging',
      type: 'number',
      title: 'Block height leeway',
      description: (
        <>
          The amount of blocks of leeway given to the host block height in the
          host's price table.
        </>
      ),
      units: 'blocks',
      decimalsLimit: 0,
      ...(recommendations.hostBlockHeightLeeway
        ? {
            suggestion: recommendations.hostBlockHeightLeeway?.targetValue,
            suggestionTip: 'This value will help you match with more hosts.',
          }
        : {
            suggestion: advancedDefaults?.hostBlockHeightLeeway,
            suggestionTip: 'The recommended value is 6 blocks.',
          }),
      hidden: configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAdvanced(validationContext),
          min: requiredIfAdvanced(validationContext, (value) => {
            return (
              new BigNumber(value as BigNumber).gte(3) ||
              'must be at least 3 blocks'
            )
          }),
        },
      },
    },
    minPriceTableValidityMinutes: {
      category: 'gouging',
      type: 'number',
      title: 'Min price table validity',
      units: 'minutes',
      description: (
        <>The min accepted value for `Validity` in the host's price settings.</>
      ),
      hidden: configViewMode === 'basic',
      suggestion: recommendations.minPriceTableValidityMinutes?.targetValue,
      suggestionTip: 'This value will help you match with more hosts.',
      validation: {
        validate: {
          required: requiredIfAdvanced(validationContext),
          min: requiredIfAdvanced(validationContext, (value) => {
            return (
              new BigNumber(value as BigNumber).gte(secondsInMinutes(10)) ||
              'must be at least 10 seconds'
            )
          }),
        },
      },
    },
    minAccountExpiryDays: {
      category: 'gouging',
      type: 'number',
      title: 'Min account expiry',
      units: 'days',
      description: (
        <>
          The min accepted value for `AccountExpiry` in the host's price
          settings.
        </>
      ),
      hidden: configViewMode === 'basic',
      suggestion: recommendations.minAccountExpiryDays?.targetValue,
      suggestionTip: 'This value will help you match with more hosts.',
      validation: {
        validate: {
          required: requiredIfAdvanced(validationContext),
          min: requiredIfAdvanced(validationContext, (value) => {
            return (
              new BigNumber(value as BigNumber).gte(hoursInDays(1)) ||
              'must be at least 1 hour'
            )
          }),
        },
      },
    },
    minMaxEphemeralAccountBalance: {
      category: 'gouging',
      type: 'siacoin',
      title: 'Min max ephemeral account balance',
      description: (
        <>
          The min accepted value for `MaxEphemeralAccountBalance` in the host's
          price settings.
        </>
      ),
      decimalsLimitSc: scDecimalPlaces,
      hidden: configViewMode === 'basic',
      suggestion: recommendations.minMaxEphemeralAccountBalance?.targetValue,
      suggestionTip: 'This value will help you match with more hosts.',
      validation: {
        validate: {
          required: requiredIfAdvanced(validationContext),
          min: requiredIfAdvanced(validationContext, (value) => {
            return (
              new BigNumber(value as BigNumber).gte(1) ||
              'must be at least 1 SC'
            )
          }),
        },
      },
    },
    migrationSurchargeMultiplier: {
      category: 'gouging',
      type: 'number',
      title: 'Migration surcharge multiplier',
      units: '* download price',
      placeholder: '10',
      decimalsLimit: 1,
      description: (
        <>
          Factor that gets applied on the max download price when trying to
          download migration-critical sectors from a host that is price gouging.
          For example, when migrating a low-health file, if the download is
          failing but would potentially succeed with looser gouging settings, we
          apply the migration surcharge multiplier to overpay on every sector
          download if it means saving the file/migration.
        </>
      ),
      ...(recommendations.migrationSurchargeMultiplier
        ? {
            suggestion:
              recommendations.migrationSurchargeMultiplier?.targetValue,
            suggestionTip: 'This value will help you match with more hosts.',
          }
        : {
            suggestion: new BigNumber(10),
            suggestionTip: 'The default multiplier is 10x the download price.',
          }),
      hidden: configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAdvanced(validationContext),
        },
      },
    },

    // Redundancy
    minShards: {
      type: 'number',
      category: 'redundancy',
      title: 'Min shards',
      description: <>The min amount of shards needed to reconstruct a slab.</>,
      suggestion: advancedDefaults?.minShards,
      suggestionTip: `Typically ${advancedDefaults?.minShards} shards.`,
      units: 'shards',
      hidden: configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAdvanced(validationContext),
          min: requiredIfAdvanced(validationContext, (value) => {
            return (
              new BigNumber(value as BigNumber).gt(0) ||
              'must be greater than 0'
            )
          }),
        },
      },
      trigger: ['totalShards'],
    },
    totalShards: {
      type: 'number',
      category: 'redundancy',
      title: 'Total shards',
      description: <>The total amount of shards for each slab.</>,
      suggestion: advancedDefaults?.totalShards,
      suggestionTip: `Typically ${advancedDefaults?.totalShards} shards.`,
      units: 'shards',
      hidden: configViewMode === 'basic',
      validation: {
        validate: {
          required: requiredIfAdvanced(validationContext),
          gteMinShards: requiredIfAdvanced(
            validationContext,
            (value, values) =>
              new BigNumber(value as BigNumber).gte(values.minShards) ||
              'must be at least equal to min shards'
          ),
          max: requiredIfAdvanced(
            validationContext,
            (value) =>
              new BigNumber(value as BigNumber).lt(256) ||
              'must be less than 256'
          ),
        },
      },
    },
  }
}

function requiredIfAdvanced<Values>(
  context: { configViewMode: ConfigViewMode },
  method?: (value: unknown, values: Values) => string | boolean
) {
  return (value: unknown, values: Values) => {
    if (context.configViewMode === 'advanced') {
      if (method) {
        return method(value, values)
      }
      return !!value || 'required'
    }
    return true
  }
}

function requiredIfAutopilot<Values>(
  context: { isAutopilotEnabled: boolean },
  method?: (value: unknown, values: Values) => string | boolean
) {
  return (value: unknown, values: Values) => {
    if (context.isAutopilotEnabled) {
      if (method) {
        return method(value, values)
      }
      return !!value || 'required'
    }
    return true
  }
}

function requiredIfAutopilotAndAdvanced<Values>(
  context: {
    isAutopilotEnabled: boolean
    configViewMode: ConfigViewMode
  },
  method?: (value: unknown, values: Values) => string | boolean
) {
  return (value: unknown, values: Values) => {
    if (context.isAutopilotEnabled && context.configViewMode === 'advanced') {
      if (method) {
        return method(value, values)
      }
      return !!value || 'required'
    }
    return true
  }
}
