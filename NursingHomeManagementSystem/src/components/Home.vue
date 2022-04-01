<template>
  <div class="homecontent">
    <div class="left">
      <div class="lefttop">
        <el-card shadow="hover">今日舒适度：{{ comfortableNum }}</el-card>
      </div>
      <div id="comfortable" class="dataleft"></div>
      <div id="alarm" class="dataleft"></div>
    </div>
    <div class="mid">
      <HomeMid ref="children" :roominfo="roominfo" />
    </div>
    <div class="right" >
      <HomeRight  ref="children" :equipment="equipment" :contact="contact" v-if="equipment.length!==0" />
    </div>
  </div>
  <div class="homebottom">
    <HomeBottom ref="children" :keyPerple="keyPerple" />
  </div>
</template>
<script lang='ts' setup>
import { onMounted, reactive, toRefs, } from 'vue';
import { ECharts, EChartsOption, init } from 'echarts';
import axios from "axios"
import HomeMid from '../views/HomeMid.vue';
import HomeRight from '../views/HomeRight.vue';
import HomeBottom from '../views/HomeBottom.vue';

function load_homeAlarmComfortable_Data() {
  axios.get("/Data/homeAlarmComfortable.json").then((res) => {
    datahome.comfortableNum = res.data.result.comfortableNum
    datahome.comfortableOptionArr = res.data.result.comfortableOptionArr
    datahome.alarmOptionArr = res.data.result.alarmOptionArr
    fresh()
  })
}
function load_homeRoom_Data() {
  axios.get("/Data/homeRoom.json").then((res) => {
    datahome.roominfo = res.data.result.room
  })
}
function load_keyPeople_Data() {
  axios.get("/Data/homeKeyPeople.json").then((res) => {
    datahome.keyPerple = res.data.result.keyPeople
  })
}
function load_homeEquipment_Data() {
  axios.get("/Data/homeEquipment.json").then((res) => {
    datahome.equipment = res.data.result.equipment
  })
}

function load_homeContact_Data() {
  axios.get("/Data/homeContact.json").then((res) => {
    datahome.contact = res.data.result.contact
    console.log(datahome.contact);
    
  })
}

function getHtml() {
  const charComfortable = document.getElementById('comfortable') as HTMLElement;
  charComfortableObj = init(charComfortable,);
  charComfortableObj.setOption(ComfortableOption);

  const charAlarm = document.getElementById('alarm') as HTMLElement;
  charAlarmObj = init(charAlarm);
  charAlarmObj.setOption(AlarmOption);
}

let charComfortableObj: ECharts
let charAlarmObj: ECharts

const datahome = reactive({
  comfortableNum: 0,
  comfortableOptionArr: [],
  alarmOptionArr: [],
  roominfo: [],
  keyPerple: [],
  equipment: [],
  contact:[]
});

const ComfortableOption: EChartsOption = {
  title: {
    text: '最近一周舒适度指数',
    textStyle: {
      color: '#3A7BD5',
      fontSize: 30
    },
    left: 'center'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: datahome.comfortableOptionArr,
      type: 'line',
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
    }
  ]
};
const AlarmOption: EChartsOption = {
  title: {
    text: '最近一周报警次数',
    textStyle: {
      color: '#6172D5',
      fontSize: 30
    },
    left: 'center'
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: datahome.alarmOptionArr,
      type: 'line',
      symbol: 'triangle',
      symbolSize: 10,
      itemStyle: {
        borderWidth: 3,
        borderColor: '#EE6666',
        color: 'yellow'
      }
    }
  ]
};

function fresh() {
  charAlarmObj.setOption<echarts.EChartsOption>({
    series: [
      {
        data: datahome.alarmOptionArr
      }
    ]
  });
  charComfortableObj.setOption<echarts.EChartsOption>({
    series: [
      {
        data: datahome.comfortableOptionArr
      }
    ]
  });
}

onMounted(() => {
  load_homeAlarmComfortable_Data()
  load_homeRoom_Data()
  load_keyPeople_Data()
  load_homeEquipment_Data()
  load_homeContact_Data()
  getHtml()
});

const { comfortableNum, roominfo, keyPerple, equipment, contact } = toRefs(datahome)

</script>
<style scoped>
.homecontent {
  display: flex;
}
.left,
.mid,
.right {
  flex: 1;
}
.el-card {
  width: 40%;
  margin: 0 auto;
  height: calc(8vh);
}
.lefttop {
  text-align: center;
  width: 100%;
  height: calc(10vh);
  padding-top: calc(2vh);
  /* background-color: antiquewhite; */
}
.dataleft {
  width: 100%;
  height: calc(30vh);
  /* background-color: aqua; */
  margin-top: calc(0.5vh);
}
.homebottom {
  color: aliceblue;
}
</style>