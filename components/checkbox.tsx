import React, { forwardRef } from 'react'
import { HelperText, Label, Checkbox as CheckboxFlowbite } from 'flowbite-react'

type CheckboxProps = {
  label?: string
  children: React.ReactNode
  error?: string | undefined
} & React.ComponentProps<typeof CheckboxFlowbite>

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, label, error, ...props }, ref) => {
    return (
      <div className='flex flex-col'>
        <div className='flex items-center gap-x-4'>
          <CheckboxFlowbite ref={ref} {...props} />
          <div className='flex flex-row items-center'>{children}</div>
        </div>
        {error && (
          <p className='text-xs font-extralight leading-normal text-red-brand'>
            {error}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export default Checkbox
