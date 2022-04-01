<script setup lang="ts">
import ElementFromVue from './views/ElementFrom.vue';
import Composition from './views/Composition.vue';
import Setup from './views/Setup.vue';
import Axios from './views/Axios.vue';

</script>

<template>
  <h1>ElementFromVue</h1>
  <ElementFromVue></ElementFromVue>
  <h1>Composition</h1>
  <Composition />
  <h1>Setup</h1>
  <Setup />
  <h1>Axios</h1>
  <Axios />
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
