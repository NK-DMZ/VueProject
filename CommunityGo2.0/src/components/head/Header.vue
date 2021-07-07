<template>
  <div class="box">
    <div id="head">
      <ul class="headulleft">
        <li
          v-on:mousemove="changeClass1($event)"
          @mouseout="changeClass2($event)"
        >
          {{ welcomego }}
        </li>
        <li>
          <ul class="headlogin">
            <li
              id="login1"
              v-on:mousemove="changeClass1($event)"
              @mousemove="isshowchange1($event)"
              @mouseout="changeClass2($event)"
              v-on:mouseout="isshowchange2($event)"
            >
              <router-link to="/login" tag="span">请登录</router-link>
              <img v-if="isshow1" src="../../assets/img/head/user.svg" alt="" />
              <img v-else src="../../assets/img/head/useractive.svg" alt="" />
            </li>
            <span class="headspan">|</span>
            <li
              id="login2"
              v-on:mousemove="changeClass1($event)"
              @mousemove="isshowchange3($event)"
              @mouseout="changeClass2($event)"
              v-on:mouseout="isshowchange4($event)"
            >
            <!-- 被注释的代码可以新建页面 -->
            <!-- <router-link target="_blank" :to="{path:'/register',query:{id:'1'}}">免费注册</router-link> -->
              <router-link to="/register" tag="span">免费注册</router-link>
              <img
                v-if="isshow2"
                src="../../assets/img/head/register.svg"
                alt=""
              />
              <img
                v-else
                src="../../assets/img/head/registeractive.svg"
                alt=""
              />
            </li>
          </ul>
        </li>
      </ul>
      <ul class="headulright">
        <li
          v-on:mousemove="changeClass1($event)"
          @mouseout="changeClass2($event)"
        >
          <router-link to="/home" tag="span">首页</router-link>
        </li>
        <li
          v-on:mousemove="changeClass1($event)"
          @mouseout="changeClass2($event)"
        >
          <router-link to="/join" tag="span">加入我们</router-link>
        </li>
        <li
          v-on:mousemove="changeClass1($event)"
          @mouseout="changeClass2($event)"
        >
          <router-link to="/feedback" tag="span">反馈意见</router-link>
        </li>
        <li
          v-on:mousemove="changeClass1($event)"
          @mouseout="changeClass2($event)"
        >
          购物车
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  computed: {
    activestyle() {
      return this.isactive ? { color: this.activecolor } : {};
    },
  },
  data() {
    return {
      welcomego: "嗨！欢迎来到CommunityGo",
      num1: 0,
      isshow1: true,
      isshow2: true,
    };
  },
  methods: {
    changeClass1(event) {
      var el = event.currentTarget;
      el.style.color = "chartreuse";
    },
    isshowchange1() {
      if (window.getComputedStyle(login1).color == "rgb(127, 255, 0)")
        this.isshow1 = false;
      // console.log(window.getComputedStyle(login1).color);
    },
    isshowchange3() {
      if (window.getComputedStyle(login2).color == "rgb(127, 255, 0)")
        this.isshow2 = false;
    },

    changeClass2(event) {
      //   this.current = index;
      //获取点击对象
      var el = event.currentTarget;
      el.style.color = "";
    },
    isshowchange2(event) {
      this.isshow1 = !this.isshow1;
    },
    isshowchange4(event) {
      this.isshow2 = !this.isshow2;
    },
  },
};
</script>

<style scoped>
/* @import url("./assets/css/base.css"); */
.box {
  height: 40px;
  background-color: #f2f2f2;
  margin-bottom: 0px;
}

.headulleft {
  /* display: flex; */
  width: 35%;
  float: left;
}
.headulright {
  width: 40%;
  float: right;
}

.headulleft li {
  /* flex: 1; */
  width: 50%;
}

.headulright li {
  width: 20%;
}

.headulright li,
.headulleft li {
  margin-top: -5px;
  text-align: center;
  list-style: none;
  float: left;
}

.headlogin li {
  padding: 2px;
  float: left;
  width: 45%;
}
.headspan {
  display: block;
  float: left;
  width: 3px;
  padding-left: -20px;
  padding-right: 0%;
}

.headulleft li img {
  width: 20px;
  height: 20px;
}
</style>
