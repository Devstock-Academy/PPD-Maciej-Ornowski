'use client'

import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'

import { Modal, Input, Checkbox, TextLink, Button } from '@/components'

const createFormSchema = (t: ReturnType<typeof useTranslations>) =>
  z
    .object({
      nickname: z.string().min(3, t('validation-text-field-error')),
      firstname: z.string().min(3, t('validation-text-field-error')),
      secondname: z.string().min(3, t('validation-text-field-error')),
      email: z
        .email(t('validation-email'))
        .min(1, t('validation-email-required')),
      password: z
        .string()
        .min(8, t('validation-pass'))
        .regex(/[A-Z]/, t('validation-pass-capital'))
        .regex(/[a-z]/, t('validation-pass-small'))
        .regex(/[0-9]/, t('validation-pass-numbers'))
        .regex(/[!@#$%^&*(),.?":{}|<>]/, t('validation-pass-specials')),
      confirmPassword: z.string().min(1, t('validation-repass')),
      rulesAccepted: z.boolean().refine((val) => val === true, {
        message: t('validation-checkbox'),
      }),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ['confirmPassword'],
      message: t('validation-repass'),
    })

type FormData = z.infer<ReturnType<typeof createFormSchema>>

const RegisterForm = () => {
  const t = useTranslations('RegisterForm')
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(createFormSchema(t)),
    mode: 'onBlur',
  })
  const [showModal, setShowModal] = React.useState(false)

  const onSubmit = async () => {
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
        <div className='flex flex-row justify-between gap-x-9'>
          <div className='w-full'>
            <Input
              testId='nick'
              label={t('form-field-nick')}
              placeholder={t('form-field-nick')}
              error={errors.nickname?.message}
              {...register('nickname')}
              color={errors.nickname ? 'failure' : 'gray'}
            />
          </div>
          <div className='w-full'>
            <Input
              testId='name'
              label={t('form-field-first-name')}
              placeholder={t('form-field-first-name')}
              error={errors.firstname?.message}
              {...register('firstname')}
              color={errors.firstname ? 'failure' : 'gray'}
            />
          </div>
        </div>
        <div className='flex flex-row justify-between gap-x-9'>
          <div className='w-full'>
            <Input
              testId='lastName'
              label={t('form-field-second-name')}
              placeholder={t('form-field-second-name')}
              error={errors.secondname?.message}
              {...register('secondname')}
              color={errors.secondname ? 'failure' : 'gray'}
            />
          </div>
          <div className='w-full'>
            <Input
              testId='email'
              label={t('form-field-email')}
              placeholder='name@example.com'
              error={errors.email?.message}
              {...register('email')}
              color={errors.email ? 'failure' : 'gray'}
            />
          </div>
        </div>
        <Input
          testId='password'
          type='password'
          label={t('form-field-password')}
          placeholder='*********'
          error={errors.password?.message}
          {...register('password')}
          color={errors.password ? 'failure' : 'gray'}
        />
        <Input
          testId='confirmPassword'
          type='password'
          label={t('form-field-password-confirm')}
          placeholder='*********'
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
          color={errors.confirmPassword ? 'failure' : 'gray'}
        />
        <div className='flex flex-row items-center'>
          <Checkbox
            testId='acceptTerms'
            label={t('form-field-rules')}
            error={errors.rulesAccepted?.message}
            {...register('rulesAccepted')}
          >
            <span className='text-sm text-white'>
              {t('form-field-rules')}{' '}
              <TextLink className=' text-primary underline' href='/'>
                {t('form-field-rules-link')}
              </TextLink>
            </span>
          </Checkbox>
        </div>

        <Button
          className='bg-primary'
          type='submit'
          testId='registrationSubmit'
          disabled={isSubmitting}
        >
          {t('form-submit')}
        </Button>
        <span className='text-sm text-white'>
          {t('account-question')}{' '}
          <TextLink className=' text-primary underline' href='/'>
            {t('nav-text-login')}
          </TextLink>
        </span>
        <Modal show={showModal}>
          <div className='flex flex-col items-center gap-y-8 rounded-lg bg-dark-brand py-8'>
            <p className='text-2xl font-extralight text-white'>
              {t('modal-head-line')}
            </p>
            <p className='font-medium text-white'>
              {t('modal-email-verification', { email: getValues('email') })}
            </p>
            <p className='font-medium text-white'>
              {t('modal-delivery-confirmation-question')}
            </p>
            <Button
              onClick={() => setShowModal(false)}
              className='w-75 rounded-md bg-primary px-3 py-2 text-lg leading-6 text-white hover:bg-primary-800 '
            >
              {t('modal-resend-button')}
            </Button>
          </div>
        </Modal>
      </form>
    </div>
  )
}

export default RegisterForm
