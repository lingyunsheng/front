<template>
  <div class="button">
    <button class="btn" @click="onClickBtn" :class="{
           'btn-large':large,
        }">
      <slot>Button</slot>
    </button>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Emit, Prop } from "vue-property-decorator";
@Component
export default class Button extends Vue {
  // @Emit('click')
  // private emitClickEvent() {

  // }
  // 方法一  v-on="$listener"
  // Emit 装饰器
  // @Emit('click')  private emitClickEvent(){}
  // private onClickBtn() {
  //     this.emitClickEvent()
  // }
  @Prop(Boolean) private large: boolean | undefined;

  @Emit("click") private emitClickEvent(event: MouseEvent) {}

  private mounted() {
    console.log(this.large);
  }

  private onClickBtn(event: MouseEvent) {
    this.emitClickEvent(event);
  }
}
</script>

<style lang='stylus' scoped>
.button {
  width: 480px;
  height: 160px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .btn {
    width: 64px;
    heig: 36px;
    padding: 0 16px;
    border: 0 solid black;
    border-radius: 4px;
    color: #17233d;
    background-color: #2d8cf0;
    font-size: 0.875rem;
    font-weight: 500;
    letter-space: 0.09em;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  .btn-large {
    min-width: 78px;
    height: 44px;
    padding: 0 19px;
    font-size: 0.875rem;
  }
}
</style>