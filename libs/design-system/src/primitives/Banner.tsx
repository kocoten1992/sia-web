import { styled } from '../config/theme'

export const Banner = styled('div', {
  boxSizing: 'border-box',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$3',

  variants: {
    size: {
      '1': {
        py: '$2',
        px: '$4',
      },
    },
    variant: {
      loContrast: {
        backgroundColor: '$loContrast',
      },
      gray: {
        backgroundColor: '$brandGray4',
      },
      green: {
        backgroundColor: '$brandAccent7',
      },
      red: {
        backgroundColor: '$red7',
      },
    },
  },
  defaultVariants: {
    size: '1',
    variant: 'gray',
  },
})
