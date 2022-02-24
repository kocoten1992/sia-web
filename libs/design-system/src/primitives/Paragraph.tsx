import React from 'react'
import { Text } from './Text'
import { VariantProps, CSS } from '../config/theme'

const DEFAULT_TAG = 'p'

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>
type ParagraphSizeVariants = '1' | '2' | '3'
type ParagraphVariants = { size?: ParagraphSizeVariants } & Omit<
  VariantProps<typeof Text>,
  'size'
>
type ParagraphProps = React.ComponentProps<typeof DEFAULT_TAG> &
  ParagraphVariants & { css?: CSS; as?: string }

export const Paragraph = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  ParagraphProps
>((props, forwardedRef) => {
  // '1' here is the default Paragraph size variant
  const { size = '2', ...textProps } = props

  // This is the mapping of Paragraph Variants to Text variants
  const textSize: Record<ParagraphSizeVariants, TextSizeVariants['size']> = {
    1: { '@initial': '2', '@bp2': '3' },
    2: { '@initial': '3', '@bp2': '4' },
    3: { '@initial': '5', '@bp2': '6' },
  }

  // This is the mapping of Paragraph Variants to Text css
  const textCss: Record<ParagraphSizeVariants, CSS> = {
    1: { lineHeight: '23px', '@bp2': { lineHeight: '23px' } },
    2: { lineHeight: '25px', '@bp2': { lineHeight: '27px' } },
    3: {
      lineHeight: '27px',
      '@bp2': { lineHeight: '30px' },
    },
  }
  return (
    <Text
      as={DEFAULT_TAG}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        ...textCss[size],
        ...props.css,
      }}
    />
  )
})
