<!-- 商品组件 -->
<template>
  <div class="goods">
      <Goodsitemseckill
      v-for="item in goods"
      :goodsitem="item"
      v-bind:key="item.id"
      class="goodslistseckill"
    ></Goodsitemseckill>
  </div>
</template>

<script>
import Goodsitemseckill from "./goodsitemseckill.vue";

export default {
  name: "goodslist",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    Goodsitemseckill,
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
.goods{
    text-align: center;
    width: 100%;
    display: flex;
}
.goodslistseckill{
    padding: 0;
    margin: 0;
}
</style>