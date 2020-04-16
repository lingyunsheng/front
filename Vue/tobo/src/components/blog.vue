<template>
  <div id="app">
    <div class="blog">
      <Head :class="[stickys==true ? 'blog-sticky':'blog']" id="header"></Head>
      <div class="content" id="content">
        <div class="left">
          <Container></Container>
        </div>
        <div class="right">
          <Banner></Banner>
        </div>
        <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100" :visibility-height="20">
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
import { Component, Vue } from "vue-property-decorator";
import Head from "./head.vue";
import Container from "./container.vue";
import Banner from "./banner.vue";
import { Backtop } from "element-ui";
@Component({
  components: {
    Head,
    Container,
    Banner
  }
})
export default class Blog extends Vue {
  public data() {
    return {
      stickys: false,
      offsetTop: "",
      offsetHeight: ""
    };
  }
  public created() {
    return {};
  }
  public mounted() {
    // window.addEventListener("scroll", this.watchScroll);
    const header = document.getElementById("header");
    this.offsetTop = header.offsetTop;
    this.offsetHeight = header.offsetHeight;
    // console.log(this.offsetTop, this.offsetHeight);
  }
  public watchScroll() {
    // console.log("----", this.stickys);
    // console.log(document.documentElement.scrollTop);
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;
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

  .blog {
    position: relative;
    top: 0;
    overflow: visible;

    .blog-sticky {
      position: sticky;
      position: -webkit-sticky;
      top: 0;
    }

    .content {
      width: 100%;
      margin-top: 20px;
      position: relative;

      .left {
        border: 1px solid #fff;
        width: 40%;
        height: 100%;
        float: left;
        margin-left: 17%;
        background: #fff;
      }

      .right {
        border: 1px solid #fff;
        width: 19%;
        height: 100%;
        float: left;
        margin-left: 20px;
        background: #fff;
      }
    }
  }
}
</style>