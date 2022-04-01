<!--  -->
<template>
  <div class="">
    <div class="deletestaffhead">
      <span class="delstaffspan">需要删除的员工姓名</span>
      <el-input
        placeholder="查找员工"
        prefix-icon="el-icon-search"
        v-model="input2"
        class="delstaffinput"
      >
      </el-input>
      <el-button type="success" round @click="find">查找员工</el-button>
      <el-button type="danger" round @click="open">确认删除</el-button>
    </div>
    <el-row :gutter="20">
      <el-col :span="5"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="14">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
          class="deletestafftable"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
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
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
        <el-table
          :data="tableData"
          style="width: 1250px"
          class="deletestafftable"
        >
        </el-table>
      </el-col>
      <el-col :span="3"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      input2: "",
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
      multipleSelection: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    open() {
      this.$confirm("删除后无法恢复！请谨慎操作！", "确认信息", {
        distinguishCancelAndClose: true,
        confirmButtonText: "确认删除",
        cancelButtonText: "放弃删除",
      })
        .then(() => {
          this.$message({
            type: "info",
            message: "删除成功！",
          });
        })
        .catch((action) => {
          this.$message({
            type: "info",
            message: action === "cancel" ? "放弃删除" : "取消操作",
          });
        });
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
  },
  created() {},
  mounted() {},
};
</script>
<style scoped>
.delstaffinput {
  width: 240px;
  margin-right: 50px;
}
.delstaffspan {
  margin-left: 450px;
  font-size: 30px;
  margin-right: 45px;
}
.deletestafftable {
  margin-top: 50px;
}
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
.deletestafftable {
  margin-top: 50px;
}
</style>