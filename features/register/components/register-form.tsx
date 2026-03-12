'use client'

import React from 'react'
import { Button, Checkbox, HelperText, Label, TextInput } from 'flowbite-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'

import { Modal } from '@/components'

const createFormSchema = (tv: ReturnType<typeof useTranslations>) =>
  z
    .object({
      nickname: z.string().min(3, tv('validation-text-field-error')),
      firstname: z.string().min(3, tv('validation-text-field-error')),
      secondname: z.string().min(3, tv('validation-text-field-error')),
      email: z
        .email(tv('validation-email'))
        .min(1, tv('validation-email-required')),
      password: z
        .string()
        .min(8, tv('validation-pass'))
        .regex(/[A-Z]/, tv('validation-pass-capital'))
        .regex(/[a-z]/, tv('validation-pass-small'))
        .regex(/[0-9]/, tv('validation-pass-numbers'))
        .regex(/[!@#$%^&*(),.?":{}|<>]/, tv('validation-pass-specials')),
      confirmPassword: z.string().min(1, tv('validation-repass')),
      rulesAccepted: z.boolean().refine((val) => val === true, {
        message: tv('validation-checkbox'),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: tv('validation-repass'),
    })

type FormData = z.infer<ReturnType<typeof createFormSchema>>

const RegisterForm = () => {
  const tv = useTranslations('RegisterForm')
  const t = useTranslations('RegisterForm')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(createFormSchema(tv)),
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
          {t('form-head-line')}
        </h1>
        <div className='flex flex-row justify-between'>
          <div className='w-75'>
            <Label
              className='font-medium leading-normal text-white'
              htmlFor='nickname'
            >
              {t('form-field-nick')}
            </Label>
            <TextInput
              id='nickname'
              type='text'
              placeholder={t('form-field-nick')}
              {...register('nickname')}
              color='gray'
            />
            {errors.nickname && (
              <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
                {errors.nickname.message}
              </HelperText>
            )}
          </div>
          <div className='w-75'>
            <Label className='text-white' htmlFor='firstname'>
              {t('form-field-first-name')}
            </Label>
            <TextInput
              id='firstname'
              type='text'
              placeholder={t('form-field-first-name')}
              {...register('firstname')}
              color='gray'
            />
            {errors.firstname && (
              <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
                {errors.firstname.message}
              </HelperText>
            )}
          </div>
        </div>
        <div className='flex flex-row justify-between'>
          <div className='w-75'>
            <Label className='text-white' htmlFor='secondname'>
              {t('form-field-second-name')}
            </Label>
            <TextInput
              id='secondname'
              type='text'
              placeholder={t('form-field-second-name')}
              {...register('secondname')}
              color='gray'
            />
            {errors.secondname && (
              <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
                {errors.secondname.message}
              </HelperText>
            )}
          </div>
          <div className='w-75'>
            <Label className='text-white' htmlFor='email'>
              {t('form-field-email')}
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
            {t('form-field-password')}
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
            {t('form-field-password-confirm')}
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
              {t('form-field-rules')}
              <span className='text-primary underline'>
                {t('form-field-rules-link')}
              </span>
            </Label>
          </div>
          {errors.rulesAccepted && (
            <HelperText className='text-xs font-extralight leading-normal text-[#F74746]'>
              {errors.rulesAccepted.message}
            </HelperText>
          )}
        </div>

        <Button className='bg-primary' type='submit' disabled={isSubmitting}>
          {t('form-submit')}
        </Button>
        <p className='text-white'>
          {t('account-question')}
          <span className='text text-primary underline'>
            {t('nav-text-login')}
          </span>
        </p>
        <Modal
          show={showModal}
          header={<h1>{t('modal-head-line')}</h1>}
          body={<p>{t('modal-email-verification')}</p>}
          footer={
            <Button
              onClick={() => setShowModal(false)}
              className='w-75 rounded-md bg-primary px-3 py-2 text-xs leading-6 text-white hover:bg-primary-800 '
            >
              {t('modal-resend-button')}
            </Button>
          }
        />
      </form>
    </div>
  )
}

export default RegisterForm
