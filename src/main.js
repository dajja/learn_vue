import './assets/main.css'

import { createApp } from 'vue'
import HomeViewVue from './views/HomeView.vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(HomeViewVue)

app.use(router)
app.use(createPinia())

app.mount('#app')
