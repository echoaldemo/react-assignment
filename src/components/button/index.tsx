import React from 'react'
import cn from 'utils/cn'

export type TButtonVariants =
  | 'primary'
  | 'secondary'
  | 'neutralPrimary'
  | 'outlinePrimary'
  | 'info'
  | 'warning'
  | 'base'
  | 'danger'
  | 'link'
  | 'tab'
  | 'successFill'
  | 'dangerFill'
  | 'success'

export interface IButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  className?: string
  variant?: TButtonVariants
  size?: 'xs' | 'sm' | 'base' | 'lg'
  leadingIcon?: JSX.Element | (() => JSX.Element)
  trailingIcon?: JSX.Element | (() => JSX.Element)
}

const MAP_SIZE_CLASS = {
  xs: 'min-h-[24px] px-1 text-xs rounded',
  sm: 'min-h-[32px] px-3 text-xs rounded',
  base: 'min-h-[40px] px-4 text-xs rounded',
  lg: 'min-h-[48px] px-5 text-xs rounded'
}

const MAP_VARIANT_CLASS = {
  base: 'shadow-sm text-description bg-fill-light hover:bg-fill-dark',
  primary:
    'shadow-sm text-white bg-primary-base border-primary-base hover:bg-primary-dark hover:ring hover:ring-offset-1 hover:ring-primary-base',
  secondary:
    'shadow-sm text-white bg-secondary-base border-secondary-base hover:bg-secondary-dark hover:ring hover:ring-offset-1 hover:ring-secondary-base',
  neutralPrimary:
    'shadow-sm text-primary-base bg-fill-light hover:bg-fill-dark',
  outlinePrimary:
    'shadow-sm text-primary-base border-primary-base bg-primary-light hover:bg-fill-dark',
  info: 'shadow-sm text-white bg-info-base border-info-base hover:bg-info-dark hover:ring hover:ring-offset-1 hover:ring-info-base',
  warning:
    'shadow-sm text-white bg-warning-base border-warning-base hover:bg-warning-dark hover:ring hover:ring-offset-1 hover:ring-warning-base',
  danger: 'shadow-sm text-danger-base bg-fill-light hover:bg-fill-dark',
  link: 'text-primary-base bg-transparent border-transparent hover:text-primary-dark focus:ring-0 active:!shadow-none !p-0',
  tab: 'rounded-full active:!shadow-none border-transparent focus:ring-0 transition-colors duration-300',
  dangerFill: 'shadow-sm text-white bg-danger-base hover:bg-danger-dark',
  successFill: 'shadow-sm text-white bg-success-base hover:bg-success-dark',
  success:
    'shadow-sm text-success-dark border-success-base bg-fill-light hover:bg-fill-dark'
}

function Button({
  className,
  children,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  ...rest
}: IButtonProps): JSX.Element {
  return (
    <button
      className={cn(
        className,
        'inline-flex items-center justify-center truncate border font-semibold transition',
        'ring-outline-active focus:outline-none focus:ring active:shadow-active',
        MAP_SIZE_CLASS[size ?? 'base'],
        MAP_VARIANT_CLASS[variant ?? 'base'],
        'disabled:border-outline disabled:bg-fill-disabled disabled:text-disabled disabled:ring-transparent',
        'space-x-2'
      )}
      type="button"
      {...rest}
    >
      <>
        {leadingIcon}
        {children ? <span>{children}</span> : null}
        {trailingIcon}
      </>
    </button>
  )
}

export default Button
