# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

# Reader
## 项目创建
启动项目
npm run dev

## 安装element UI
参照网址：
https://element-plus.gitee.io/zh-CN/guide/quickstart.html
命令行安装
npm install element-plus --save

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

## Vue Router
1.安装路由
npm install vue-router@4
2.创建router文件夹，文件夹里面创建index.js文件
3.编写index.js文件
import { createRouter, createWebHashHistory } from "vue-router";
import Layout from "../components/Layout/index.vue"
const routes = [
    
]
const router = createRouter({
    history:createWebHashHistory(),
    routes,
})
export default router;
4.在main.ts中引入
5.在需要跳转的vue组件中写路由出口
比如在App.vue中写
<template>
  <router-view></router-view>
</template>
6.配置404
https://router.vuejs.org/zh/guide/essentials/dynamic-matching.html#%E6%8D%95%E8%8E%B7%E6%89%80%E6%9C%89%E8%B7%AF%E7%94%B1%E6%88%96-404-not-found-%E8%B7%AF%E7%94%B1
{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
7.挂载路由需要注意
在main.ts中app.mount("#app")需要写在app.use(router)后面

## 安装Apache ECharts
npm install echarts --save

## 安装vuex
npm install vuex@next --save

## 配置请求进度条
nprogress
npm install --save nprogress
npm i --save-dev @types/nprogress

# 项目内容数据说明
## 项目背景图
文件：
D:\Project\VueProject\NursingHomeManagementSystem\src\components\Layout\index.vue
25行，
图片内容：
src\assets\星空背景图.png
## 首页数据请求
数据内容均为json，请求方式以get
首页：
今日舒适度，舒适指数，最近一周警报次数
Data\homeAlarmComfortable.json
组件引用：
src\components\Home.vue
函数：
load_homeAlarmComfortable_Data()

首页：
room
Data\homeRoom.json
组件引用：
src\components\Home.vue
函数：
load_homeRoom_Data()