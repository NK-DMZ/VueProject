<template>
  <div>
    <div id="box" ref="mybox">
        DEMO
    </div>
  </div>
</template>
 
<script>
export default {
  data () {
    return {
        invt:''
    }
  },
  mounted () {
    this.init();
  },
  destroyed () {
    clearTimeout(this.invt);
  },
  methods:{
    init() {
      this.$refs.mybox.style.color = 'red';
      this.invt = setTimeout(() => {
        this.$refs.mybox.style.color = 'blue';
      }, 1000)
    }
  }
 
}
</script>
 
<style scoped>
  #box {
    width: 100px;
    height: 100px;
    line-height: 100px;
    font-size: 20px;
    text-align: center;
    border: 1px solid black;
    margin: 50px; 
    color: yellow;
  }
</style>