<template>
  <div class="environment">
    <EnvironmentDate
      class="environmentLeft"
      ref="children"
      :pastTemperature="pastTemperature"
      :pastHumidity="pastHumidity"
      :pastSmog="pastSmog"
      v-if="pastTemperature.length !== 0"
    />
    <div class="environmentRight">
      <div class="environmentCard">
        <el-card shadow="hover">
          <p>当前温度：{{ currentTemperature }}</p>
          <p>当前湿度：{{ currentHumidity }}</p>
          <p>当前天气：{{ currentWeather }}</p>
        </el-card>
      </div>
      <div id="sensor" class="sensor"></div>
    </div>
  </div>
</template>

<script lang="ts"  setup>
import { ECharts, EChartsOption, init } from 'echarts';
import { onMounted, reactive, toRefs } from 'vue';
import axios from "axios"
import EnvironmentDate from '../views/EnvironmentDate.vue';
const dataEnvironment = reactive({
  currentTemperature: -100,
  currentHumidity: -100,
  currentWeather: "",
  pastTemperature: [],
  pastHumidity: [],
  pastSmog: [],
  sensorStatus: []
});

function load_environment_Data() {
  axios.get("/Data/environment.json").then((res) => {
    dataEnvironment.currentTemperature = res.data.result.currentTemperature
    dataEnvironment.currentHumidity = res.data.result.currentHumidity
    dataEnvironment.currentWeather = res.data.result.currentWeather
    dataEnvironment.pastTemperature = res.data.result.pastTemperature
    dataEnvironment.pastHumidity = res.data.result.pastHumidity
    dataEnvironment.pastSmog = res.data.result.pastSmog
    dataEnvironment.sensorStatus = res.data.result.sensorStatus
    console.log(dataEnvironment);
    fresh()
  })
}
let sensorObj: ECharts
function getHtml() {
  const sensorchart = document.getElementById('sensor') as HTMLElement;
  sensorObj = init(sensorchart,);
  sensorObj.setOption(equipmentoption);
}
const equipmentoption: EChartsOption = {
  title: {
    text: '设备运行状况',
    left: 'left',
    textStyle: {
      color: '#ffffff'
    },
  },
  color: ['green', 'red', 'yellow'],
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '1%',
    left: 'right',
    orient: 'vertical',
    textStyle: {
      color: '#ffffff'
    },
  },
  series: [
    {
      name: 'Equipment Condition(设备运行状况)',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '15',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: dataEnvironment.sensorStatus[0], name: '正常' },
        { value: dataEnvironment.sensorStatus[1], name: '异常' },
        { value: dataEnvironment.sensorStatus[2], name: '警报' },
      ]
    }]
};
function fresh() {
  sensorObj.setOption<echarts.EChartsOption>({
    series: [
      {
        data: [
          { value: dataEnvironment.sensorStatus[0], name: '正常' },
          { value: dataEnvironment.sensorStatus[1], name: '异常' },
          { value: dataEnvironment.sensorStatus[2], name: '警报' },
        ]
      }
    ]
  });
}
onMounted(() => {
  load_environment_Data()
  getHtml()
});
const { currentTemperature, pastTemperature, pastHumidity, pastSmog,currentHumidity,currentWeather } = toRefs(dataEnvironment)

</script>

<style>
.environment {
  display: flex;
}
.environmentLeft {
  flex: 3;
  margin-top: calc(10vh);
}
.environmentRight {
  flex: 1;
}
#sensor {
  width: calc(50vh);
  height: calc(50vh);
}
.environmentCard {
  width: 80%;
  margin: 0 auto;
  margin-bottom: calc(10vh);
}
</style>