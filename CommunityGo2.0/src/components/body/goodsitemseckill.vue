<!-- 详细商品信息 -->
<template>
  <div class="goodsitemseckill">
    <div class="seemli">
      <p>{{ goodsitem.items[0].title }}</p>
      <img :src="goodsitem.items[0].image" alt="" />
      <p><span class="itemspan">限时惊爆价！</span> {{goodsitem.items[0].price}}元</p>
    </div>
    <div class="seemli">
      <p>{{ goodsitem.items[1].title }}</p>
      <img :src="goodsitem.items[1].image" alt="" />
       <p><span class="itemspan">限时惊爆价！</span> {{goodsitem.items[1].price}}元</p>
    </div>

    <!-- 循环展示 -->
    <!-- <ul>
          <li v-for="(item,index) in goodsitem.items" v-bind:key="item.gid">
              <p>{{goodsitem.items[index].title}}</p>
              <img :src="goodsitem.items[index].image" alt="">
          </li>
      </ul> -->
  </div>
</template>

<script>
export default {
  name: "goodsitem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
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
<style >
.goodsitemseckill {
  flex: 1;
}
.seemli {
  float: left;
  padding-left: 13px;
  padding-right: 14px;
}
p {
  width: 200px;
}
img {
  width: 200px;
  height: 200px;
}
.itemspan{
    font-size: 20px;
    color: red;
}
</style>