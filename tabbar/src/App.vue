<template>
  <div id="app">
    <router-view></router-view>
    <maintabbar></maintabbar>
  </div>
</template>

<script>
import maintabbar from './components/main.vue'
export default {
  name: "App",
  components: {
    maintabbar
  },
};
</script>

<style>
  @import url("./assets/css/base.css");
</style>