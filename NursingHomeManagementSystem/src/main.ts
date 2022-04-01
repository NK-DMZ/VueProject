import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "./router"
import axios from 'axios'
import NProgress from 'nprogress'
import "nprogress/nprogress.css"

// 进度条开启
axios.interceptors.request.use((config)=>{
    NProgress.start();
    return config;
})
// 进度条关闭
axios.interceptors.response.use((config)=>{
    NProgress.done();
    return config;
})

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount("#app")
