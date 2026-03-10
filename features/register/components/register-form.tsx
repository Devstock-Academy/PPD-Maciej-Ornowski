import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import React from 'react'
import clsx from 'clsx'

const formSchema = z
  .object({
    pseudonim: z.string().min(3, 'Wymagane przynajmniej 3 znaki'),
    imie: z.string().min(3, 'Wymagane przynajmniej 3 znaki'),
    nazwisko: z.string().min(3, 'Wymagane przynajmniej 3 znaki'),
    email: z.email('Niepoprawny adres e-mail').min(1, 'Email jest wymagany'),
    password: z
      .string()
      .min(8, 'Minimum 8 znaków')
      .regex(/[A-Z]/, 'Przynajmniej 1 duża litera')
      .regex(/[a-z]/, 'Przynajmniej 1 mała litera')
      .regex(/[0-9]/, 'Przynajmniej 1 liczba')
      .regex(/[!@#$%^&*(),.?":{}|<>]/, 'Przynajmniej 1 znak specjalny'),
    confirmPassword: z
      .string()
      .min(1, 'Musi zawierać dokładnie to, co pole hasło.'),
    rulesAccepted: z.boolean().refine((val) => val === true, {
      message: 'Musi być zaznaczony!',
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Musi zawierać dokładnie to, co pole hasło.',
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

  const [submitted, setSubmitted] = React.useState(false)
  const [showModal, setShowModal] = React.useState(false)
  const [email, setEmail] = React.useState('')

  const onSubmit = async (data: FormData) => {
    setEmail(data.email)
    reset()
    setSubmitted(true)
    setShowModal(true)
  }

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
              id='pseudonim'
              type='text'
              placeholder='Pseudonim'
              {...register('pseudonim')}
              className={clsx('border border-gray-600 bg-gray-700', {
                'border-[#F74746]': errors.pseudonim,
              })}
            />
            {errors.pseudonim && <p>{errors.pseudonim.message}</p>}
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
