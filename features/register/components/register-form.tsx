import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'

const formSchema = z
  .object({
    pseudonim: z
      .string()
      .min(1, 'Pseudonim musi zawierać odpowiednią ilość znaków'),
    imie: z.string().min(1, 'Imię musi zawierać odpowiednią ilość znaków'),
    nazwisko: z
      .string()
      .min(1, 'Nazwisko musi zawierać odpowiednią ilość znaków'),
    email: z
      .string()
      .min(1, 'Email jest wymagany')
      .email('E-mail musi mieć poprawny format'),
    password: z
      .string()
      .min(8, 'Hasło musi zawierać odpowiednią ilość znaków')
      .regex(/[A-Z]/, 'Hasło musi zawierać co najmniej jedną dużą literę')
      .regex(/[a-z]/, 'Hasło musi zawierać co najmniej jedną małą literę')
      .regex(/[0-9]/, 'Hasło musi zawierać co najmniej jedną liczbę')
      .regex(
        /[!@#$%^&*(),.?":{}|<>]/,
        'Hasło musi zawierać co najmniej jeden znak specjalny'
      ),
    confirmPassword: z.string().min(1, 'Hasło jest niezgodne'),
    rulesAccepted: z.boolean().refine((val) => val === true, {
      message: 'Musisz zaakceptować zasady i warunki świadczenia usług!',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Hasło jest niezgodne',
  })

type FormData = z.infer<typeof formSchema>

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
  })

  return (
    <div className='flex w-175 flex-col items-center rounded-lg bg-dark-brand p-8 drop-shadow-lg'>
      <form className='flex w-full flex-col gap-y-8'>
        <h1 className=' text-left text-xl font-extralight text-white'>
          Zarejestruj się
        </h1>
        <div className='flex flex-row justify-between'>
          <div className='w-75'>
            <Label className='text-white' htmlFor='name1'>
              Pseudonim
            </Label>
            <TextInput
              id='email1'
              type='email'
              placeholder='name@flowbite.com'
              required
              color='gray'
            />
          </div>
          <div className='w-75'>
            <Label className='text-white' htmlFor='name1'>
              Imię
            </Label>
            <TextInput
              id='email1'
              type='email'
              placeholder='name@flowbite.com'
              required
              color='gray'
            />
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='w-75'>
            <Label className='text-white' htmlFor='name1'>
              Nazwisko
            </Label>
            <TextInput
              id='email1'
              type='email'
              placeholder='name@flowbite.com'
              required
              color='gray'
            />
          </div>
          <div className='w-75'>
            <Label className='text-white' htmlFor='name1'>
              Twój e-mail
            </Label>
            <TextInput
              id='email1'
              type='email'
              placeholder='name@flowbite.com'
              required
              color='gray'
            />
          </div>
        </div>
        <div>
          <Label className='text-white' htmlFor='email1'>
            Hasło
          </Label>
          <TextInput
            id='email1'
            type='email'
            placeholder='name@flowbite.com'
            required
            color='gray'
          />
        </div>
        <div>
          <Label className='text-white' htmlFor='email1'>
            Potwierdź hasło
          </Label>
          <TextInput
            id='email1'
            type='email'
            placeholder='name@flowbite.com'
            required
            color='gray'
          />
        </div>
        <div className='flex items-center gap-x-4'>
          <Checkbox id='remember' />
          <Label className='text-white' htmlFor='remember'>
            Remember me
          </Label>
        </div>
        <Button className='bg-primary' type='submit'>
          Zarejestruj się
        </Button>
        <p className='text-white'>
          Już masz konto? <span>Zaloguj się</span>
        </p>
      </form>
    </div>
  )
}

export default RegisterForm
