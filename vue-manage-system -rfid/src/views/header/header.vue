<!--  -->
<template>
  <div class="">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="onRoutes"
      router
    >
      <el-menu-item index="individual">主页</el-menu-item>
      <el-menu-item index="staff">人事管理</el-menu-item>
      <el-menu-item index="portal">出货量数据</el-menu-item>
      <el-menu-item index="report">仓库库存</el-menu-item>
      <el-menu-item index="manage">巡航轨迹</el-menu-item>
      <!-- <el-menu-item index="visualization">可视化面板</el-menu-item> -->
      <el-menu-item index="permission">没有权限</el-menu-item>
      <el-menu-item index="404">资源未找到</el-menu-item>    
    </el-menu>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      items: [
        {
          icon: "el-icon-lx-home",
          index: "individual",
          title: "个人主页",
        },
        {
          icon: "el-icon-lx-home",
          index: "portal",
          title: "数据门户",
        },
        {
          icon: "el-icon-lx-cascades",
          index: "report",
          title: "报表门户",
        },
        {
          icon: "el-icon-lx-copy",
          index: "manage",
          title: "数据管理",
        },
        {
          icon: "el-icon-lx-copy",
          index: "visualization",
          title: "可视化面板",
        },
        {
          icon: "el-icon-lx-copy",
          index: "permission",
          title: "没有权限",
        },
        {
          icon: "el-icon-lx-copy",
          index: "404",
          title: "资源未找到",
        },
        // {
        //   icon: "el-icon-lx-warn",
        //   index: "7",
        //   title: "错误处理",
        //   subs: [
        //     {
        //       index: "permission",
        //       title: "权限测试",
        //     },
        //     {
        //       index: "404",
        //       title: "404页面",
        //     },
        //   ],
        // },
        // {
        //   icon: "el-icon-lx-calendar",
        //   index: "chemistry",
        //   title: "地球化学",
        //   subs: [
        //     {
        //       index: "degree",
        //       title: "大气降尘污染程度表",
        //     },
        //     {
        //       index: "sample",
        //       title: "生物采样表",
        //     },
        //   ],
        // },
      ],
    };
  },
  computed: {
    onRoutes() {
      //获取当前路由地址
      return this.$route.path.replace("/", "");
    },
  },
  watch: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style  scoped>
/* 
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col-6 {
  max-width: 20%;
  text-align: center;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  width: 150px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
} */
</style>