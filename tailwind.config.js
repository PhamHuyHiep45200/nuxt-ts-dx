import { COLOR } from './config/color.config'

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  content: [],
  theme: {
    extend: {
      colors: {
        primary: COLOR.PRIMARY,
      },
    },
  },
  plugins: [],
}
