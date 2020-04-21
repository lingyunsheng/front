<template>
  <div id="app">
    <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
      <div
        style="{
              height: 100%;
              width: 100%;
              background-color: red;
              box-shadow: 0 0 6px rgba(0,0,0, .12);
              text-align: center;
              line-height: 40px;
              color: #1989fa;
            }"
      >UP</div>
    </el-backtop>
    <router-view />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { Backtop } from "element-ui";
@Component({})
export default class App extends Vue {}
// document.addEventListener('DOMContentLoaded', () => {
//   const html = document.querySelector('html');
//   let fontSize = window.innerWidth / 10;
//   fontSize = fontSize > 50 ? 50 : fontSize;
//   html.style.fontSize = fontSize + 'px';
// });
</script>

<style lang='stylus'>
#app {
  width: 100%;
  height: 100%;
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow: hidden;
  background: #f4f5f5;
}
</style>