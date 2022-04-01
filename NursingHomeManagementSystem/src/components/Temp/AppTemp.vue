<script setup lang="ts">
import Home from './views/Home.vue';
</script>

<template>
  <!-- <h1>Hello you like me talk!</h1> -->
  <Home/>
  <p>
    <router-link to="/">Go to Home</router-link> <br>
   <button> <router-link to="/alarm">Go to alarm</router-link> </button> <br>
    <router-link to="/environment">Go to environment</router-link>
    <router-link to="/404">Go to environment</router-link>
  </p>
  <router-view></router-view>
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