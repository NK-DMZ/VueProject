<!--  -->
<template>
  <div class="recommendgoods">
    <div class="recommendh">
      <h1>猜你喜欢</h1>
    </div>
    <ul>
      <!-- <p>{{result[0].title}}</p> -->
      <li v-for="(item, index) in result" v-bind:key="item.gid">
        <div class="recommendli">
          <div class="recommendp">
            <p>{{ result[index].title }}</p>
          </div>
          <img :src="result[index].image" alt="" />
          <p>{{result[index].price}}￥</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { requestrecommend } from "../../network/request";
export default {
  components: {},
  data() {
    return {
      result: [],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    requestrecommend({})
      .then((res) => {
        this.result = res.data;
        // console.log("res：");
        // console.log(res);
        // console.log(res.message[0].children[1].children[0]);
        // console.log("result:");
        // console.log(this.result);
      })
      .catch((err) => {
        alert(err);
      });
  },
  mounted() {},
};
</script>
<style >
.recommendgoods {
  clear: both;
  background-color: rgba(101, 223, 130, 0.5);
  height: 780px;
  padding-top: 1px;
  text-align: center;
}
.recommendh {
  margin-left: 80px;
}
.recommendli {
  margin-left: -5px;
  float: left;
  padding-left: 10px;
  padding-right: 10px;
}
.recommendp {
  height: 80px;
}
</style>