import React from 'react'
import { Text } from './Text'
import { VariantProps, CSS } from '../config/theme'

const DEFAULT_TAG = 'h1'

// This is the mapping of Heading to Text size variants
const textSize: Record<HeadingSizeVariants, TextSizeVariants['size']> = {
  1: { '@initial': '3', '@bp2': '3' },
  2: { '@initial': '5', '@bp2': '5' },
  3: { '@initial': '6', '@bp2': '6' },
}

// This is the mapping of Heading to Text size variants
const textTag: Record<HeadingSizeVariants, string> = {
  1: 'h3',
  2: 'h2',
  3: 'h1',
}

// This is the mapping of Heading Variants to Text css
const textCss: Record<HeadingSizeVariants, CSS> = {
  1: {
    color: '$textContrast',
    fontWeight: 500,
    lineHeight: '$sizes$5',
    letterSpacing: '-1%',
    '@bp2': { lineHeight: '$sizes$5' },
  },
  2: {
    color: '$textContrast',
    fontWeight: 500,
    lineHeight: '110%',
    letterSpacing: '-1%',
    '@bp2': { lineHeight: '110%' },
  },
  3: {
    color: '$textContrast',
    fontWeight: 600,
    lineHeight: '110%',
    letterSpacing: '-1%',
    '@bp2': { lineHeight: '110%' },
  },
}

type TextSizeVariants = Pick<VariantProps<typeof Text>, 'size'>
type HeadingSizeVariants = '1' | '2' | '3'
type HeadingVariants = { size?: HeadingSizeVariants } & Omit<
  VariantProps<typeof Text>,
  'size'
>
type HeadingProps = React.ComponentProps<typeof DEFAULT_TAG> &
  HeadingVariants & { css?: CSS; as?: string }

export const Heading = React.forwardRef<
  React.ElementRef<typeof DEFAULT_TAG>,
  HeadingProps
>((props, forwardedRef) => {
  const { size = '1', ...textProps } = props

  const tag = textTag[size]

  return (
    <Text
      as={tag}
      {...textProps}
      ref={forwardedRef}
      size={textSize[size]}
      css={{
        fontVariantNumeric: 'proportional-nums',
        display: 'inline-block',
        ...textCss[size],
        ...props.css,
      }}
    />
  )
})
