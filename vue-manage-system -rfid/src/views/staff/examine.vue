<template>
  <el-row :gutter="20">
    <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="18"
      ><div class="grid-content bg-purple">
        <el-table
          :data="tableData"
          style="width: 1250px"
          class="deletestafftable"
        >
          <el-table-column
            prop="id"
            label="工号"
            width="150px"
          ></el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="150px"
          ></el-table-column>
          <el-table-column
            prop="department"
            label="部门"
            width="150px"
          ></el-table-column>
          <el-table-column
            prop="date"
            label="入职时间"
            width="150px"
          ></el-table-column>
          <el-table-column
            prop="time"
            label="工龄"
            width="150px"
          ></el-table-column>
          <el-table-column
            prop="salary"
            label="月工资"
            width="150px"
          ></el-table-column>
        </el-table></div
    ></el-col>
    <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "2105001",
          name: "马云",
          department: "管理",
          date: "2016-05-03",
          time: "3y 9m 16d",
          salary: 35000,
        },
        {
          id: "2105002",
          name: "马化腾",
          department: "管理",
          date: "2016-05-03",
          time: "8y 6m 6d",
          salary: 35000,
        },
        {
          id: "2105003",
          name: "雷军",
          department: "技术",
          date: "2016-05-03",
          time: "6y 6m 16d",
          salary: 35000,
        },
        {
          id: "2105004",
          name: "王小虎",
          department: "销售",
          date: "2016-05-03",
          time: "1y 6m 25d",
          salary: 5000,
        },
        {
          id: "2105005",
          name: "张先新",
          department: "销售",
          date: "2017-05-03",
          time: "3y 6m 16d",
          salary: 12000,
        },
      ],
    };
  },
};
</script>

<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
