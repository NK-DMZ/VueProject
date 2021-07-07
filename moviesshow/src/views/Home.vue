<template>
  <div class="home">
    <Homecontent></Homecontent>
    <!-- <img alt="Vue logo" src="../assets/logo.png">     -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Homecontent from './homecontent.vue'

export default {
  name: 'Home',
  components: {
    Homecontent
    // HelloWorld
  }
}
</script>
