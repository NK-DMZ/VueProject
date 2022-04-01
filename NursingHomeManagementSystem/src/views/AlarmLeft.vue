<template>
    <div class="alarmLeft">
        <h1>请注意有人摔倒！</h1>
        <div class="alarm_LeftTop">
            <div class="normal">
                <div class="circle" style=" background-color: green;"></div>
                <div class="textTop">正常</div>
            </div>
            <div class="abnormal">
                <div class="circle" style=" background-color: red;"></div>
                <div class="textTop">异常</div>
            </div>
        </div>
        <div class="alarmLeftBottom">
            <div class="alarmRoom" v-for="item in alarmRoom" :key="item.id" :index="item.id">
                <div class="normal" v-if="item.state == 0">
                    <div class="circle" style=" background-color: green;"></div>
                </div>
                <div class="normal" v-if="item.state == 1">
                    <div class="circle" style=" background-color: red;"></div>
                </div>
                <div class="roomid">{{ item.id }}</div>
                <div class="peopleinfo">
                    <p>姓名：{{ item.name }}</p>
                    <p>年龄: {{ item.age }}</p>
                    <p>性别: {{ item.sex }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(
    {
        alarmRoom: {
            type: Object as any,
            default: () => {

            }
        },
    }
)
</script>

<style scoped>
.alarmLeft h1{
    color: red;
}
.alarmLeft {
    height: calc(80vh);
    overflow: hidden;
    background-color: rgba(255, 255, 255, 0.2);
}
.alarmLeftBottom {
    clear: both;
}
.alarmRoom {
    float: left;
    text-align: left;
    color: aliceblue;
    width: calc(16vh);
    padding-left: calc(1vh);
    padding-top: calc(1vh);
    background-color: rgba(255, 255, 255, 0.4);
    margin: calc(1vh);
}
.alarmRoom p {
    height: calc(1vh);
}
.circle {
    width: calc(1.5vh);
    height: calc(1.5vh);
    border-radius: 50%;
    margin-top: calc(1.8vh);
    background-color: antiquewhite;
}
.circle,
.text {
    float: left;
    color: aliceblue;
    margin-left: 5px;
    font-size: 2.2vh;
}
.roomid {
    float: left;
    color: aliceblue;
    margin-top: calc(1.5vh);
    margin-left: calc(2vh);
}
.peopleinfo {
    clear: both;
    color: aliceblue;
    text-align: left;
    padding-left: calc(1vh);
}
.textTop {
    color: aliceblue;
    float: left;
    margin-top: calc(1vh);
    margin-left: calc(2vh);
    margin-right: calc(3vh);
}
.alarm_LeftTop {
    margin: calc(1vh);
}
</style>