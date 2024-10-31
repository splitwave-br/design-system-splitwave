import { PropsWithChildren } from 'react'
import { FormProvider, UseFormReturn } from 'react-hook-form'

type ContainerProps<FieldValues extends {}> = PropsWithChildren & {
  // onSubmit: (data: FieldValues) => Promise<void>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  registerForm: UseFormReturn<FieldValues>
  className?: string
}

export const Container = <FieldValues extends {}>({
  children,
  onSubmit,
  registerForm,
  ...props
}: ContainerProps<FieldValues>) => {
  const { handleSubmit } = registerForm

  return (
    <FormProvider {...registerForm}>
      <form {...props} onSubmit={onSubmit}>
        {children}
      </form>
    </FormProvider>
  )
}
