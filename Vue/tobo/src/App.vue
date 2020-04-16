<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { Backtop } from "element-ui";
@Component({})
export default class App extends Vue {}
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