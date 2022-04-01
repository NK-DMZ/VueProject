<template>
  <div class="alarm">
    <div class="alarmLeft">
      <AlarmLeft  ref="children" :alarmRoom="alarmRoom"/>
    </div>
    <div class="alarmRight">
      <AlarmRight  ref="children" :alarmInfo="alarmInfo"/>
    </div>
  </div>
</template>

<script lang="ts"  setup>
import { onMounted, reactive, toRefs, } from 'vue';
import axios from "axios"
import AlarmLeft from '../views/AlarmLeft.vue';
import AlarmRight from '../views/AlarmRight.vue';
function load_alarmRoom_Data() {
  axios.get("/Data/alarmRoom.json").then((res) => {
    dataAlarm.alarmRoom = res.data.result.alarmRoom
  })
}
function load_alarmInfo_Data() {
  axios.get("/Data/alarmInfo.json").then((res) => {
    dataAlarm.alarmInfo = res.data.result
    console.log(dataAlarm.alarmInfo);
    
  })
}
const dataAlarm = reactive({
  alarmRoom: [],
  alarmInfo:{}
});
onMounted(() => {
  load_alarmRoom_Data()
  load_alarmInfo_Data()
});
const { alarmRoom,alarmInfo } = toRefs(dataAlarm)

</script>

<style>
.alarm{
  display: flex;
}
.alarmLeft {
  flex: 2;
}
.alarmRight {
  flex: 1;
}
</style>