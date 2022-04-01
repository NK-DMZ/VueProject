<template>
    <div class="header">
        <!-- 左边用户登录信息 -->
        <!-- <el-col :span="12" class="headerStyle">
            <div class="header_user">
                <div class="header_user_img">
                    <el-avatar :size="30" :src="circleUrl" />
                </div>
                <div class="header_user_text">{{ userText }}</div>
            </div>
        </el-col> -->
        <!-- 项目名称 -->
        <div class="headerStyle">
            <h1>{{ projectName }}</h1>
            
        </div>
        <div class="headerStyle">
            <h1>{{ projectNum }}</h1>
        </div>
        <div class="headerStyle">
            <h1>{{ nowTime }}</h1>
        </div>
    </div>
</template>

<style scoped>
.header {
    display: flex;
}
.headerStyle {
    flex: 1;
}
.header_user {
    margin: calc(1.5vh);
}
.header_user_text {
    padding-top: 5px;
}
.header_user_text,
.header_user_img {
    float: left;
    margin: 5px;
}
.header_user_img img {
    width: 40px;
    height: 40px;
}
</style>

<script  lang="ts"  setup>
import { onMounted, reactive,  toRefs } from 'vue'
const state = reactive({
    // circleUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
    // userText: "管理员",
    projectName: "养老院管理系统",
    projectNum: 66,
    nowTime: new Date().toLocaleString(),
})

function getnowTime(): any {
    console.log(projectNum);
    console.log(nowTime.value);
    
    setInterval(() => {
        // let date = new Date();
        // nowTime.value = date.toLocaleString();
        // console.log(nowTime);
        projectNum.value ++
        // console.log(projectNum);
        
    }, 1000)
}
onMounted(() => {
    getnowTime()
    // console.log(nowTime);
});
// const { circleUrl, userText, projectName, projectNum, nowTime } = toRefs(state)
const { projectName, projectNum,nowTime } = toRefs(state)
</script>