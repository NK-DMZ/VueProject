<!-- 登录头部 -->
<template>
  <div class="login">
    <!-- <div class="loginheader">
      <div class="logoimg">
        <img :src="logoimg" alt="" />
        <span>Community Go</span>
      </div>
      <div class="welcome">
        <span>欢迎登录Community Go，一起开启愉快的购物之旅吧！</span>
      </div>
    </div> -->
    <Headersimple></Headersimple>
    <div class="loginbody">
      <div class="logindiv">
        <div class="logintitle"><p>账户登录</p></div>
        <div class="user">
          <div class="loginbodyimg">
            <img :src="user" alt="" />
          </div>
          <div class="logininput">
            <input
              type="text"
              placeholder="请输入账号"
              @click-right-icon="$toast('用户名必须是手机号')"
              v-model="userdata"
              size="30"
            />
          </div>
          <div class="loginbnt">
            <button @click="del"><img :src="searchdelimg" alt="" /></button>
          </div>
        </div>
        <div class="code">
          <div class="loginbodyimg">
            <img :src="code" alt="" />
          </div>
          <div class="logininput">
            <input
              :type="usertype"
              placeholder="请输入密码"
              @click-right-icon="$toast('密码必须是数字、字母、下划线')"
              v-model="codedata"
              size="30"
            />
          </div>
          <div class="loginbnt">
            <button @click="hideclick"><img :src="hide" alt="" /></button>
          </div>
        </div>
        <div class="loginsubmit">
          <button type="submit" @click="submit">登录</button>
        </div>
        <div class="skip">
          <router-link to="/home" tag="span">忘记密码</router-link>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <router-link to="/register" tag="span">注册</router-link>
        </div>
      </div>
    </div>
    <Footersimple></Footersimple>
  </div>
</template>

<script>
import logoimg from "../../assets/img/common/logo.png";
import backgroundimg from "../../assets/img/common/backgroundimg.jpg";
import user from "../../assets/img/common/user.svg";
import code from "../../assets/img/common/code.svg";
import searchdelimg from "../../assets/img/mainbody/searchdel.svg";
import hide from "../../assets/img/common/hide.svg";

import Footersimple from "../footer/footersimple.vue";
import Headersimple from '../head/headersimple.vue';

export default {
  components: {
    Footersimple,
    Headersimple,
  },
  data() {
    return {
      logoimg: logoimg,
      backgroundimg: backgroundimg,
      user: user,
      code: code,
      searchdelimg: searchdelimg,
      hide: hide,
      ishide: false,
      usertype: "password",
      userdata: "",
      codedata: "",
      verify: true,
    };
  },
  computed: {},
  watch: {},
  methods: {
    del() {
      return (this.userdata = " ");
    },
    hideclick() {
      if (this.ishide) {
        this.usertype = "password";
        this.ishide = false;
      } else {
        this.usertype = "text";
        this.ishide = true;
      }
    },
    submit() {
      if (
        this.userdata == null ||
        this.userdata == "" ||
        this.codedata == null ||
        this.codedata == ""
      ) {
        alert("不能账号或密码为空");
      } else {
        console.log(this.userdata);
        console.log(this.codedata);
      }
    },
  },
  created() {
    document.title = "登录";
  },
  mounted() {},
};
</script>

<style  scoped>
.login {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* .loginheader {
  background-color: blueviolet;
  width: 100%;
  height: 160px;
  text-align: center;
}
.logoimg img {
  height: 150px;
  width: 150px;
  display: block;
  float: left;
  margin-left: 30%;
  margin-right: -25%;
}
.logoimg span {
  display: block;
  font-size: 60px;
  padding-top: 40px;
}
.welcome {
  margin-left: 100px;
  font-size: 20px;
} */

.loginbody {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 9999px;
  background: url("../../assets/img/common/backgroundimg.jpg");
  background-repeat: no-repeat;
  /* 背景图片未铺满页面，用size属性控制铺满 */
  background-size: 100%;
}
.logindiv {
  background-color: rgb(255, 255, 255);
  width: 23%;
  height: 300px;
  margin-left: 65%;
  margin-top: 7%;
  text-align: center;
}
.logintitle {
  margin: auto;
  width: 200px;
  height: 30px;
  padding-top: 20px;
  padding-bottom: 10px;
  font-size: 20px;
}
.logindiv img {
  margin-top: 10%;
  width: 25px;
  height: 25px;
}
.logindiv input {
  height: 30px;
}
.loginbodyimg,
.logininput,
.loginbnt {
  float: left;
}
.loginbodyimg {
  padding-top: 3px;
  padding-right: 5px;
}
.user,
.code {
  padding-top: 20px;
  padding-bottom: 20px;
  clear: both;
  margin-left: 10%;
}
/* 去除按钮默认样式 */
.loginbnt button {
  border: 0px;
  background-color: transparent;
  /* 按钮的点击后出现不出现边框 */
  outline: none;
}
.loginsubmit {
  padding-top: 20px;
  clear: both;
}
.loginsubmit button {
  background-color: #ff0036;
  color: aliceblue;
  width: 50%;
}
.skip {
  padding-top: 20px;
}
</style>