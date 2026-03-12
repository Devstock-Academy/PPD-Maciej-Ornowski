'use client'

import { Button, Checkbox, HelperText, Label, TextInput } from 'flowbite-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import React from 'react'
import clsx from 'clsx'

import ModalFlow from '@/components/modal-flowbite'

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
      <form
        className='flex w-full flex-col gap-y-8'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-left text-xl font-extralight text-white'>
          Zarejestruj się
        </h1>
        <div className='flex flex-row justify-between'>
          <div className='w-75'>
            <Label
              className='font-medium leading-normal text-white'
              htmlFor='pseudonim'
            >
              Pseudonim
            </Label>
            <TextInput
              id='pseudonim'
              type='text'
              placeholder='Pseudonim'
              {...register('pseudonim')}
              color='gray'
            />
            {errors.pseudonim && (
              <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
                {errors.pseudonim.message}
              </HelperText>
            )}
          </div>
          <div className='w-75'>
            <Label className='text-white' htmlFor='imie'>
              Imię
            </Label>
            <TextInput
              id='imie'
              type='text'
              placeholder='Imię'
              {...register('imie')}
              color='gray'
            />
            {errors.imie && (
              <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
                {errors.imie.message}
              </HelperText>
            )}
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='w-75'>
            <Label className='text-white' htmlFor='nazwisko'>
              Nazwisko
            </Label>
            <TextInput
              id='nazwisko'
              type='text'
              placeholder='Nazwisko'
              {...register('nazwisko')}
              color='gray'
            />
            {errors.nazwisko && (
              <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
                {errors.nazwisko.message}
              </HelperText>
            )}
          </div>
          <div className='w-75'>
            <Label className='text-white' htmlFor='email'>
              Twój e-mail
            </Label>
            <TextInput
              id='email'
              type='email'
              placeholder='name@example.com'
              {...register('email')}
              color='gray'
            />
            {errors.email && (
              <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
                {errors.email.message}
              </HelperText>
            )}
          </div>
        </div>
        <div>
          <Label className='text-white' htmlFor='password'>
            Hasło
          </Label>
          <TextInput
            id='password'
            type='password'
            placeholder='*********'
            {...register('password')}
            color='gray'
          />
          {errors.password && (
            <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
              {errors.password.message}
            </HelperText>
          )}
        </div>
        <div>
          <Label className='text-white' htmlFor='confirmPassword'>
            Potwierdź hasło
          </Label>
          <TextInput
            id='confirmPassword'
            type='password'
            placeholder='*********'
            {...register('confirmPassword')}
            color='gray'
          />
          {errors.confirmPassword && (
            <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
              {errors.confirmPassword.message}
            </HelperText>
          )}
        </div>
        <div className='flex flex-col'>
          <div className='flex items-center gap-x-4'>
            <Checkbox id='rulesAccespted' {...register('rulesAccepted')} />
            <Label className='text-white' htmlFor='rulesAccespted'>
              Akceptuję{' '}
              <span className='text-primary underline'>zasady i warunki</span>
            </Label>
          </div>
          {errors.rulesAccepted && (
            <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
              {errors.rulesAccepted.message}
            </HelperText>
          )}
        </div>

        <Button className='bg-primary' type='submit' disabled={isSubmitting}>
          Zarejestruj się
        </Button>
        <p className='text-white'>
          Już masz konto?{' '}
          <span className='text text-primary underline'>Zaloguj się</span>
        </p>
        <ModalFlow
          show={showModal}
          header={<h1>To jest header</h1>}
          body={<p>To jest contetn nice :-)</p>}
          footer={
            <Button
              onClick={() => setShowModal(false)}
              className='w-75 rounded-md bg-primary px-3 py-2 text-xs leading-6 text-white hover:bg-primary-800 '
            ></Button>
          }
        />
      </form>
    </div>
  )
}

export default RegisterForm
