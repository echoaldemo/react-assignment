import { ComponentProps } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  useForm as useHookForm,
  UseFormProps as UseHookFormProps,
  FormProvider,
  UseFormReturn,
  FieldValues,
  SubmitHandler,
  useFieldArray
} from 'react-hook-form'
import { ZodSchema, TypeOf } from 'zod'

interface UseFormProps<T extends ZodSchema<any>>
  extends UseHookFormProps<TypeOf<T>> {
  schema: T
}

interface FormProps<T extends FieldValues = any>
  extends Omit<ComponentProps<'form'>, 'onSubmit'> {
  form: UseFormReturn<T>
  onSubmit: SubmitHandler<T>
  className?: string
}

export const useForm = <T extends ZodSchema<any>>({
  schema,
  ...formConfig
}: UseFormProps<T>) => {
  return useHookForm({
    ...formConfig,
    resolver: zodResolver(schema)
  })
}

export const useArray = useFieldArray

export const Form = <T extends FieldValues>({
  form,
  onSubmit,
  className,
  children,
  ...props
}: FormProps<T>) => {
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
        <fieldset disabled={form.formState.isSubmitting} className={className}>
          {children}
        </fieldset>
      </form>
    </FormProvider>
  )
}
