<template>
    <div id="tabbar">
        <slot></slot>      
    </div>
</template>

<script>
export default {
    name:"tabbar"

}
</script>

<style>
  #tabbar{
    /* 弹性布局 */
    display: flex;
    /* 背景颜色 */
    background-color: #f6f6f6;

    /* 放到最底下 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0px -3px 1px rgba(211, 205, 205, 0.8);
  }
</style>