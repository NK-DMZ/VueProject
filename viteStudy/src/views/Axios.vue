<template>
    <div>
        <el-table :data="state.tableData" stripe style="width: 100%">
            <el-table-column prop="date" label="Date" width="180" />
            <el-table-column prop="name" label="Name" width="180" />
            <el-table-column prop="address" label="Address" />
        </el-table>
    </div>
</template>

<script  lang="ts"  setup>
import { onMounted, reactive, toRefs } from "vue"
import axios from "axios"
function loadData(state: any) {
    axios.get("/products").then((res) => {
        state.tableData = res.data;
    })
}
const state = reactive({
    tableData: [],
});

onMounted(() => {
    loadData(state);
});
</script>

<style>
</style>

