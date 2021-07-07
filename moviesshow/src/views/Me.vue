<!--  -->
<template>
  <div class="">
    <div class="block">
      <el-avatar :size="50" :src="circleUrl"></el-avatar>
      <span>尊敬的</span>
      <span class="user">{{user}}</span>
      <span>用户，下午好！</span>
    </div>
    <div class="option">
      <h2 v-for="(item,index) in guides" :key="index">{{guides[index]}} <hr> </h2>     
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      user:"God",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      // squareUrl:
      //   "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      // sizeList: ["large", "medium", "small"],
      guides:["观看历史","收藏与预约","下载","设置","帮助与反馈","关于我们"]
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
.block{
  text-align: left;
  background-color: rgba(49, 219, 224, 0.8);
  padding-top: 10px;
  padding-bottom: 10px;
}
.block span{
  margin-left: 15px;
  font-size: 20px;
}
.user{
  color: gold;
}
.option {
 padding-top: 50px;
}
.option h2{
 padding:0px  0px; 
}
</style>