<!--  -->
<template>
  <div class="staffmanage">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="新增员工" name="first">
          <Addstaff></Addstaff>
      </el-tab-pane>
      <el-tab-pane label="查看员工" name="second">
        <Examine></Examine>
      </el-tab-pane>
      <el-tab-pane label="删除员工" name="third">
        <Deletestaff></Deletestaff>
      </el-tab-pane>
      <el-tab-pane label="员工管理" name="fourth">员工管理</el-tab-pane>
      <el-tab-pane label="请假申请" name="five">
        <Holiday></Holiday>
      </el-tab-pane>
      <el-tab-pane label="辞职申请" name="six">辞职申请</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Addstaff from './addstaff.vue';
import Deletestaff from './deletestaff.vue';
import Examine from './examine.vue';
import Holiday from './holiday';
export default {
  components: {Addstaff, Deletestaff,Holiday, Examine},
  data() {
    return {
      activeName: "first",
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.staffmanage{
    font-size: 35px;
}
::v-deep .el-tabs__item{
    font-size: 30px;
}
</style>