<!--  -->
<template>
  <div class="">
    <el-input
      placeholder="请输入电影名进行搜索"
      prefix-icon="el-icon-search"
      v-model="input2"
    >
    </el-input>
    <h1>猜你喜欢</h1>
    <ul>
      <li v-for="(item,index) in movies" :key="index">       
        <img :src="movies[index].img" alt=""><br>
         {{movies[index].value}}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import img1 from '../assets/信条.jpg'
import img2 from '../assets/刺杀小说家.jpg'
import img3 from '../assets/变形金刚.jpg'
import img4 from '../assets/唐人街探案3.jpg'
import img5 from '../assets/女儿国.jpg'
import img6 from '../assets/姜子牙.jpg'
import img7 from '../assets/血战钢锯岭.jpg'
import img8 from '../assets/东北往事.jpg'
import img9 from '../assets/危情营救.jpg'

export default {
  components: {},
  data() {
    return {
      input2: ref(""),
      movies: [
        {
          value: "信条",
          img: img1,
        },
        {
          value: "刺杀小说家",
          img: img2,
        },
        {
          value: "变形金刚",
          img: img3,
        },
        {
          value: "唐人街探案3",
          img: img4,
        },  
        {
          value: "女儿国",
          img: img5,
        },  
        {
          value: "姜子牙",
          img: img6,
        },  
        {
          value: "血战钢锯岭",
          img: img7,
        },  
        {
          value: "东北往事",
          img: img8,
        },  
        {
          value: "危情营救",
          img: img9,
        },        
      ],
      value: "",
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
li{
  list-style: none;
  float: left;
  margin: 5px;
}
img{
  width: 90px;
  height: 120px;
}
</style>