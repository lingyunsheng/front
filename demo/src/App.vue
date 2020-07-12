<template>
  <div id="app">
    <div id="nav">
      <Btn></Btn>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Btn from './Btn.vue';
@Component({
  components:{
    Btn
  }
})
export default class App extends Vue {
}
</script>


<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
