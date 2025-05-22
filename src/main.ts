import './assets/styles/main.css'
import './assets/styles/animations.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Theme configuration
import { aliases, mdi } from 'vuetify/iconsets/mdi'

import App from './App.vue'

const app = createApp(App)

// Простая конфигурация Vuetify для портфолио
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#3b82f6',
          secondary: '#8b5cf6',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#06b6d4',
          surface: '#ffffff',
        },
      },
      dark: {
        colors: {
          primary: '#60a5fa',
          secondary: '#a78bfa',
          success: '#34d399',
          warning: '#fbbf24',
          error: '#f87171',
          info: '#22d3ee',
          surface: '#1f2937',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  defaults: {
    VBtn: {
      style: 'text-transform: none; font-weight: 500;',
    },
    VCard: {
      elevation: 0,
    },
  },
})

app.use(createPinia())
app.use(vuetify)

app.mount('#app')
