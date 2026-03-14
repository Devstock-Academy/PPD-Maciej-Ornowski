import React, { forwardRef } from 'react'
import { HelperText, Label, TextInput } from 'flowbite-react'

type InputProps = {
  label: string
  error?: string | undefined
} & React.ComponentProps<typeof TextInput>

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className='flex flex-col'>
        <Label
          className='font-medium leading-normal text-white'
          htmlFor={label}
        >
          {label}
        </Label>
        <TextInput ref={ref} {...props} />
        {error && (
          <HelperText className='text-xs font-extralight leading-normal text-red-brand'>
            {error}
          </HelperText>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
