import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/Home.vue";
import Layout from "../components/Layout/index.vue";
import Alarms from "../components/Alarms.vue";
import Environment from "../components/Environment.vue";
import NotFound from "../views/NotFound.vue";
import UserList from "../views/UserList.vue";

const routes = [
    {
        path: "/",
        redirect: "/main",
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue")
    },
    {
        path: "/main",
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: "/home",
                name: "Home",
                component: Home,
            },
            {
                path: "/alarm",
                name: "Alarms",
                component: Alarms,
            },
            {
                path: "/environment",
                name: "Environment",
                component: Environment,
            },
        ]
    },
    // {
    //     path: "/home",
    //     name: "Home",
    //     component: Home,
    // },
    // {
    //     path: "/alarm",
    //     name: "Alarms",
    //     component: Alarms,
    // },
    // {
    //     path: "/environment",
    //     name: "Environment",
    //     component: Environment,
    // },
    {
        path: "/user",
        name: "用户管理",
        component: Layout,
        children: [
            {
                path: "/user",
                name: "UserList",
                component: UserList,
            },
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
]
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;