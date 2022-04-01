<!--  -->
<template>
  <div class="home_all">
    <div class="f1">
      <div class="DataSet">
        <Card></Card>
      </div>
      <div class="Department">
        <Department></Department>
      </div>
    </div>
    <div class="f2"><Dynamic></Dynamic></div>
    <div class="f3">这是讯息</div>
  </div>
</template>

<script>
import Card from './card.vue';
import Department from "./Department.vue";
import Dynamic from "./Dynamic";
export default {
  name: "individual",
  components: {
    Dynamic,
    Department,
    Card,
  },
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
.home_all {
  display: flex;
  background-color: white;
}
.f1,
.f2,
.f3 {
  flex: 1;
  height: 800px;
}
.f1 {
  border: 1px solid black;
}
.f3 {
  background-color: rgb(210, 238, 209);
}
.DataSet {
  width: 100%;
  height: 300px;
  background-color: rgb(175, 243, 148);
}
</style>