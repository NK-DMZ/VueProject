<template>
  <div id="nav">
    <router-link to="/">主页</router-link> |
    <router-link to="/categorize">分类</router-link> |
    <router-link to="/message">消息</router-link> |
    <router-link to="/me">我的</router-link> 
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  font-size: 25px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
