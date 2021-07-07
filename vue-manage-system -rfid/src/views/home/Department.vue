<!--  -->
<template>
  <div class="">
    <div class="home_department_title">部门</div>
    <el-divider></el-divider>
    <el-collapse v-model="activeNames" @change="handleChange" class="home_department_content">
      <el-collapse-item title="管理者" name="1">               
       <li v-for="manageadministratorsitem in manageadministrators" :key="manageadministratorsitem">{{manageadministratorsitem}}</li>
      </el-collapse-item>
      <el-collapse-item title=" 员工" name="2">
        <li v-for="staffsitem in staffs" :key="staffsitem">{{staffsitem}}</li>
      </el-collapse-item>     
    </el-collapse>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      activeNames: ["1"],
      manageadministrators: ["戴明珠", "王晨宇", "李佩伦", "夏睿", "程浩"],
      staffs: ["员工1", "员工2", "员工3", "员工4", "员工5", "员工6", "员工7"],
    };
  },
  computed: {},
  watch: {},
  methods: {
    handleChange(val) {
      console.log(val);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.home_department_title {
  padding-top: 15px;
  font-size: 25px;
}
::v-deep .home_department_content {
  text-align: center;
}
.el-divider--horizontal {
  display: block;
  height: 1px;
  width: 100%;
  margin: 0;
}
::v-deep .el-collapse-item__header {
  background-color: #453f3f1c;
  width: 150px;
  margin-left: 35%;
  font-size: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
}
li{
  list-style: none;
  float: left;
  margin: 0 25px;
  font-size: 25px;
}
</style>