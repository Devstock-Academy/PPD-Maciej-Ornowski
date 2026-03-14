import React, { forwardRef } from 'react'
import { HelperText, Label, Checkbox as CheckboxFlowbite } from 'flowbite-react'

type CheckboxProps = {
  label: string
  error?: string | undefined
} & React.ComponentProps<typeof CheckboxFlowbite>

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className='flex flex-col'>
        <div className='flex items-center gap-x-4'>
          <CheckboxFlowbite ref={ref} {...props} />
          <Label className='text-white' htmlFor={label}>
            {label}
          </Label>
        </div>
        {error && (
          <HelperText className='text-xs font-extralight leading-normal text-red-brand'>
            {error}
          </HelperText>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
