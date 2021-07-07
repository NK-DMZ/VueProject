<template>
  <div id="app">
    <index></index>
    <!-- <router-view /> -->
  </div>
</template>

<script>
import Index from "./components/index.vue";
export default {
  name: "App",
  components: {
    Index,
  },
};
</script>

<style>
/* @import url("./assets/css/base.css"); */
#app {
  margin: 0;
  padding: 0;
}

body {
  padding: 0;
  margin: 0;
}
</style>
