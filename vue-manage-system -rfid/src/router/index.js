import {
    createRouter,
    createWebHistory
} from "vue-router";
import Base from "../views/Base.vue";

const routes = [{
        path: '/',
        redirect: '/individual'
    },
    {
        path: "/",
        name: "Base",
        component: Base,
        children: [{
            path: "/individual",
            name: "individual",
            meta: {
                title: '个人主页'
            },
            component: () => import(
                "../views/home/individual.vue")
        }, 
        {
            path: "/staff",
            name: "staff",
            meta: {
                title: '员工管理'
            },
            component: () => import(
                "../views/staff/staff.vue")
        }, 
        {
            path: "/portal",
            name: "portal",
            meta: {
                title: '数据门户'
            },
            component: () => import(
                "../views/data/portal.vue")
        }, 
        {
            path: "/report",
            name: "report",
            meta: {
                title: '报表门户'
            },
            component: () => import(
                "../views/report/report.vue")
        }, 
        {
            path: "/manage",
            name: "manage",
            meta: {
                title: '数据管理'
            },
            component: () => import(
                "../views/manage/manage.vue")
        }, 
        {
            path: "/visualization",
            name: "visualization",
            meta: {
                title: '可视化面板'
            },
            component: () => import(
                "../views/visualization/visualization.vue")
        }, 
        {
            path: "/403",
            name: "403",
            meta: {
                title: '没有权限'
            },
            component: () => import(
                "../views/error/403.vue")
        }, 
        {
            path: "/404",
            name: "404",
            meta: {
                title: '资源未找到'
            },
            component: () => import(
                "../views/error/404.vue")
        }, 
        {
            path: "/permission",
            name: "permission",
            meta: {
                title: '权限管理',
                permission: true
            },
            component: () => import (
            /* webpackChunkName: "permission" */
            "../views/error/Permission.vue")
        }, 

    ]
    }, 
    {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import(
            /* webpackChunkName: "login" */
            "../views/Login.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = localStorage.getItem('ms_username');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ?
            next() :
            next('/403');
    } else {
        next();
    }
});

export default router;