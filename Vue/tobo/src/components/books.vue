<template>
  <div>
    {{msg}}
  </div>
</template>
<script lang='ts'>

import {Component, Vue} from 'vue-property-decorator';
@Component
export default class Books extends Vue {
    private msg: string = 'hello';
}
</script>

<style lang='stylus' scoped>

</style>