<!-- 尾部部署 -->
<template>
  <div class="footersimple">
    <ul>
      <li>
        <div class="simpleli">
          <router-link to="/home" tag="span">首页</router-link>
        </div>
      </li>
      <li>
        <div class="simpleli">
          <router-link to="/join" tag="span">加入我们</router-link>
        </div>
      </li>
      <li>
        <div class="simpleli">
          <router-link to="/feedback" tag="span">反馈意见</router-link>
        </div>
      </li>
      <li
        v-for="(item, index) in messagearr"
        :key="index"
        v-show="index > 2 && index < messagearr.length"
      >
        <div class="simpleli">
          {{ messagearr[index] }}
        </div>
      </li>
    </ul>
    <p class="footerp">Copyright © 2021 by DMZ</p>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
      messagearr: [
        "首页",
        "加入我们",
        "反馈意见",
        "小程序",
        "APP下载",
        "广告服务",
        "api接入",
      ],
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
.footersimple {
  flex-grow: 1;
  padding-top: 0;
  background-color: chartreuse;
  width: 100%;
  height: 100%;
}
ul {
  margin: auto;
  width: 80%;
  height: 30px;
}
li {
  margin: 2%;
  float: left;
  width: 10%;
  list-style: none;
}
.footerp {
  clear: both;
  width: 300px;
  margin: auto;
}
</style>