<template>
    <div>
        <!-- <el-table :data="state.tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>-->
        <p>{{ data.datatoday }}</p>
        <p>{{ data.dataLocal }}</p>
        <p>{{ data.temp }}</p>
        <p>{{ data.count }}</p>
    </div>
</template>

<script  lang="ts"  setup>
import { onMounted, reactive } from "vue"
import axios from "axios"

function loadData() {
    axios.get("http://poetry.apiopen.top/getTime").then((res) => {
        data.datatoday = res.data
    })
    axios.get("/Node/testdata.json").then((res) => {
        data.dataLocal = res.data.result[0].content
        // console.log(data.dataLocal);
    })
}
const data = reactive({
    datatoday: {},
    dataLocal: {},
    dataweather: {},
    temp: "临时变量",
    count: 0
});

onMounted(() => {
    loadData();
    data.count = data.count + 10;
});
</script>

<style>
</style>

