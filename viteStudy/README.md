# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

# 项目初始化
## 项目创建
npm create @vitejs/app
选择Vue-ts
再npm install
启动项目
npm run dev

## 安装element UI
参照网址：
https://element-plus.gitee.io/zh-CN/guide/quickstart.html
1.命令行安装
npm install element-plus --save
2.在main.js里面进行import引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
3.修改app实例
const app = createApp(App)
app.use(ElementPlus)
app.mount("#app")

## 安装axios
npm install axios

## 设置环境变量
一直在Axios.vue文件里面写网址路径是比较麻烦的行为，因此我们设置环境变量方便我们的开发
https://cn.vitejs.dev/guide/env-and-mode.html#production-replacement

1.创建.env.develpment文件
2.在main.js文件引入
import axios from "axios"
axios.defaults.baseURL = String(import.meta.env.VITE_APP_URL)
3.在Axios.vue文件中将
 axios.get("http://localhost:3005/products")修改为
  axios.get("/products")
