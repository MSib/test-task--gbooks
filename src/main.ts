import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import 'primeicons/primeicons.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import { CustomAura } from './theme.ts'
import ToastService from 'primevue/toastservice'
import router from './router'

const pinia = createPinia()
createApp(App)
  .use(router)
  .use(pinia)
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
