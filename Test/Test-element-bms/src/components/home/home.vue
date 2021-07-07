<template>
  <div>
      <el-container class="container">
          <el-header class="header">
              <Headdemo></Headdemo>
          </el-header>
          <el-main>
              main
          </el-main>
          <el-footer>footer</el-footer>
      </el-container>      
  </div>
</template>

<script>
import Headdemo from '../header/header.vue'
export default {
  components: { Headdemo },

}
</script>

<style>
.container{
    /* border: 1px blue solid; */
}
.el-header{
    padding: 0;
}
</style>