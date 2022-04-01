import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import axios from "axios"
axios.defaults.baseURL = String(import.meta.env.VITE_APP_URL)

// 把原来的注释掉
// createApp(App).mount('#app')

// 自己修改的
const app = createApp(App)
app.use(ElementPlus)
app.mount("#app")
