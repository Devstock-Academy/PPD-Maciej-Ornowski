import { Button, Checkbox, Label, TextInput } from 'flowbite-react'

const RegisterForm = () => {
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
