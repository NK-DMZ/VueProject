<!--  -->
<template>
  <div class="">    
    <Headers></Headers>
    <Body></Body>
    <Footer></Footer>
  </div>
</template>

<script>
import Headers from './head/Header'
import Body from './body/body.vue';
import Footer from './footer/Footer';

export default {
  components: {
    Headers,
    Body,
    Footer
  },
   
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    document.title = "首页";
  },
  mounted() {},
};
</script>
<style scoped>
  body{
    padding: 0px;
    margin: 0px;
  }
</style>