<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-main>
          <Menu />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style scoped>

.el-container {
  height: calc(97.8vh);
}
.el-container::-webkit-scrollbar {
    display: none;
}
.common-layout{
  /* opacity: 0.9; */
  background-image: url(../../assets/星空背景图.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.el-header {
  color: rgb(252, 245, 245);
}
.el-aside {
  background: #3a4a63;
  color: aliceblue;
}
.el-main {
  --el-main-padding: 0px;
  overflow: hidden;
}
</style>

<script lang = "ts" setup>
import Header from "../Header.vue";
import Menu from "../Menu.vue";

</script>