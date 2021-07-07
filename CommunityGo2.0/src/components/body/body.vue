<!--  -->
<template>
  <div id="bodymain">
    <SearchBar></SearchBar>
    <swiper></swiper>
    <catalogue></catalogue>
    <seckill></seckill>
    <recommend></recommend>
  </div>
</template>

<script>
import Seckill from "./seckill.vue";
import catalogue from "./catalogue.vue";
import Swiper from './swiper.vue';
import SearchBar from './SearchBar';
import Recommend from './recommend.vue';

export default {
  components: {
    Seckill,
    catalogue,
    Swiper,
    SearchBar,
    Recommend,
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
<style >
#bodymain {
  width: 90%;
  margin: auto;
  /* clear: both; */
  background-color: azure;
  margin-top: 0px;
}
</style>
