import { styled } from '../config/theme'

export const Badge = styled('span', {
  alignItems: 'center',
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  display: 'inline-flex',
  flexShrink: 0,
  fontFamily: '$mono',
  fontWeight: 500,
  justifyContent: 'center',
  lineHeight: '1',
  verticalAlign: 'middle',
  outline: 'none',
  padding: '0',
  textDecoration: 'none',
  userSelect: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&:disabled': {
    backgroundColor: '$control',
    pointerEvents: 'none',
    color: '$textDisabled',
  },
  '&::before': {
    boxSizing: 'border-box',
    content: '""',
  },
  '&::after': {
    boxSizing: 'border-box',
    content: '""',
  },

  // Custom
  backgroundColor: '$control',
  borderRadius: '$1',
  color: '$textSubtle',
  whiteSpace: 'nowrap',
  fontVariantNumeric: 'tabular-nums',
  textTransform: 'uppercase',
  height: '$3',
  px: '$1-5',
  fontSize: '$12',

  variants: {
    variant: {
      simple: {
        backgroundColor: '$loContrast',
        border: '1px solid $brandAccent9',
        color: '$brandAccent9',
        '&:focus': {
          boxShadow: '$colors$borderAccentActive, $colors$shadowActive',
        },
      },
      accent: {
        backgroundColor: '$brandAccent9',
        color: 'white',
        '&:focus': {
          boxShadow: '$colors$borderAccentActive, $colors$shadowActive',
        },
      },
      gray: {
        backgroundColor: '$control',
        color: '$textSubtle',
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$accentActive, 0 0 0 1px $colors$accentActive',
        },
      },
      green: {
        backgroundColor: '$green3',
        color: '$green11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8',
        },
      },
      red: {
        backgroundColor: '$red3',
        color: '$red11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$red8, 0 0 0 1px $colors$red8',
        },
      },
      crimson: {
        backgroundColor: '$crimson3',
        color: '$crimson11',
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$crimson8, 0 0 0 1px $colors$crimson8',
        },
      },
      pink: {
        backgroundColor: '$pink3',
        color: '$pink11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$pink8, 0 0 0 1px $colors$pink8',
        },
      },
      purple: {
        backgroundColor: '$purple3',
        color: '$purple11',
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$purple8, 0 0 0 1px $colors$purple8',
        },
      },
      violet: {
        backgroundColor: '$violet3',
        color: '$violet11',
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$violet8, 0 0 0 1px $colors$violet8',
        },
      },
      indigo: {
        backgroundColor: '$indigo3',
        color: '$indigo11',
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$indigo8, 0 0 0 1px $colors$indigo8',
        },
      },
      blue: {
        backgroundColor: '$blue3',
        color: '$blue11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
        },
      },
      cyan: {
        backgroundColor: '$cyan3',
        color: '$cyan11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$cyan8, 0 0 0 1px $colors$cyan8',
        },
      },
      teal: {
        backgroundColor: '$teal3',
        color: '$teal11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$teal8, 0 0 0 1px $colors$teal8',
        },
      },
      lime: {
        backgroundColor: '$lime3',
        color: '$lime11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$lime8, 0 0 0 1px $colors$lime8',
        },
      },
      yellow: {
        backgroundColor: '$yellow3',
        color: '$yellow11',
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$yellow8, 0 0 0 1px $colors$yellow8',
        },
      },
      orange: {
        backgroundColor: '$orange3',
        color: '$orange11',
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$orange8, 0 0 0 1px $colors$orange8',
        },
      },
      gold: {
        backgroundColor: '$gold3',
        color: '$gold11',
        '&:focus': {
          boxShadow: 'inset 0 0 0 1px $colors$gold8, 0 0 0 1px $colors$gold8',
        },
      },
      bronze: {
        backgroundColor: '$bronze3',
        color: '$bronze11',
        '&:focus': {
          boxShadow:
            'inset 0 0 0 1px $colors$bronze8, 0 0 0 1px $colors$bronze8',
        },
      },
    },
    flat: {
      true: {
        borderRadius: '0',
      },
    },
    interactive: {
      true: {},
    },
  },

  compoundVariants: [
    {
      interactive: true,
      variant: 'simple',
      css: {
        '@hover': {
          '&:hover': {
            borderColor: '$brandAccent10',
            color: '$brandAccent10',
          },
        },
        '&:active': {
          borderColor: '$brandAccent9',
          color: '$brandAccent9',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            borderColor: '$brandAccent10',
            color: '$brandAccent10',
          },
      },
    },
    {
      interactive: true,
      variant: 'accent',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$brandAccent10',
          },
        },
        '&:active': {
          backgroundColor: '$brandAccent9',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$brandAccent10',
          },
      },
    },
    {
      interactive: true,
      variant: 'red',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$red4',
          },
        },
        '&:active': {
          backgroundColor: '$red5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$red5',
          },
      },
    },
    {
      interactive: true,
      variant: 'green',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$green4',
          },
        },
        '&:active': {
          backgroundColor: '$green5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$green5',
          },
      },
    },
    {
      interactive: true,
      variant: 'crimson',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$crimson4',
          },
        },
        '&:active': {
          backgroundColor: '$crimson5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$crimson5',
          },
      },
    },
    {
      interactive: true,
      variant: 'gray',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$gray4',
          },
        },
        '&:active': {
          backgroundColor: '$gray5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$gray5',
          },
      },
    },
    {
      interactive: true,
      variant: 'pink',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$pink4',
          },
        },
        '&:active': {
          backgroundColor: '$pink5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$pink5',
          },
      },
    },
    {
      interactive: true,
      variant: 'purple',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$purple4',
          },
        },
        '&:active': {
          backgroundColor: '$purple5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$purple5',
          },
      },
    },
    {
      interactive: true,
      variant: 'violet',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$violet4',
          },
        },
        '&:active': {
          backgroundColor: '$violet5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$violet5',
          },
      },
    },
    {
      interactive: true,
      variant: 'indigo',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$indigo4',
          },
        },
        '&:active': {
          backgroundColor: '$indigo5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$indigo5',
          },
      },
    },
    {
      interactive: true,
      variant: 'blue',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$blue4',
          },
        },
        '&:active': {
          backgroundColor: '$blue5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$blue5',
          },
      },
    },
    {
      interactive: true,
      variant: 'cyan',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$cyan4',
          },
        },
        '&:active': {
          backgroundColor: '$cyan5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$cyan5',
          },
      },
    },
    {
      interactive: true,
      variant: 'teal',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$teal4',
          },
        },
        '&:active': {
          backgroundColor: '$teal5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$teal5',
          },
      },
    },
    {
      interactive: true,
      variant: 'lime',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$lime4',
          },
        },
        '&:active': {
          backgroundColor: '$lime5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$lime5',
          },
      },
    },
    {
      interactive: true,
      variant: 'yellow',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$yellow4',
          },
        },
        '&:active': {
          backgroundColor: '$yellow5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$yellow5',
          },
      },
    },
    {
      interactive: true,
      variant: 'orange',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$orange4',
          },
        },
        '&:active': {
          backgroundColor: '$orange5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$orange5',
          },
      },
    },
    {
      interactive: true,
      variant: 'gold',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$gold4',
          },
        },
        '&:active': {
          backgroundColor: '$gold5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$gold5',
          },
      },
    },
    {
      interactive: true,
      variant: 'bronze',
      css: {
        '@hover': {
          '&:hover': {
            backgroundColor: '$bronze4',
          },
        },
        '&:active': {
          backgroundColor: '$bronze5',
        },
        '&[data-radix-popover-trigger][data-state="open"], &[data-radix-dropdown-menu-trigger][data-state="open"]':
          {
            backgroundColor: '$bronze5',
          },
      },
    },
  ],
  defaultVariants: {
    variant: 'gray',
  },
})