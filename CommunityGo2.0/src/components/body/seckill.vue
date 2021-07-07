<!--  -->
<template>
  <div id="seckillall">
    <!-- 限时秒杀头部开始 -->
    <div class="seckill">
      <div class="secksell">
        <div class="seckillleft">
          <div class="seckill-icon">
            <img src="../../assets/img/mainbody/clock.png" alt="" />
          </div>
          <div class="seckilltext">
            <span class="seckspantextlimit">限时秒杀</span>
            <span>总有你想不到的低价</span>
          </div>
        </div>
        <div class="count-down">
          <span class="count-down-text">当前场次----{{ timeactive }}</span>
          <span class="count-down-num count-down-hour">{{ seckillhour }}</span>
          <span class="count-down-point">:</span>
          <span class="count-down-num count-down-minute">{{
            seckillminute
          }}</span>
          <span class="count-down-point">:</span>
          <span class="count-down-num count-down-seconds">{{
            seckillsecond
          }}</span>
          <span class="count-down-text">{{ overstar }}</span>
        </div>
      </div>
    </div>
    <!-- 限时秒杀头部结束 -->

    <!-- 限时秒杀商品内容开始 -->
    <Goodslistseckill :goods="result"></Goodslistseckill>
  </div>
</template>

<script>
// 在vue中，有两套定时器，一套是浏览器API，
// window对象上的；另一套就是vue/nodejs封装的，需要引入
import { setInterval, clearInterval } from "timers";

import { request } from "../../network/request";
import Goodslistseckill from "./goodslistseckill";

export default {
  components: {
    Goodslistseckill,
  },
  data() {
    return {
      timer: 0,
      timeactive: "00:00场",
      //   timeactive: ["00:00场", "10:00场", "14:00场", "20:00场", "22:00场"],
      overstar: "后结束抢购",
      judgetimesends: 0,
      seckillsecond: 0,
      seckillminute: 0,
      seckillhour: 0,

      result: [],
      seckillresult: [],
      messagegoods: {},
    };
  },
  computed: {},

  methods: {
    gets() {
      window.nowtime = new Date();
      var yy = nowtime.getFullYear();
      var mm = nowtime.getMonth();
      var dd = nowtime.getDate();
      window.hour = nowtime.getHours();
      var minute = nowtime.getMinutes();
      var second = nowtime.getSeconds();
      window.thetime1 = new Date(yy, mm, dd, 0, 0);
      window.thetime2 = new Date(yy, mm, dd, 2, 0);
      window.thetime3 = new Date(yy, mm, dd, 10, 0);
      window.thetime4 = new Date(yy, mm, dd, 12, 0);
      window.thetime5 = new Date(yy, mm, dd, 14, 0);
      window.thetime6 = new Date(yy, mm, dd, 16, 0);
      window.thetime7 = new Date(yy, mm, dd, 18, 0);
      window.thetime8 = new Date(yy, mm, dd, 20, 0);
      window.thetime9 = new Date(yy, mm, dd, 22, 0);
      window.thetime10 = new Date(yy, mm, dd, 24, 0);
    },
    // 0-2  10-12  14-16  18-20  22-24
    judgetime() {
      let sends = 0;
      if (hour < 2) {
        sends = thetime2 - nowtime;
        this.timeactive = "00:00场";
        this.overstar = "后结束抢购";
      } else if (hour < 10) {
        sends = thetime3 - nowtime;
        this.timeactive = "10:00场";
        this.overstar = "后开始抢购";
      } else if (hour < 12) {
        sends = thetime4 - nowtime;
        this.timeactive = "10:00场";
        this.overstar = "后结束抢购";
      } else if (hour < 14) {
        sends = thetime5 - nowtime;
        this.timeactive = "14:00场";
        this.overstar = "后开始抢购";
      } else if (hour < 16) {
        sends = thetime6 - nowtime; //5-14
        this.timeactive = "14:00场";
        this.overstar = "后结束抢购";
      } else if (hour < 18) {
        sends = thetime7 - nowtime;
        this.timeactive = "18:00场";
        this.overstar = "后开始抢购";
      } else if (hour < 20) {
        sends = thetime8 - nowtime; //8-20
        this.timeactive = "18:00场";
        this.overstar = "后结束抢购";
      } else if (hour < 22) {
        sends = thetime9 - nowtime;
        // this.timeactive = this.timeactive[4];
        this.timeactive = "22:00场";
        this.overstar = "后开始抢购";
      } else if (hour < 24) {
        sends = thetime10 - nowtime;
        // this.timeactive = this.timeactive[4];
        this.timeactive = "22:00场";
        this.overstar = "后结束抢购";
      }
      window.timesend = sends;
      this.judgetimesends = window.timesend;
    },
    counter() {
      let sends = this.judgetimesends;
      this.seckillsecond = parseInt((sends / 1000) % 60);
      this.seckillminute = parseInt((sends / 1000 / 60) % 60);
      this.seckillhour = parseInt((sends / 1000 / 60 / 60) % 60);
    },
    showtime() {
      this.seckillhour = "0" + this.seckillhour;
      if (this.seckillminute < 10) {
        this.seckillminute = "0" + this.seckillminute;
      } else {
        this.seckillminute = this.seckillminute;
      }
      if (this.seckillsecond < 10) {
        this.seckillsecond = "0" + this.seckillsecond;
      } else {
        this.seckillsecond = this.seckillsecond;
      }
    },
    run() {
      this.gets();
      this.judgetime();
      this.counter();
      this.showtime();
    },
  },
  watch: {},
  created() {
    this.timer = setInterval(() => {
      this.run();
      //do something
      //定时器的回调函数中需要注意 this 指向
    }, 1000);

    request({})
      .then((res) => {
        this.result = res.data;
        // console.log("res：");
        // console.log(res);
        // console.log(res.message[0].children[1].children[0]);
        // console.log("result:");
        // console.log(this.result);
      })
      .catch((err) => {
        alert(err);
        // console.log(err);
      });
  },

  //销毁前清除定时器
  beforeDestroy() {
    clearInterval(this.timer);
  },
  mounted() {},
};
</script>
<style >

