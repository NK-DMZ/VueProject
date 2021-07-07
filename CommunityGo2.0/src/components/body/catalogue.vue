<!--  -->
<template>
  <div class="catalogue">
    <ul
      id="menu"
      v-for="(item, index) in datagoods.message.slice(0, 20)"
      v-bind:key="item.id"
      @click="changeisshow(index)"
      v-on:click="isshow(index)"
      :class="{ active: i == index }"
    >
      <li class="firstLevel">
        {{ item.cat_name }}
        <div class="seul">
          <ul v-show="actionNav == index">
            <li
              class="secondLevel"
              v-for="items in item.children.slice(0, 5)"
              v-bind:key="items.id"
            >
              {{ items.cat_name }}
              <ul class="thirdLevel">
                <li
                  v-for="(itemss, indexs) in items.children"
                  v-bind:key="indexs"
                  v-show="indexs < 12"
                >
                  <p>{{ itemss.cat_name }}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { requestcatalogue } from "../../network/request";
import datagoods from "../../assets/JavaScript/datagoods";

export default {
  components: {},
  data() {
    return {
      res: [],
      result: [],
      resulttest: {},
      datagoods: datagoods,
      actionNav: 0,
      i: 0,
    };
  },
  computed: {},
  watch: {},
  methods: {
    isshow(index) {
      this.isshowthat = true;
      console.log(this.isshowthat);
    },
    changeisshow(index) {
      this.actionNav = index;
      this.index = index;
      this.i = this.index;
    },
  },
  created() {
    requestcatalogue({})
      .then((res) => {
        this.res = res;
        this.result = res.message;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  mounted() {},
};
</script>
<style >
.catalogue {
  background-color: rgba(32, 192, 104, 0.4);
  position: relative;
  padding-top: 3px;
  padding-bottom: 3px;
  margin-bottom: 10px;
  margin-top: 10px;
}
.catap {
  color: rgb(153, 43, 76);
}
li {
  list-style: none;
}
.firstLevel {
  clear: both;
}
.secondLevel {
  float: left;
}
.secondLevel li {
  float: left;
}
.secondLevel li:hover {
  color: rgb(37, 27, 179);
}
.seul {
  height: 750px;
  /* width: 600px; */
  position: absolute;
  z-index: 999;
  left: 300px;
  top: 2px;
  background-color: rgba(22, 192, 6, 0.2);
  color: black;
}
.active {
  color: red;
}
</style>