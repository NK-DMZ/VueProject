<template>
  <div class="tabbaritem" @click="itemclick">
    <div v-if="!isactive"> <slot name="itemicon"></slot></div>  
    <div v-else><slot name="itemiconactive"></slot></div>    
    <div :style="activestyle">
        <slot name="itemtext"></slot>
    </div>    
  </div>
</template>

<script>
export default {
    name:"tabbaritem",
    props:{
      path:String,
      activecolor:{
        type:String,
        default:'red'
      }
    },
    data(){
        return{
            // isactive:true,
        }
    },
    computed:{
      isactive(){
        // /home  ->  item1(/home)  =  true
        // 这里的indexof函数是为了确定当前path
        return this.$route.path.indexOf(this.path) !== -1
        // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
      },
      activestyle(){
        return this.isactive?{color:this.activecolor} :{}
      }
    },
    methods:{
      itemclick(){
        this.$router.replace(this.path)
      }
    }
};
</script>

<style>
  .tabbaritem{
    /* 均等分 */
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tabbaritem img{
      width: 24px;
      height: 24px;
      margin-top: 3px;
      /* vertical-align这个是设置元素的垂直排列的 */
      vertical-align: middle;
  }

</style>