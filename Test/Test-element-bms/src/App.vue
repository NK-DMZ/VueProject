<template>
  <div id="nav">
    <!-- <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <hr>
    <el-button type="danger"></el-button> -->
    <Home></Home>
  </div>
  <router-view/>
</template>

<script>
import Home from './components/home/home';
export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
@import"./assets/css/base.css";
</style>
