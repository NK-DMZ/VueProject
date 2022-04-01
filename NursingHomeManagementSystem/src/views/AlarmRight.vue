<template>
    <div class="alarmRight">
        <div class="alarmRightTop">
            <el-card shadow="hover">
                <p>当前警报数{{ alarmInfo.alarmNum }}</p>
            </el-card>
        </div>
        <div class="alarmRightBottom">
            <h1>历史警报信息</h1>
            <el-scrollbar height="400px">
                <el-timeline>
                    <el-timeline-item
                        center
                        :timestamp="item.time"
                        placement="top"
                        v-for="item in alarmInfo.alarmInfo"
                        :key="item.time"
                    >
                        <p>{{ item.information }}</p>
                    </el-timeline-item>
                </el-timeline>
            </el-scrollbar>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(
    {
        alarmInfo: {
            type: Object as any,
            default: () => {

            }
        },
    }
)
</script>

<style scoped>
.el-card {
    margin-top: calc(2vh);
    height: calc(10vh);
}
.alarmRightTop {
    width: 50%;
    margin: 0 auto;
    margin-bottom: calc(2vh);
}
.alarmRightTop p {
    margin-top: calc(0.5vh);
}
.alarmRightBottom {
    clear: both;
}
.alarmRightBottom{
    color: rgb(235, 139, 50);
}
.alarmRightBottom p {
    color: aliceblue;
}
.scrollbar-demo-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    margin: 10px;
    text-align: center;
    border-radius: 4px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
}
</style>