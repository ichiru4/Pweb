import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import 'virtual:svg-icons-register';
import SvgIcon from '@/components/SvgIcon.vue'
import App from './App.vue'
import router from './router'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.component('SvgIcon', SvgIcon)


app.mount('#app')
