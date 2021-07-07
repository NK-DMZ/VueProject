<!-- 加入我们 -->
<template>
  <div class="join">
    <div class="joinhead">
      <img :src="logo" alt="" />
      <ul>
        <li v-for="(item, index) in joinwe" :key="index">
          {{ joinwe[index] }}
        </li>
      </ul>
    </div>
    <div class="staff">
      <div class="staffleft">
        <div class="staffchoice">
          <img :src="staffico1" alt="" />
          <h2>强大资源助你成长</h2>
          <p>
            目前公司共有168个岗位序列，全球超过3000个岗位，社区购在岗位体系上为员工设计职业发展通道，即管理、技术、业务及项目管理跑道。
          </p>
        </div>
        <div class="staffchoice">
          <img :src="staffico3" alt="" />
          <h2>想你所想之绿芒计划</h2>
          <p>
            绿芒计划是社区购未来领袖计划，是一个更宽广的平台，在这里有全球化的工作机会及视野，开拓创新的机会。
          </p>
        </div>
      </div>
      <div class="staffright">
        <h1>还在犹豫什么？</h1>
        <h1>
          <span
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
          >
          加入我们吧！
        </h1>
        <div class="staffchoice">
          <img :src="staffico2" alt="" />
          <h2>用爱铺满你的生活</h2>
          <p>
            员工及直系亲属（父母、配偶、子女）均可以免费享受公司提供的EAP服务，包括心理咨询、心理培训和团体心理辅导等。
          </p>
        </div>
      </div>
    </div>
    <div class="supplier">
      <div class="supplierchoice">
        <h1>供应商入驻</h1>
        <h3>SUPPLIER PRESENCE</h3>
        <div class="supplierdiv"></div>
        <p>
          欢迎入驻社区购平台<br />与优势供应链合作伙伴强强联手<br />打造百亿级社区团购商业平台
        </p>
      </div>
      <div class="supplierchoice">
        <h2>社区购供应商的入驻条件</h2>
        <h3>SUPPLIER PRESENCE</h3>
        <ul class="supplierchoiceul">
          <li>厂家、品牌，或者是一级经销商</li>
          <li>营业证照齐全，各项资质许可齐全</li>
          <li>保证提供的商品价格为同期最低</li>
        </ul>
      </div>
    </div>
    <div class="partner">
      <div class="partnerchoice1">
        <h2>强大资源助你成长</h2>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          相关报告显示，2018年中国生鲜市场交易总额为1.9万亿，而到2022年，
          生鲜市场交易规模预计可达5万亿，线上渗透率有望突破20%。中国市场
          生鲜消费需求正在经历爆发式增长，生鲜电商也被誉为中国电商的最后
          一片蓝海。市场广阔，前景可期，社区购合伙人期待你的加入！
        </p>
      </div>
      <div class="partnerchoice2">
        <div class="partnerdue"><h1>选择我们的理由</h1></div>
        <ul>
          <li>
            <div class="partnerchoiceli">
              <h3>投入小</h3>
              <p>
                无需投入大量资金，门店设备由公司提供，合伙人主要承担人力成本，管理成本。
              </p>
            </div>
          </li>
          <li>
            <div class="partnerchoiceli">
              <h3>风险低</h3>
              <p>
                公司有专业运营、售后团队支持辅导，供应链仓储物流到店
              </p>
            </div>
          </li>
          <li>
            <div class="partnerchoiceli">
              <h3>前景好</h3>
              <p>
                生鲜是老百姓刚需，市场需求旺。
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footersimple></Footersimple>
  </div>
</template>

<script>
import logo from "../../assets/img/common/logocrosswise.png";
import staffico1 from "../../assets/img/join/staffico1.png";
import staffico2 from "../../assets/img/join/staffico2.png";
import staffico3 from "../../assets/img/join/staffico3.png";
//以下均为背景图，在部分class中的 background-image进行引用
import staff from "../../assets/img/join/staff.png";
import supplier from "../../assets/img/join/supplier.jpg";
import partner from "../../assets/img/join/partner.jpg";

import Footersimple from "../footer/footersimple.vue";

export default {
  components: {
    Footersimple
  },
  data() {
    return {
      logo: logo,
      staffico1: staffico1,
      staffico2: staffico2,
      staffico3: staffico3,
      joinwe: ["招聘贤才", "供应商入驻", "合作伙伴招募"],
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    document.title = "加入我们";
  },
  mounted() {},
};
</script>
<style scoped>
/* scoped仅对当前页面生效 */
.join {
  padding: 0;
  margin: 0;
}

.joinhead {
  height: 50px;
  border-bottom: rgb(19, 143, 143) solid 2px;
}
.joinhead img {
  margin-left: 15%;
  width: 250px;
  height: 50px;
  float: left;
}
.joinhead li {
  list-style: none;
  font-size: 35px;
  font-family: cursive;
  color: rgb(64, 243, 94);
  float: left;
  margin: 0 50px;
}

.staff {
  background-image: url("../../assets/img/join/staff.png");
  width: 100%;
  height: 600px;
}
.staffleft,
.staffright {
  float: left;
}
.staffchoice {
  text-align: center;
  width: 300px;
  padding-top: 50px;
  padding-left: 50px;
}

.supplier {
  background-image: url("../../assets/img/join/supplier.jpg");
  width: 100%;
  height: 600px;
}
.supplierchoice {
  text-align: center;
  width: 300px;
  padding-top: 50px;
  padding-left: 70%;
}
.supplierdiv {
  width: 250px;
  height: 10px;
  margin-left: 30px;
  background-color: chartreuse;
}
.supplierchoiceul {
  text-align: left;
}

.partner {
  background-image: url("../../assets/img/join/partner.jpg");
  width: 100%;
  height: 600px;
}
.partnerchoice1,
.partnerchoice2 {
  text-align: center;
  padding-top: 50px;
  padding-left: 50px;
}
.partnerchoice1 {
  width: 350px;
}
.partnerchoice2 {
  margin-top: 100px;
}
.partnerchoice1 p {
  text-align: left;
}
.partnerchoice2 li {
  list-style: none;
}
.partnerchoiceli {
  float: left;
  width: 25%;
  margin: 0 50px;
}
.partnerdue {
  padding-top: 10px;
  margin-bottom: -30px;
}
</style>