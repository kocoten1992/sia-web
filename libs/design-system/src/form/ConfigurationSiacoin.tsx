import { SiacoinField } from '../core/SiacoinField'
import { ConfigurationTipNumber } from './ConfigurationTipNumber'
import { toHastings } from '@siafoundation/units'
import { FieldValues, Path, PathValue } from 'react-hook-form'
import { FieldLabelAndError } from '../components/Form'
import { FieldProps, useRegisterForm } from './configurationFields'
import BigNumber from 'bignumber.js'
import { useMemo } from 'react'

export function ConfigurationSiacoin<
  Values extends FieldValues,
  Categories extends string
>({ name, form, fields }: FieldProps<Values, Categories>) {
  const field = fields[name]
  const {
    average,
    suggestion,
    placeholder: _placeholder,
    units,
    suggestionTip,
    averageTip,
    before,
    after,
    decimalsLimitSc = 6,
    decimalsLimitFiat = 6,
    tipsDecimalsLimitSc = 0,
  } = field
  const { setValue, value, error } = useRegisterForm({
    name,
    field,
    form,
  })
  const Before = before || (() => null)
  const After = after || (() => null)
  const placeholder = useMemo(
    () =>
      _placeholder
        ? new BigNumber(_placeholder)
        : suggestion && typeof suggestion !== 'boolean'
        ? new BigNumber(suggestion)
        : undefined,
    [_placeholder, suggestion]
  )
  return (
    <div className="flex flex-col gap-3 items-end">
      <div className="flex flex-col w-[250px]">
        <Before name={name} form={form} fields={fields} />
        <div className="flex flex-col gap-3 w-[250px]">
          <SiacoinField
            name={name}
            size="small"
            sc={value}
            units={units}
            decimalsLimitSc={decimalsLimitSc}
            decimalsLimitFiat={decimalsLimitFiat}
            readOnly={field.readOnly}
            error={error}
            changed={form.formState.dirtyFields[name]}
            placeholder={placeholder}
            onChange={(val) => {
              setValue(val as PathValue<Values, Path<Values>>, true)
            }}
            onBlur={() => {
              setValue(value, true)
            }}
          />
          {average && (
            <ConfigurationTipNumber
              type="siacoin"
              label="Network average"
              tip={averageTip || 'Averages provided by Sia Central.'}
              decimalsLimit={tipsDecimalsLimitSc}
              value={toHastings(average as BigNumber)}
              onClick={() => {
                setValue(average as PathValue<Values, Path<Values>>, true)
              }}
            />
          )}
          {suggestion && suggestionTip && (
            <ConfigurationTipNumber
              type="siacoin"
              label="Suggestion"
              tip={suggestionTip}
              decimalsLimit={tipsDecimalsLimitSc}
              value={toHastings(suggestion as BigNumber)}
              onClick={() => {
                setValue(suggestion as PathValue<Values, Path<Values>>, true)
              }}
            />
          )}
          <After name={name} form={form} fields={fields} />
        </div>
      </div>
      <div className="h-[20px]">
        <FieldLabelAndError form={form} name={name} />
      </div>
    </div>
  )
}
