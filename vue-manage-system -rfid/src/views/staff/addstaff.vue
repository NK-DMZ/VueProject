<!--  -->
<template>
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="员工名称">
      <el-input v-model="form.name" class="inputstyle"></el-input>
    </el-form-item>
    <el-form-item label="工号">
      <el-input v-model="form.id" class="inputstyle"></el-input>
    </el-form-item>
    <el-form-item label="联系方式">
      <el-input v-model="form.tel" class="inputstyle"></el-input>
    </el-form-item>
    <el-form-item label="工作区域">
      <el-select v-model="form.region" placeholder="请选择工作区域">
        <el-option label="A区" value="shanghai"></el-option>
        <el-option label="G区" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="入职时间">
      <el-col :span="11">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="form.date1"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
    </el-form-item>
    <!-- <el-form-item label="即时入职">
      <el-switch v-model="form.delivery"></el-switch>
    </el-form-item> -->
    <el-form-item label="员工工种">
      <el-radio-group v-model="form.resource">
        <el-radio label="销售"></el-radio>
        <el-radio label="运维"></el-radio>
        <el-radio label="开发"></el-radio>
        <el-radio label="美工"></el-radio>
      </el-radio-group>
    </el-form-item>
    <!-- <el-form-item label="入职渠道">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="内部推荐" name="type"></el-checkbox>
        <el-checkbox label="网站招聘" name="type"></el-checkbox>
        <el-checkbox label="校园招聘" name="type"></el-checkbox>
        <el-checkbox label="人才推荐" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>     -->
    <el-form-item label="备注">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>

<style scoped>
.inputstyle{
    width: 200px;
}
::v-deep .el-button+.el-button {
    margin-left: 10px;
    width: 100px;
}
</style>