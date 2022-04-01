<template>
  <tabbar>
    <tabbaritem path="/home" activecolor="deeppink">
      <img slot="itemicon" src="~assets/img/tabbar/home.svg" alt="" />
      <img
        slot="itemiconactive"
        src="../assets/img/tabbar/home_active.svg"
        alt=""
      />
      <div slot="itemtext">首页</div>
    </tabbaritem>
    <tabbaritem path="/category" activecolor="deeppink">
      <img slot="itemicon" src="../assets/img/tabbar/category.svg" alt="" />
      <img
        slot="itemiconactive"
        src="../assets/img/tabbar/category_active.svg"
        alt=""
      />
      <div slot="itemtext">分类</div>
    </tabbaritem>
    <tabbaritem path="/cart" activecolor="deeppink">
      <img slot="itemicon" src="../assets/img/tabbar/shopcart.svg" alt="" />
      <img
        slot="itemiconactive"
        src="../assets/img/tabbar/shopcart_active.svg"
        alt=""
      />
      <div slot="itemtext">购物车</div>
    </tabbaritem>
    <tabbaritem path="/profile" activecolor="deeppink">
      <img slot="itemicon" src="../assets/img/tabbar/profile.svg" alt="" />
      <img
        slot="itemiconactive"
        src="../assets/img/tabbar/profile_active.svg"
        alt=""
      />
      <div slot="itemtext">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
import tabbar from '../components/tabbar/tabbar.vue';
import tabbaritem from '../components/tabbar/tabbaritem.vue'
export default {
    name:"maintabbar",
    components:{
        tabbar,
        tabbaritem,
    }
};
</script>

<style>
</style>