import React, { forwardRef, useMemo, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import cn from 'utils/cn'
import InputShell from '../input-shell'

interface Props
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  name: string
  label?: string
  note?: string
}

export const InputPassword = forwardRef<HTMLInputElement, Props>(
  function InputPassword({ name, label, required = true, note, ...rest }, ref) {
    const {
      formState: { errors }
    } = useFormContext()
    const [showPassword, setShowPassword] = useState(false)
    const error = errors[name]
    const errorMessage = error?.message as string
    const HideButton = useMemo(
      () => (
        <button
          onClick={(e) => {
            e.preventDefault()
            setShowPassword((val) => !val)
          }}
          className="h-[37px] font-semibold text-xs text-center w-[60px]"
          type="button"
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      ),
      [showPassword]
    )
    return (
      <InputShell
        name={name}
        label={label}
        note={errorMessage ?? note}
        optional={!required}
        error={errorMessage}
        trailing={HideButton}
      >
        <input
          className={cn(
            'form-input h-10 w-full rounded',
            'text-sm leading-4',
            'placeholder:text-placeholder focus:border-transparent focus:ring-2 focus:ring-outline-active',
            'disabled:bg-fill-disabled disabled:text-disabled',
            error
              ? 'border-danger-base bg-danger-light text-danger-base'
              : 'border-outline focus:border-primary-base focus:bg-primary-light'
          )}
          type={showPassword ? 'text' : 'password'}
          ref={ref}
          name={name}
          {...rest}
        />
      </InputShell>
    )
  }
)

export default InputPassword
