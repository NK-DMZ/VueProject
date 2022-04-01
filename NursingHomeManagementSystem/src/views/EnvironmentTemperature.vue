<template>
  <div class="homecontent">
    <div class="left">
      <div id="environment"></div>
    </div>
  </div>
</template>
<script lang='ts' setup>
import { onMounted, reactive, toRefs, } from 'vue';
import { ECharts, EChartsOption, init } from 'echarts';
interface DataItem {
  name: string;
  value: [string, number];
}

function randomData(): DataItem {
  now = new Date(+ now + oneDay);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value)
    ]
  };
}

let data: DataItem[] = [];
let now = new Date();
// let oneDay = 24 * 3600 * 1000 ;
let oneDay = 24 * 3600 * 1000;
let value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
  data.push(randomData());
}

function getHtml() {
  const charComfortable = document.getElementById('environment') as HTMLElement;
  charComfortableObj = init(charComfortable,);
  charComfortableObj.setOption(ComfortableOption);
}

let charComfortableObj: ECharts
let timeChartsObj: ECharts

const datahome = reactive({
  comfortableOptionArr: [],
});

const ComfortableOption: EChartsOption = {
  title: {
    text: 'Dynamic Data & Time Axis'
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params: any) {
      params = params[0];
      var date = new Date(params.name);
      return (
        date.getDate() +
        '/' +
        (date.getMonth() + 1) +
        '/' +
        date.getFullYear() +
        ' : ' +
        params.value[1]
      );
    },
    axisPointer: {
      animation: false
    }
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: false
    }
  },
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      showSymbol: false,
      data: data
    }
  ]
}

function fresh() {
  charComfortableObj.setOption<echarts.EChartsOption>({
    series: [
      {
        data: datahome.comfortableOptionArr
      }
    ]
  });
}

setInterval(function () {
  for (var i = 0; i < 5; i++) {
    data.shift();
    data.push(randomData());
  }

  charComfortableObj.setOption<echarts.EChartsOption>({
    series: [
      {
        data: data
      }
    ]
  });
}, 1000);

onMounted(() => {
  getHtml()
});

// const { comfortableNum, roominfo, keyPerple, equipment, contact } = toRefs(datahome)

</script>
<style scoped>
#environment,#time {
  width: calc(70vh);
  height: calc(50vh);
}
</style>