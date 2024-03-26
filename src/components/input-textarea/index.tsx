import React, { forwardRef } from 'react'
import { useFormContext } from 'react-hook-form'
import cn from 'utils/cn'
import InputShell from '../input-shell'

interface Props
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  name: string
  label?: string
  note?: string
  trailing?: React.ReactNode
  leading?: React.ReactNode
}

export const InputTextArea = forwardRef<HTMLTextAreaElement, Props>(
  function Input(
    {
      name,
      label,
      required = true,
      note,
      trailing,
      className,
      leading,
      ...rest
    },
    ref
  ) {
    const {
      formState: { errors }
    } = useFormContext()
    const error = errors[name]
    const errorMessage = error?.message as string

    return (
      <InputShell
        name={name}
        label={label}
        note={errorMessage ?? note}
        optional={!required}
        error={errorMessage}
        trailing={trailing}
      >
        <div className={cn(leading ? 'flex flex-row-reverse' : 'block')}>
          <textarea
            className={cn(
              'form-input w-full',
              'text-sm leading-4',
              'placeholder:text-placeholder focus:border-transparent',
              'disabled:bg-fill-disabled disabled:text-disabled focus:ring-2 focus:ring-outline-active',
              error
                ? 'border-danger-base bg-danger-light text-danger-base'
                : 'border-outline focus:border-primary-base focus:bg-primary-light',
              leading ? 'border-r border-y rounded-r peer' : 'border rounded',
              className
            )}
            ref={ref}
            name={name}
            {...rest}
          />
          {leading ? (
            <div className="form-input py-2 flex items-center px-4 peer-focus:ring-2 peer-focus:ring-outline-active peer-focus:border-primary-base text-sm leading-4 rounded-l z-10 !m-0 border-l border-outline bg-gray-200">
              {leading}
            </div>
          ) : null}
        </div>
      </InputShell>
    )
  }
)

export default InputTextArea
