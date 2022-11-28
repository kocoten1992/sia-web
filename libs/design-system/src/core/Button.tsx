import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'

const variants = cva(
  [
    'inline-flex',
    'gap-1',
    'shrink-0',
    'items-center',
    'justify-center',
    'select-none',
    'leading-normal',
    'font-sans',
    'cursor-pointer',
    'overflow-hidden',
    'focus:z-10',
    'hover:z-10',
    // 'ml-px',
    'disabled:cursor-auto',
    'outline-none',
    'focus:ring ring-blue-500 dark:ring-blue-200',
    'transition-colors duration-75',
    // '[&>svg]:-mx-0.5',
  ],
  {
    variants: {
      size: {
        small: ['text-xs', 'px-2', 'h-7'],
        medium: ['text-base', 'px-4', 'h-10'],
        large: ['text-lg', 'px-4', 'h-12'],
        none: [],
      },
      state: {
        waiting: ['pointer-events-none'],
      },
      rounded: {
        true: 'rounded',
        false: '',
      },
      variant: {
        accent: [
          '[&>svg]:opacity-50',
          'bg-accent-800 dark:bg-accent-800',
          'enabled:hover:bg-accent-900 dark:enabled:hover:bg-accent-900',
          'disabled:bg-accent-800/70 disabled:dark:bg-accent-800/70',
          'disabled:border-accent-700/70 disabled:dark:border-accent-800/70',
          'border',
          'enabled:border-accent-800 dark:enabled:border-accent-800',
          'enabled:hover:border-accent-800 enabled:hover:dark:border-accent-800',
          'text-white dark:text-white',
          'disabled:text-white/50 disabled:dark:text-white/50',
        ],
        red: [
          '[&>svg]:opacity-50',
          'bg-red-800 dark:bg-red-800',
          'enabled:hover:bg-red-900 dark:enabled:hover:bg-red-900',
          'disabled:bg-red-800/70 disabled:dark:bg-red-800/70',
          'border',
          'border-red-800 dark:border-red-800',
          'enabled:hover:border-red-800 enabled:hover:dark:border-red-800',
          'text-white dark:text-white',
          'disabled:text-white/50 disabled:dark:text-white/50',
        ],
        gray: [
          '[&>svg]:opacity-50',
          'bg-white dark:bg-graydark-200',
          'enabled:hover:bg-gray-50 dark:enabled:hover:bg-graydark-300',
          'disabled:bg-gray-200 disabled:dark:bg-graydark-200',
          'border',
          'border-gray-400 dark:border-graydark-400',
          'enabled:hover:border-gray-500 enabled:hover:dark:border-graydark-500',
          'text-gray-1100 dark:text-white',
          'disabled:text-gray-600 disabled:dark:text-graydark-700',
        ],
        ghost: [
          'appearance-none border-none bg-transparent',
          'text-gray-1100 dark:text-white',
          'disabled:text-gray-600 disabled:dark:text-graydark-700',
        ],
        state: [
          'open:text-gray-1100 open:dark:text-white',
          'hover:text-gray-1000 hover:dark:text-graydark-1000',
          'text-gray-700 dark:text-graydark-800',
        ],
      },
    },
    defaultVariants: {
      variant: 'gray',
      size: 'small',
      rounded: true,
    },
  }
)

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof variants>
>(({ variant, size, state, rounded, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={variants({ variant, size, state, rounded, className })}
      {...props}
    />
  )
})

export const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & VariantProps<typeof variants>
>(({ variant, size, state, rounded, className, children, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={variants({ variant, size, state, rounded, className })}
      {...props}
    >
      {children}
    </a>
  )
})
