'use client'

import React from 'react'
import { Button } from 'flowbite-react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import { zodResolver } from '@hookform/resolvers/zod'

import { Input, Checkbox, TextLink } from '@/components'

const createFormSchema = (tv: ReturnType<typeof useTranslations>) =>
  z.object({
    email: z
      .email(tv('validation-email'))
      .min(1, tv('validation-email-required')),
    password: z.string().min(1, tv('validation-pass')),
    rememberLogin: z.boolean(),
  })

type FormData = z.infer<ReturnType<typeof createFormSchema>>

const LoginForm = () => {
  const tv = useTranslations('LoginForm')
  const t = useTranslations('LoginForm')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(createFormSchema(tv)),
    mode: 'onBlur',
  })

  const onSubmit = (data: FormData) => {
    console.log('Only for demo:', data)
  }

  return (
    <div className='flex w-112 flex-col items-center rounded-lg bg-dark-brand p-8 drop-shadow-lg'>
      <form
        className='flex w-full flex-col gap-y-8'
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className='text-left text-xl font-extralight text-white'>
          {t('form-head-line')}
        </h1>
        <Input
          id='email'
          label={t('form-field-email')}
          placeholder='name@example.com'
          error={errors.email?.message}
          {...register('email')}
          color={errors.email ? 'failure' : 'gray'}
        />
        <Input
          id='password'
          type='password'
          label={t('form-field-password')}
          placeholder='*********'
          error={errors.password?.message}
          {...register('password')}
          color={errors.password ? 'failure' : 'gray'}
        />
        <div className='flex flex-row items-center'>
          <Checkbox
            id='remember-checkbox'
            label={t('form-field-remember')}
            {...register('rememberLogin')}
          >
            <span className='text-sm font-medium leading-normal text-white'>
              {t('form-field-remember')}
            </span>
          </Checkbox>
        </div>
        <div className='flex flex-col'>
          <Button className='bg-primary' type='submit'>
            {t('form-submit')}
          </Button>
          <TextLink className=' text-sm text-primary underline' href='/'>
            {t('text-link-restore-password')}
          </TextLink>
        </div>
        <Button className='bg-rich-black' type='submit'>
          {t('form-button-login-github')}
        </Button>
        <span className='text-sm text-white'>
          {t('account-question')}{' '}
          <TextLink className=' text-primary underline' href='/'>
            {t('text-link-login')}
          </TextLink>
        </span>
      </form>
    </div>
  )
}

export default LoginForm
