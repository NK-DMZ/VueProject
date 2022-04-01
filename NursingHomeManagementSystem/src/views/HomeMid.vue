<template>
  <div class="homeMid">
    <div class="home_mid_top">
      <div class="home_mid_topleft">
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="home_mid_topright">
        <div class="normal">
          <div class="circle" style=" background-color: green;"></div>
          <div class="text">正常</div>
        </div>
        <div class="abnormal">
          <div class="circle" style=" background-color: red;"></div>
          <div class="text">异常</div>
        </div>
      </div>
    </div>
    <div class="home_mid_bottom">
      <div class="room" v-for="item in roominfo" :key="item.id" :index="item.id">
        <div class="normal" v-if="item.state == 0">
          <div class="circle" style=" background-color: green;"></div>
        </div>
        <div class="normal" v-if="item.state == 1">
          <div class="circle" style=" background-color: red;"></div>
        </div>
        <div class="roomid">{{item.id}}</div>
        <div class="peopleinfo">
          <p>姓名：{{item.name}}</p>
          <p>年龄: {{item.age}}</p>
          <p>性别: {{item.sex}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const props = defineProps(
    {
        roominfo: {
            type: Object as any,
            default:()=>{

            }
        },
    }
)
const value = ref('Option1')

const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style scoped>
.el-select,
.el-option {
  width: calc(15vh);
}

.home_mid_topleft {
  float: left;
}
.home_mid_topright {
  float: right;
}
.circle {
  width: calc(1.5vh);
  height: calc(1.5vh);
  border-radius: 50%;
  margin-top: calc(1.8vh);
  background-color: antiquewhite;
}
.text {
  margin-top: calc(1vh);
  margin-left: 5px;
  font-size: 2.2vh;
}
.circle,
.text {
  float: left;
}

.normal,
.abnormal {
  float: left;
  color: aliceblue;
  margin: 0 5px;
}
.home_mid_top {
  padding-bottom: calc(4vh);
}
.home_mid_bottom {
  clear: both;
}
.room {
  float: left;
  width: 22.5%;
  height: calc(15vh);
  margin-right: 10px;
  margin-top: 10px;
  background-color: rgba(62, 177, 223, 0.4);
}
.roomid {
  float: left;
  color: aliceblue;
  margin-top: calc(1.5vh);
}
.peopleinfo{
  clear: both;
  color: aliceblue;
  font-size: 10px;
  text-align: left;
  padding-left: calc(1vh);
  padding-top: calc(0.1vh);
}
.peopleinfo p{
  height: calc(1vh);
}
</style>>
