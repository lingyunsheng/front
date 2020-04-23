<template>
  <div class="blog">
    <div class="header" :class="[stickys==true ? 'header-sticky':'']" id="header">
      <Head @emitClickEvent="handleChange"></Head>
      <component :is="rankComponent"></component>
    </div>

    <div class="content" id="content">
      <div class="left">
        <component :is="currentComponent"></component>
      </div>
      <div class="right" :class="[stickys==true ? 'right-sticky':'']">
        <Register class="right-register"></Register>
        <Banner class="right-banner"></Banner>
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
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Prop, Inject } from "vue-property-decorator";
import Head from "./head.vue";
import Container from "./container.vue";
import Pins from "./pins";
import Register from "./register.vue";
import Banner from "./banner.vue";
import Rank from './rank.vue';
import { Backtop } from "element-ui";
@Component({
  components: {
    Head,
    Container,
    Register,
    Banner,
    Pins,
    Rank,
  }
})
export default class Blog extends Vue {
  @Inject() public loginSuccess!: boolean;
  private stickys: boolean = false;
  private offsetTop: string = "";
  private offsetHeight: string = "";
  private currentComponent: string = 'Container';
  private rankComponent: string = 'Rank';
  public created() {
    return {};
  }
  public mounted() {
    console.log("父子组件通讯", this.loginSuccess);
    // window.addEventListener("scroll", this.watchScroll);
    const header = document.getElementById("content");
    this.offsetTop = content.offsetTop;
    this.offsetHeight = content.offsetHeight;
    console.log(this.offsetTop, this.offsetHeight);
    window.addEventListener("scroll", this.watchScroll);
  }
  public handleChange(item) {
    console.log('item', item)
    if(item === 'Container') {
      this.currentComponent = 'Container';
      this.rankComponent = 'Rank';
    } else {
      this.rankComponent = '';
    }
    if(item==='Pins') {
      this.currentComponent = 'Pins';
    }
  }
  public watchScroll() {
    console.log("----", this.stickys);
    // console.log(document.documentElement.scrollTop);
    // this.$nextTick(function() {
    //   const header = document.getElementById("header");
    //   this.offsetTop = header.offsetTop;
    //   this.offsetHeight = header.offsetHeight;
    //   console.log("offsetTop:" + this.offsetTop + "," + this.offsetHeight);
    // });
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
    console.log(scrollTop);
    console.log("offsetTop:" + this.offsetTop + "," + this.offsetHeight);
    if (scrollTop > this.offsetTop - this.offsetHeight * 2) {
      this.stickys = true;
    } else {
      this.stickys = false;
    }
  }
  public destroyed() {
    window.removeEventListener("scroll", this.watchScroll);
  }
}
</script>

<style lang='stylus' scoped>
.blog {
  width: 100%;
  height: 100%;
  font-size: 16px;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  overflow: visible;
  background: #f4f5f5;

  .header {
    width: 100%;
    position: relative;
  }

  .header-sticky {
    position: fixed;
    top: 0;
    overflow: visible;
  }

  .content {
    width: 100%;
    margin-top: 20px;

    .left {
      // border: 1px solid #fff;
      width: 40%;
      height: 100%;
      float: left;
      margin-left: 17%;
      background: #fff;
    }

    .right {
      // border: 1px solid #fff;
      width: 19%;
      height: 100%;
      float: left;
      margin-left: 20px;
      background: #f4f5f5;

      .right-banner {
        margin-top: 30px;
      }

      .right-register {
        background: #fff;
      }
    }

    .right-sticky {
      border: 1px solid #fff;
      width: 19%;
      height: 100%;
      float: left;
      margin-left: 20px;
      background: #fff;
      top: 18%;
      right: 22.5%;
      position: fixed;
    }
  }
}
</style>