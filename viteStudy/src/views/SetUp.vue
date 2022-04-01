<template>
  <div>{{ book.title }}</div>
</template>

<script  lang="ts" setup>
import {  reactive } from 'vue'
const book = reactive({ title: 'Vue 3 Guide' })

  // export default {
  //   // props: {
  //   //   collectionName: String
  //   // },
  //   setup() {
  //     const readersNumber = ref(0)
  //     const book = reactive({ title: 'Vue 3 Guide' })

  //     // 暴露给 template
  //     return {
  //       book
  //     }
  //   }
  // }
</script>