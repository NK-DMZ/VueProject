<!-- 注册页面 -->
<template>
  <div class="register">
    <Headersimple></Headersimple>
    <div class="registerbody">
      <form id="f1" action="/home" method="post">
        <table align="center" cellspacing="0" class="table">
          <tr class="thead">
            <td align="center">用户注册</td>
          </tr>
          <tr>
            <td>
              <table
                id="registertable"
                border="0px"
                align="center"
                cellspacing="0"
                cellpadding="5px"
              >
                <tr></tr>
                <tr>
                  <td align="right">用户名：</td>
                  <td align="left">
                    <input
                      type="text"
                      name="username"
                      placeholder="用户名"
                      v-model="user.username"
                      required
                    />
                  </td>
                </tr>
                <tr>
                  <td align="right">密 码：</td>
                  <td align="left">
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="密码"
                      required
                      onkeyup="passwd()"
                      v-model="user.password"
                    />
                    <meter
                      min="1"
                      max="10"
                      low="5"
                      high="8"
                      value="0"
                      id="meter"
                    ></meter>
                    <span id="tip"></span>
                  </td>
                </tr>
                <tr>
                  <td align="right">密码确认：</td>
                  <td align="left">
                    <input
                      type="password"
                      name="password2"
                      placeholder="确认密码"
                      required
                      v-model="user.passwordagain"
                    />
                  </td>
                </tr>
                <tr>
                  <td align="right">生 日：</td>
                  <td align="left">
                    <input type="date" name="borthday" v-model="user.borthday" />
                  </td>
                </tr>
                <tr>
                  <td align="right">性 别：</td>
                  <td align="left">
                    <input type="radio" name="gender" value="男" checked v-model="user.sex" />男
                    <input type="radio" name="gender" value="女" v-model="user.sex" />女
                  </td>
                </tr>
                <tr>
                  <td align="right">邮 箱：</td>
                  <td align="left">
                    <input
                      type="email"
                      name="email"
                      placeholder="邮箱"
                      id="email"
                      required
                      v-model="user.email"
                    />
                  </td>
                </tr>
                <tr>
                  <td align="right">手 机：</td>
                  <td align="left">
                    <input
                      type="tel"
                      pattern="[0-9]{11}"
                      id="p"
                      name="phone"
                      placeholder="请输入11位数字"
                      v-model="user.phone"
                    />
                  </td>
                </tr>
                <tr>
                  <td align="right">验证码：</td>
                  <td valign="middle" class="judge">
                    <input
                      type="text"
                      name="captcha"
                      size="11"
                      maxlength="4"
                      title="输入右边的验证码"
                    />
                    <span id="span" ref="span">{{ spandata }}</span>
                  </td>
                </tr>
                <tr height="60px">
                  <td align="center" colspan="2">
                    <input
                      type="button"
                      value="转到登录"
                      onclick="window.location.replace('login.html')"
                      id="btn1"
                      class="submit"
                    />
                    <input
                      type="submit"
                      accesskey="enter"
                      value="注册"
                      id="btn"
                      class="submit"
                      formmethod="post"
                      @click="inspect"
                    />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </form>
    </div>
    <Footersimple></Footersimple>
  </div>
</template>

<script>
import Footersimple from "../footer/footersimple.vue";
import Headersimple from "../head/headersimple.vue";

export default {
  components: {
    Headersimple,
    Footersimple,
  },
  data() {
    return {
      spandata: 0,
      spandatatest: 0,
      user:{
        username:'',
        password:'',
        passwordagain:'',
        borthday:'',
        sex:'',
        email:'',
        phone:''
      },
      checkdata:[
            {
                inspect: "", // 待检测的字段
                msg: '用户名', // 空值返回的提示
            },
            {
                inspect: "",
                msg: '密码'
            },
            {
                inspect: "",
                msg: '再次输入密码'
            },
            {
                inspect: "",
                msg: '性别'
            },
            {
                inspect: "",
                msg: '生日'
            }, 
            {
                inspect: "",
                msg: '手机号',
                reg: '^[1][3,4,5,7,8][0-9]{9}$'
            },             
            {
                inspect: "",
                msg: '邮箱',
                reg: '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'
            }, 
                    
        ]
    };
  },
  computed: {},
  watch: {},
  methods: {
    play() {
      document.getElementById("menu_item").style.display = "";
    },
    noplay() {
      document.getElementById("menu_item").style.display = "none";
    },
    passwd() {
      var pass = document.getElementById("password").value;
      var tip = document.getElementById("tip");
      if (pass.length < 4) {
        document.getElementById("meter").value = pass.length;
        tip.innerHTML = "差";
      } else if (pass.length <= 8) {
        document.getElementById("meter").value = pass.length;
        tip.innerHTML = "中";
      } else {
        document.getElementById("meter").value = pass.length;
        tip.innerHTML = "高";
      }
    },
     // 判定是否合规
    have_empty(arr) {
        for (let key in arr) {
          if(arr[key].inspect && arr[key].reg){ // 有值并且有规则执行验证
            let reg = new RegExp(arr[key].reg)
            var red_end = reg.test(arr[key].inspect)
            if( !red_end ){
                console.log('请输入正确的' + arr[key].msg)
                return false
            }
          }else if(!arr[key].inspect){
                console.log('请输入' + arr[key].msg)
                return false
          }
        }
        return true
    },
     // 判定规则前传入参数
    inspect() {
        // this.assignData();
        var end = this.have_empty(this.checkdata);
        if (!end) return // 判定验证结果
        console.log('执行提交的ajax函数')
 
    },
    assignData() {//赋值
      var arrForm = [];
      for(let key in this.formMess){
        arrForm.push(key);
      }
      for(let i = 0;i<this.checkdata.length;i++){
        var key = arrForm[i];
        this.checkdata[i].inspect = this.formMess[arrForm[i]];
      }
    }
  },
  created() {
    document.title = "注册";
    this.spandatatest = Math.floor(Math.random() * 10000);
    if (this.spandatatest < 1000) {
      this.spandata = this.spandatatest + 1000;
    } else {
      this.spandata = this.spandatatest;
    }
  },
  mounted() {},
};
</script>
<style>
.register {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.registerbody {
  width: 100%;
  height: 9999px;
}

body {
  text-align: center;
  background-repeat: repeat-x;
  background-position: 0px 0px;
}

.table {
  width: 100%;
}

tr {
  font-family: 微软雅黑;
  font-weight: 800;
  color: #448ef3;
}

input {
  border: 1px solid #448ef3;
  color: #448ef3;
  font-weight: bold;
  font-family: "微软雅黑";
  height: 35px;
  line-height: 30px;
  border-radius: 5px;
}

.submit {
  width: 150px;
  height: 40px;
  cursor: hand;
  font-size: 20px;
  color: #ffffff;
  background-color: #448ef3;
  border: 0px;
}

.thead {
  height: 40px;
  background: #90bfff;
  font-family: "微软雅黑";
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
  background: #90bfff;
}

#3 {
  margin-bottom: 100px;
}
.judge input {
  margin-left: -111px;
}
</style>