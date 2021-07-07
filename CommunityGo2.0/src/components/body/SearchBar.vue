<!-- 搜素框 -->
<template>
  <div class="search">
    <div>
      <input
        class="searchinput"
        type="text"
        v-model="searchvalue"
        size="70"
        placeholder="请输入您所想查找的商品"
      />
      <div class="searchicon">
        <button @click="del"><img :src="searchdelimg" alt="" /></button>
        <button @click="changevalue"><img :src="searchimg" alt="" /></button>        
      </div>
    </div>
  </div>
</template>

<script>
import searchimg from "../../assets/img/mainbody/search.svg";
import searchdelimg from "../../assets/img/mainbody/searchdel.svg";
export default {
  components: {},
  data() {
    return {
      searchimg: searchimg,
      searchdelimg: searchdelimg,
      searchvalue: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    del(){
      return this.searchvalue=" "
    },
    changevalue(){
       console.log(this.searchvalue)
    }
  },
  created() {},
  mounted() {},
};
</script>
<style >
.searchinput {
  height: 25px;
}
.search img {
  width: 20px;
  height: 20px;
}
/* 去除按钮默认样式 */
.search button {
  border: 0px;
  background-color: transparent;
  /* 按钮的点击后出现不出现边框 */
  outline: none;
}
.search button:hover {
  border: springgreen solid 1px;
}
.searchicon {
  float: right;
  margin-top: 2px;
  margin-right: 23%;
}
</style>

$children进行父访子

$refs进行父访子
$refs的使用： $refs和ref指令通常是一起使用的。 首先，我们通过ref给某一个子组件绑定一个特定的ID。其次，通过this.$refs.ID就可以访问到该组件了。

$parent子访问父
如果我们想在子组件中直接访问父组件，可以通过$parent 
注意事项：
尽管在Vue开发中，我们允许通过$parent来访问父组件，但是在真实开发中尽量不要这样做。 子组件应该尽量避免直接访问父组件的数据，
因为这样耦合度太高了。 如果我们将子组件放在另外一个组件之内，很可能该父组件没有对应的属性，往往会引起问题。 
另外，更不好做的是通过$parent直接修改父组件的状态，那么父组件中的状态将变得飘忽不定，很不利于我的调试和维护。