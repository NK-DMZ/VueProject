<!--  -->
<template>
  <div class="block">
    <div class="home_dynamic_title">动态</div>
    <hr />
    <el-timeline>
      <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="Defaultcolor"
        :size="activity.size"
        :timestamp="activity.timestamp"
      >
        {{ activity.content }}
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      Defaultcolor: "#909399",
      activities: [
        {
          content: "时间轴事件开始啦",
          timestamp: "2018-04-12 20:46",
          // size: 'large',
          // type: 'primary',
          // icon: 'el-icon-more'
        },
        {
          content: "操作事件1",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "操作事件2",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "操作事件3",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "操作事件4",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "操作事件5",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "操作事件6",
          timestamp: "2018-04-03 20:46",
        },
        {
          content: "操作事件7",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
.block {
  text-align: center;
}
.home_dynamic_title {
  text-align: center;
  margin-top: 20px;
  height: 40px;
  font-size: 30px;
}

[data-v-cf990eee] .el-timeline {
  padding-left: 10px;
}
.home_dynamic_title[data-v-cf990eee] {
  text-align: center;
  height: 60px;
  font-size: 30px;
}

::v-deep .el-timeline-item__timestamp.is-bottom {
  position: relative;
  margin-top: -20px;
  margin-left: -255px;
}
::v-deep .el-timeline-item {
  position: relative;
  padding-top: 25px;
  padding-bottom: 20px;
}
::v-deep el-timeline-item__content {
  color: #303133;
  padding-left: 100px;
}
::v-deep .el-timeline-item__content {
  color: #303133;
  padding-left: 200px;
}
::v-deep [data-v-cf990eee] .el-timeline-item__content {
  padding-left: 200px;
  background-color: rgba(242, 242, 242, 1);
  height: 30px;
  margin-right: 50px;
  display: flex;
  align-items: center;
}
</style>