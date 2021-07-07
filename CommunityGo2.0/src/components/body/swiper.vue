<!--  -->
<template>
  <div id="app">
    <div class="boxswiper">
      <!--<button @click="imgMove">点击</button>-->
      <div class="main clearfix" @mouseover="btnOpen" @mouseout="btnHide">
        <div class="minMain">
          <div class="item" v-for="(item, index) in list" :key="index">
            <img :src="item.imgUrl" />
          </div>
        </div>
        <div class="btnMain" v-show="btnShow">
          <div class="left" @click="leftClick">
            <img :src="arrowheadleft" />
          </div>
          <div class="right" @click="rightClick">
            <img :src="arrowheadright" />
          </div>
        </div>
        <div class="pressMain">
          <span
            v-for="(item, index) in pressList"
            :class="{ active: item.isShow }"
            v-bind:key="index"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 图片资源在组件中需要进行引入
import swiper1 from "../../assets/img/mainbody/swiper1.jpg";
import swiper2 from "../../assets/img/mainbody/swiper2.jpg";
import swiper3 from "../../assets/img/mainbody/swiper3.jpg";
import swiper4 from "../../assets/img/mainbody/swiper4.jpg";
import swiper5 from "../../assets/img/mainbody/swiper5.jpg";
import swiper6 from "../../assets/img/mainbody/swiper6.jpg";
import arrowheadleft from "../../assets/img/mainbody/left.png"
import arrowheadright from "../../assets/img/mainbody/right.png"

export default {
  components: {},
  data() {
    return {
      list: [
        {
          imgUrl: swiper1,
        },
        {
          imgUrl: swiper2,
        },
        {
          imgUrl: swiper3,
        },
        {
          imgUrl: swiper4,
        },
        {
          imgUrl: swiper5,
        },
        {
          imgUrl: swiper6,
        },
      ],
      pressList: [
        {
          name: "1",
          isShow: false,
        },
        {
          name: "2",
          isShow: false,
        },
        {
          name: "3",
          isShow: false,
        },
        {
          name: "4",
          isShow: false,
        },
        {
          name: "5",
          isShow: false,
        },
         {
          name: "6",
          isShow: false,
        },
      ],
      numList: ["p0", "p1", "p2", "p3", "p4", "p5"],
      imgIndex: 0,
      imgTimer: null,
      btnShow: false,
      arrowheadleft:arrowheadleft,
      arrowheadright:arrowheadright
    };
  },
  mounted: function () {
    var Item = document.getElementsByClassName("item");
    for (var i = 0; i < Item.length; i++) {
      Item[i].className = "item " + this.numList[i];
    }
    this.imgMove();
    this.pressList[0].isShow = true;
  },
  methods: {
    imgMove() {
      var Item = document.getElementsByClassName("item");
      this.imgTimer = setInterval(() => {
        this.numList.push(this.numList[0]);
        this.numList.shift();
        this.imgIndex++;
        for (var i = 0; i < Item.length; i++) {
          Item[i].className = "item " + this.numList[i];
        }
        for (var i in this.pressList) {
          this.pressList[i].isShow = false;
        }
        if (this.imgIndex > 5) {
          this.imgIndex = 0;
          this.pressList[this.imgIndex].isShow = true;
        } else {
          this.pressList[this.imgIndex].isShow = true;
        }
      }, 15000);
    },
    btnOpen() {
      this.btnShow = true;
      clearInterval(this.imgTimer);
    },
    btnHide() {
      this.btnShow = false;
      this.imgMove();
    },
    leftClick() {
      var Item = document.getElementsByClassName("item");
      this.numList.unshift(this.numList[5]);
      this.numList.pop();
      for (var i = 0; i < Item.length; i++) {
        Item[i].className = "item " + this.numList[i];
      }
      for (var i in this.pressList) {
        this.pressList[i].isShow = false;
      }
      this.imgIndex--;
      if (this.imgIndex < 0) {
        this.imgIndex = 5;
        this.pressList[this.imgIndex].isShow = true;
      } else {
        this.pressList[this.imgIndex].isShow = true;
      }
    },
    rightClick() {
      var Item = document.getElementsByClassName("item");
      this.numList.push(this.numList[0]);
      this.numList.shift();
      for (var i = 0; i < Item.length; i++) {
        Item[i].className = "item " + this.numList[i];
      }
      for (var i in this.pressList) {
        this.pressList[i].isShow = false;
      }
      this.imgIndex++;
      if (this.imgIndex > 5) {
        this.imgIndex = 0;
        this.pressList[this.imgIndex].isShow = true;
      } else {
        this.pressList[this.imgIndex].isShow = true;
      }
    },
  },
};
</script>
<style >
/* * {
    margin: 0px;
    padding: 0px;
}

body {
    background-color: #212121
} */
.app{
    clear: both;
}
.clearfix:after {
    content: " ";
    display: block;
    clear: both;
}

.boxswiper {
    position: relative;
    /* width: 800px; */
    width: 100%;
    height: 300px;
    margin: 25px auto;
}

.main {
    width: 800px;
    height: 300px;
    position: absolute;
    top: 0px;
    left: 50%;
    margin-left: -350px;
    overflow: hidden;
}

.item {
    list-style: none;
    width: 400px;
    height: 230px;
    position: absolute;
    left: 0px;
    top: 27px;
    transition: all 0.3s ease;
}

.p0 {
    transform: translate3d(-400px, 0, 0) scale(1);
    opacity: 0.1;
    z-index: 1;
}

.p1 {
    transform: translate3d(0px, 0, 0) scale(1);
    opacity: 0.8;
    z-index: 2;
}

.p2 {
    transform: translate3d(400px, 0, 0) scale(1);
    opacity: 0.8;
    z-index: 3;
}

.p3 {
    transform: translate3d(200px, 0, 0) scale(1.5);
    opacity: 1;
    z-index: 4;
}

.p4 {
    transform: translate3d(800px, 0, 0) scale(1);
    opacity: 0.1;
    z-index: 3;
}

.newItem {
    position: absolute;
    left: 0px;
    top: 0px;
}

.changeItem {
    position: absolute;
    left: 50%;
    top: 0px;
    margin-left: -202px;
    transform: scale(1.4);
}

.item img {
    width: 100%;
    height: 100%;
}

.btnMain {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
}

.left {
    position: absolute;
    left: 15px;
    top: 50%;
    margin-top: -15px;
    z-index: 10;
}

.right {
    position: absolute;
    right: 15px;
    top: 50%;
    margin-top: -15px;
    z-index: 10;
}

.left img,
.right img {
    width: 30px;
    height: 30px;
}

.pressMain {
    position: absolute;
    left: 50%;
    bottom: 10px;
    width: 134px;
    height: 24px;
    margin-left: -37px;
    z-index: 20;
}

.pressMain span {
    display: inline-block;
    margin: 2px 3px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    color: #fff;
    background-color: rgba(255, 255, 255, 0.53);
    text-align: center;
    line-height: 20px;
}

.pressMain .active {
    background: brown;
}
</style>