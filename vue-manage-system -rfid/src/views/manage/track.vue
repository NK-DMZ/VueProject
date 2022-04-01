<!--  -->
<template>
  <div class="">
    <iframe
      id="iframeId"
      :src="url"
      frameborder="0"
      class="pc iframe"
      scrolling="auto"
    >
    </iframe>
  </div>
</template>


<script>
export default {
  components: {},
  data() {
    return {
        url: 'http://127.0.0.1:5500/src/views/map.html'
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


.iframe {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow-y: hidden;
}
</style>