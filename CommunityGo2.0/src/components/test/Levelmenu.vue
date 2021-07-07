<!--  -->
<template>
  <div class="">
    <h1>插入成功</h1>
    <!-- <ul v-for="(item, index) in datagoods.message" v-bind:key="item.id">
      <template v-for="items in item.children">
        <template v-for="(itemss, indexs) in items.children">
          <li>{{ itemss.cat_name }}</li>
        </template>
      </template>
    </ul> -->
    <h1>三级菜单</h1>
    <ul v-for="item in datagoods.message" v-bind:key="item.id">
        <li>
            <p>{{ item.cat_name }}</p>
            <ul >
                <li v-for="items in item.children"  v-bind:key="items.id">
                    <p>{{ items.cat_name }}</p>
                    <ul>
                        <li  v-for="itemss in items.children" v-bind:key="itemss.id">
                             <p>{{ itemss.cat_name }}</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
  </div>
</template>

<script>
import datagoods from "../../assets/JavaScript/datagoods";
export default {
  components: {},
  data() {
    return {
      datagoods: datagoods,
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style>
</style>