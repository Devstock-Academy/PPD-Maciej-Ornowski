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

  sidebar: {
    root: {
      base: 'h-screen bg-rich-black',
      collapsed: {
        on: 'w-auto',
        off: 'w-min-66',
      },
      inner:
        'h-full overflow-y-auto overflow-x-hidden bg-rich-black transition-all duration-300',
    },
    // collapse: {
    //   button:
    //     'group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
    //   icon: {
    //     base: 'h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
    //     open: {
    //       off: '',
    //       on: 'text-gray-900',
    //     },
    //   },
    //   label: {
    //     base: 'ml-3 flex-1 whitespace-nowrap text-left',
    //     title: 'sr-only',
    //     icon: {
    //       base: 'h-6 w-6 transition delay-0 ease-in-out',
    //       open: {
    //         on: 'rotate-180',
    //         off: '',
    //       },
    //     },
    //   },
    //   list: 'space-y-2 py-2',
    // },
    // cta: {
    //   base: 'mt-4 bg-rich-black py-4',
    //   color: {
    //     blue: 'bg-cyan-50 dark:bg-cyan-900',
    //     dark: 'bg-dark-50 dark:bg-dark-900',
    //     failure: 'bg-red-50 dark:bg-red-900',
    //     gray: 'bg-gray-50 dark:bg-gray-900',
    //     green: 'bg-green-50 dark:bg-green-900',
    //     light: 'bg-light-50 dark:bg-light-900',
    //     red: 'bg-red-50 dark:bg-red-900',
    //     purple: 'bg-purple-50 dark:bg-purple-900',
    //     success: 'bg-green-50 dark:bg-green-900',
    //     yellow: 'bg-yellow-50 dark:bg-yellow-900',
    //     warning: 'bg-yellow-50 dark:bg-yellow-900',
    //   },
    // },
    item: {
      base: 'group flex items-center justify-center p-2 text-base font-normal text-white hover:bg-transparent',
      active: 'bg-rich-brand text-orange-brand',
      // collapsed: {
      //   insideCollapse: 'group w-full pl-8 transition duration-75',
      //   noIcon: 'font-bold',
      // },
      content: {
        base: 'flex-1 whitespace-nowrap px-3',
      },
      icon: {
        base: 'h-6 w-6 shrink-0 text-gray-500 transition-transform duration-300 ease-in-out group-hover:scale-150 group-hover:text-white',
        active: 'text-orange-brand',
      },
      label: '',
      listItem: '',
    },
    items: {
      base: '',
    },
    itemGroup: {
      base: 'mt-4 space-y-2 border-t border-gray-700 pt-4 first:mt-0 first:border-t-0 first:pt-0',
    },
    // logo: {
    //   base: 'mb-5 flex items-center pl-2.5',
    //   collapsed: {
    //     on: 'hidden',
    //     off: 'self-center whitespace-nowrap text-xl font-semibold dark:text-white',
    //   },
    //   img: 'mr-3 h-6 sm:h-7',
    // },
  },
})

export default DevStockTheme
