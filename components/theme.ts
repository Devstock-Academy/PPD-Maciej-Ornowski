import { createTheme } from 'flowbite-react'

const DevStockTheme = createTheme({
  button: {
    color: {
      primary: 'bg-primary hover:bg-primary-800 text-white',
      orange: 'bg-orange-500 hover:bg-orange-600 text-white',
    },
  },

  textInput: {
    field: {
      input: {
        colors: {
          gray: 'bg-gray-700 border-gray-800 placeholder-gray-400 text-white',
          failure:
            'bg-gray-700 border-red-brand placeholder-gray-400 text-white',
        },
      },
    },
  },
})

export default DevStockTheme
