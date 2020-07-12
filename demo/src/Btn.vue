import { Component } from 'vue-property-decorator';
<template>
  <div>
      <Button @click="onClick" large>点击</Button>
  </div>
</template>
<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';
import Button from './components/UI/Button.vue';
@Component({
    components:{
        Button
    }
})
export default class Btn extends Vue {
    private onClick(event: MouseEvent) {
        console.log(event);
    }
}
</script>

<style lang='stylus' scoped>

</style>