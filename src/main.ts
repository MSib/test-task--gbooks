import { createApp } from 'vue'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { CustomAura } from './theme.ts'
import ToastService from 'primevue/toastservice'
import router from './router'

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: CustomAura,
      options: {
        cssLayer: {
          name: 'primevue',
          order: 'base, primevue',
        },
      },
    },
  })
  .use(ToastService)
  .mount('#app')
