import React from 'react'
import { Label, TextInput } from 'flowbite-react'

type InputProps = {
  label: string
  error?: string | undefined
  testId?: string
} & React.ComponentProps<typeof TextInput>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, testId, ...props }, ref) => {
    const id = React.useId()

    return (
      <div className='flex flex-col'>
        <Label className='font-medium leading-normal text-white' htmlFor={id}>
          {label}
        </Label>
        <TextInput id={id} ref={ref} {...props} data-testid={testId} />
        {error && (
          <p
            data-testid={testId}
            className='text-xs font-extralight leading-normal text-red-brand'
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
