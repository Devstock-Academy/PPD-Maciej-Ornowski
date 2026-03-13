import React from 'react'
import { HelperText, Label, TextInput } from 'flowbite-react'

type InputProps = {
  label: string
  error?: string
}

const Input: React.FC<InputProps> = ({ label, error, ...props }) => {
  return (
    <div className='w-75'>
      <Label className='font-medium leading-normal text-white' htmlFor={label}>
        {label}
      </Label>
      <TextInput id={label} placeholder={label} {...props} />
      {error && (
        <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
          {error}
        </HelperText>
      )}
    </div>
  )
}

export default Input
