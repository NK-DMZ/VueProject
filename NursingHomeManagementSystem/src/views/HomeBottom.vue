<template>
    <div class="homeBottom">
        <el-divider content-position="center">重点人员关注</el-divider>
        <el-scrollbar>
            <div class="scrollbar-flex-content">
                <div class="scrollbar-demo-item" v-for="item in keyPerple" :key="item.id" :index="item.id">
                    <div class="kp_homeBottominfo">
                        <p>姓名：{{item.name}}</p>
                        <p>房号：{{item.id}}</p>
                    </div>
                </div>
            </div>
        </el-scrollbar>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps(
    {
        keyPerple: {
            type: Object as any,
            default:()=>{

            }
        },
    }
)

</script>

<style scoped>
.homeBottom {
    margin-top: calc(-4vh);
}
.scrollbar-flex-content {
    display: flex;
}
.scrollbar-demo-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    margin: 0 10px;
    text-align: center;
    border-radius: 5px;
    margin-top: calc(-1vh);
    background-color: rgba(62, 177, 223, 0.4);
    color: rgb(245, 241, 241);
}
.scrollbar-demo-item p{
    height: calc(1.2vh);
}
.kp_homeBottominfo{
    font-size: 10px;
    text-align: left;
}
</style>>