/* 限时秒杀---------------------------开始 */

/* 限时秒杀头部-------------------------- */
.seckill {
  height: 65px;
  padding: 0px;
  margin: 0px;
  background-color: red;
}
.secksell {
  padding-top: 10px;
}
.seckillleft {
  clear: both;
  float: left;
  width: 40%;
  height: 50px;
}

/* 闹钟--------------------开始 */
.seckill-icon {
  width: 68px;
  height: 100%;
  float: left;
}
.seckill-icon img {
  width: 35px;
  height: 35px;
  margin-top: 6px;
  margin-left: 15px;
  animation-name: shake-clock;
  animation-duration: 0.3s;
  animation-iteration-count: infinite; /*设置无线循环*/
}
/*定义闹钟震动动画关键帧*/
@keyframes shake-clock {
  0% {
    transform: rotate(-8deg);
  }
  50% {
    transform: rotate(8deg);
  }
  100% {
    transform: rotate(-8deg);
  }
}
/* 闹钟-------------------结束 */
/* 文字-------------------开始 */
.seckilltext {
  padding-top: 10px;
  float: left;
}
.seckspantextlimit {
  font-size: 25px;
}
/* 文字-------------------结束 */
/*倒计时------------------开始*/
.count-down {
  height: 100%;
  margin-right: 30px;
  line-height: 50px;
  float: right;
}
.count-down-text {
  color: #fff;
}
.count-down-num {
  padding: 3px;
  border-radius: 5px;
  background-color: #440106;
  font-size: 26px;
  font-weight: bold;
  color: #f90013;
}
.count-down-point {
  font-size: 26px;
  font-weight: bold;
  color: #440106;
}
/*倒计时------------------结束*/
/* 限时秒杀头部结束------------------------ */

/* 限时秒杀---------------------------结束 */
</style>