import { createTheme } from 'flowbite-react'

const DevStockTheme = createTheme({
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
