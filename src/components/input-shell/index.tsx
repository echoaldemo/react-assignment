import React, { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import cn from 'utils/cn'

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  label?: string
  note?: string
  optional?: boolean
  error?: string[] | string | boolean | null
  trailing?: React.ReactNode
  name: string
}

function InputShell({
  label,
  children,
  note,
  optional,
  trailing,
  name
}: Props) {
  const {
    formState: { errors }
  } = useFormContext()
  const error = errors[name]
  const errorMessage = error?.message
  const renderNote = useMemo(() => {
    if (error && typeof errorMessage === 'string') return errorMessage
    return note
  }, [note, errorMessage, error])
  return (
    <div className="relative w-full space-y-1.5">
      {label ? (
        <label
          htmlFor={name}
          className="flex justify-between text-xs text-description"
        >
          <p className="font-semibold">{label}</p>
          {optional ? <div>Optional</div> : null}
        </label>
      ) : null}
      {children}
      {trailing ? (
        <div className="absolute right-[1px] rounded-r top-6 z-10 !m-0 border-l border-outline bg-[#FAFAFA]">
          {trailing}
        </div>
      ) : null}
      {note ? (
        <div
          className={cn(
            'text-xs',
            errorMessage ? 'text-danger-base' : 'text-description'
          )}
        >
          {renderNote}
        </div>
      ) : null}
    </div>
  )
}

export default InputShell
