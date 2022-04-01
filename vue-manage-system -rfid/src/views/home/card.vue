<!--  -->
<template>
  <div class="card">
    <el-card shadow="hover" style="height: 300px">
      <template #header>
        <div class="clearfix">
          <span>开发语言详情</span>
        </div>
      </template>
      Vue<el-progress :percentage="36.7" color="#42b983"></el-progress>
      JavaScript<el-progress :percentage="3.1" color="#f1e05a"></el-progress>
      CSS<el-progress :percentage="9.7"></el-progress>
      HTML<el-progress :percentage="3.7" color="#f56c6c"></el-progress>
      Flutter<el-progress :percentage="35.9" color="#c5fc6c"></el-progress>
      Go<el-progress :percentage="10.9" color="#c87ee7"></el-progress>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>

</style>