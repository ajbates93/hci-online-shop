import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        'hci-gray': '#f3f3f3',
        'primary': '#00DC82',
        'primary-dark': '#3D8F56',
      }
    }
  }
}