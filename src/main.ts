import './assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

import { createPinia } from 'pinia'

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        dark: true,
        colors: {
          'text-color': '#f8f8f8',
          'text-color-darken-10': '#dedede',
          'text-color-grey': '#cccccc',
          'text-color-muted': '#aaaaaa',
          'text-color-gold': '#e6c200',
          'border-light-1': '#3c3c3c4a',
          'border-light-2': '#3c3c3c1f',
          'background-red': '#b00020',
          'background-orange': '#fb8c20'
        }
      },
      light: {
        dark: false,
        colors: {
          'text-color': '#3c3c3c',
          'text-color-darken-10': '#222222',
          'text-color-grey': '#cccccc',
          'text-color-muted': '#eeeeee',
          'text-color-gold': '#ccac00',
          'border-light-1': '#3c3c3c4a',
          'border-light-2': '#3c3c3c1f',
          'background-red': '#b00020',
          'background-orange': '#fb8c20'
        }
      }
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})

const pinia = createPinia()

createApp(App).use(router).use(vuetify).use(pinia).mount('#app')
