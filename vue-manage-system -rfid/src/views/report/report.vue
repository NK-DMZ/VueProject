<!--  -->
<template>
  <div class="">
    <div class="hhead"><h1>库存报表</h1></div>
    <div class="schart-box">
      <div class="content-title">饼状图</div>
      <schart class="schart" canvasId="pie" :options="options3"></schart>
    </div>
    <div class="schart-box">
      <div class="content-title">环形图</div>
      <schart class="schart" canvasId="ring" :options="options4"></schart>
    </div>
  </div>
</template>

<script>
import Schart from "vue-schart";
export default {
  name: "basecharts",
  components: {
    Schart,
  },
  data() {
    return {
      options3: {
        type: "pie",
        title: {
          text: "服装品类库存量饼状图",
        },
        legend: {
          position: "left",
        },
        bgColor: "#fbfbfb",
        labels: ["T恤", "牛仔裤", "连衣裙", "毛衣", "七分裤", "短裙", "羽绒服"],
        datasets: [
          {
            data: [334, 278, 190, 235, 260, 200, 141],
          },
        ],
      },
      options4: {
        type: "ring",
        title: {
          text: "库存占比环形图",
        },
        showValue: false,
        legend: {
          position: "bottom",
          bottom: 40,
        },
        bgColor: "#fbfbfb",
        labels: ["家电", "百货", "食品"],
        datasets: [
          {
            data: [500, 500, 500],
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