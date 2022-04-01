<template>
  <div id="time"></div>
</template>
<script lang='ts' setup>
import { onMounted, reactive, toRefs, } from 'vue';
import { ECharts, EChartsOption, init } from 'echarts';

const props = defineProps(
  {
    pastTemperature: {
      type: Array as any,
      default: () => {

      }
    },
    pastHumidity: {
      type: Array as any,
      default: () => {

      }
    },
    pastSmog: {
      type: Array as any,
      default: () => {

      }
    },
  }
)

function getHtml() {
  const timeCharts = document.getElementById('time') as HTMLElement;
  timeChartsObj = init(timeCharts,);
  timeChartsObj.setOption(timeChartsOption);
}

let timeChartsObj: ECharts

const timeChartsOption: EChartsOption = {
  color: ['red', 'yellow', 'green', 'cyan'],
  title: {
    text: 'Stacked Line'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['烟雾报警信息', '温度信息', '湿度信息'],
    textStyle: {
      color: "#ffffff",  //更改坐标轴文字颜色
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLabel: { color: 'rgb(255,250,250)' },
    data: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00','14:00',  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
  },
  yAxis: {
    type: 'value',
    axisLabel: { color: 'rgb(255,250,250)' },
  },
  series: [
    {
      name: '烟雾报警信息',
      type: 'line',
      stack: 'Total',
      smooth: true,
      data: props.pastSmog,
    },
    {
      name: '温度信息',
      type: 'line',
      stack: 'Total',
      data: props.pastTemperature
    },
    {
      name: '湿度信息',
      type: 'line',
      stack: 'Total',
      data: props.pastHumidity
    },

  ]
}

onMounted(() => {
  getHtml()
});

</script>

<style scoped>
#time {
  width: calc(80vh);
  height: calc(60vh);
  background-color: rgba(97, 96, 95, 0.4);
  margin: 0 auto;
  margin-top: calc(10vh);
  margin-left: calc(2vh);
}
</style>