import { Separator } from '../core/Separator'
import { PanelMenuSection } from '../app/PanelMenuSection'
import { Fragment } from 'react'
import { FieldValues, Path, UseFormReturn } from 'react-hook-form'
import {
  ConfigField,
  ConfigFields,
  shouldShowField,
} from './configurationFields'
import { ConfigurationPanelSetting } from './ConfigurationPanelSetting'

type Props<Values extends FieldValues, Categories extends string> = {
  title: string
  category: string
  form: UseFormReturn<Values>
  fields: ConfigFields<Values, Categories>
}

export function ConfigurationPanel<
  Values extends FieldValues,
  Categories extends string
>({ title, category, form, fields }: Props<Values, Categories>) {
  const names = (
    Object.entries(fields) as [Path<Values>, ConfigField<Values, Categories>][]
  )
    .filter(
      ([name, val]) =>
        val.category === category && shouldShowField({ form, fields, name })
    )
    .map(([name]) => name)

  if (names.length === 0) {
    return null
  }
  return (
    <PanelMenuSection title={title}>
      {names.map((name, i) => {
        return (
          <Fragment key={name}>
            <ConfigurationPanelSetting
              name={name}
              form={form}
              fields={fields}
            />
            {i < names.length - 1 && <Separator className="w-full my-3" />}
          </Fragment>
        )
      })}
    </PanelMenuSection>
  )
}
