<template>
    <div class="menu">
        <div class="menuchild" v-for="item in menus" :key="item.id" :index="item.id">
            <router-link :to="item.route">{{ item.title }}</router-link>
        </div>
    </div>
    <router-view></router-view>
</template>

<script lang="ts" setup>
const menus: any = [
    {
        id: 1,
        title: "数据看板",
        route: "/home"
    },
    {
        id: 2,
        title: "摔倒警报",
        route: "/alarm"
    },
    {
        id: 3,
        title: "室内环境",
        route: "/environment"
    },
]
</script>

<style scoped>
.menu {
    display: flex;
    vertical-align: middle;
}
.menuchild {
    flex: 1;
    color: aliceblue;
    height: calc(5vh);
    padding-top: calc(2vh);
    background-repeat: no-repeat;
}
a {
    text-decoration: none;
    color: #fff;
}
.el-menu-item {
    flex: 1;
}
</style>
