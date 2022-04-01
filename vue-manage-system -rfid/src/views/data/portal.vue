<!--  -->
<template>
  <div class="">
    <div class="hhead"><h1>出货量数据展示</h1></div>
    <div class="schart-box">
      <div class="content-title">柱状图</div>
      <schart class="schart" canvasId="bar" :options="options1"></schart>
    </div>
    <div class="schart-box">
      <div class="content-title">折线图</div>
      <schart class="schart" canvasId="line" :options="options2"></schart>
    </div>
    <!-- <Base-charts></Base-charts> -->
  </div>
</template>

<script>
import Schart from "vue-schart";
export default {
  components: { Schart },
  data() {
    return {
      options1: {
        type: "bar",
        title: {
          text: "最近一周各品类出货量图",
        },
        bgColor: "#fbfbfb",
        labels: ["周一", "周二", "周三", "周四", "周五"],
        datasets: [
          {
            label: "家电",
            fillColor: "rgba(241, 49, 74, 0.5)",
            data: [234, 278, 270, 190, 230],
          },
          {
            label: "百货",
            data: [164, 178, 190, 135, 160],
          },
          {
            label: "食品",
            data: [144, 198, 150, 235, 120],
          },
        ],
      },
      options2: {
        type: "line",
        title: {
          text: "最近几个月各品类出货量趋势图",
        },
        bgColor: "#fbfbfb",
        labels: ["6月", "7月", "8月", "9月", "10月"],
        datasets: [
          {
            label: "家电",
            data: [234, 278, 270, 190, 230],
          },
          {
            label: "百货",
            data: [164, 178, 150, 135, 160],
          },
          {
            label: "食品",
            data: [114, 138, 200, 235, 190],
          },
        ],
      },
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
.schart-box {
  display: inline-block;
  margin: 20px;
}
.schart {
  width: 600px;
  height: 400px;
}
.content-title {
  clear: both;
  font-weight: 400;
  line-height: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}
.hhead{
  text-align: center;
}
</style>