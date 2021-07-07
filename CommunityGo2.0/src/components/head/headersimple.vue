<!--  -->
<template>
  <div class="loginheader">
    <div class="logoimg">
      <img :src="logoimg" alt="" />
      <span>Community Go</span>
    </div>
    <div class="welcome">
      <span>欢迎来到Community Go，一起开启愉快的购物之旅吧！</span>
    </div>
  </div>
</template>

<script>
import logoimg from "../../assets/img/common/logo.png";
export default {
  components: {},
  data() {
    return {
      logoimg: logoimg,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.loginheader {
  background-color: blueviolet;
  width: 100%;
  height: 160px;
  text-align: center;
}
.logoimg img {
  height: 150px;
  width: 150px;
  display: block;
  float: left;
  margin-left: 30%;
  margin-right: -25%;
}
.logoimg span {
  display: block;
  font-size: 60px;
  padding-top: 40px;
}
.welcome {
  margin-left: 100px;
  font-size: 20px;
}
</style>