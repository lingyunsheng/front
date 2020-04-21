import { Component, Vue } from "vue-property-decorator";
// import { Button, NavMenu } from "element-ui";
// import Head from  './head.vue';

@Component({})
export default class Pins extends Vue {
  public render() {
    return (
      <div className="pins">
        {/* <el-button type="primary">主要按钮</el-button> */}
        {/* <Head></Head> */}
        <el-row class="tac">
          <el-col>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              open="handleOpen"
              close="handleClose"
            >
              <el-submenu index="1">
                <div slot="title">
                  <i class="el-icon-location"></i>
                  <span>推荐</span>
                </div>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">热门</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">关注</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">开源推荐</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">内推招聘</span>
              </el-menu-item>
              <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span slot="title">掘金相亲</span>
              </el-menu-item>
              <el-menu-item index="7">
                <i class="el-icon-office-building"></i>
                <span slot="title">上班摸鱼</span>
              </el-menu-item>
              <el-menu-item index="8">
                <i class="el-icon-setting"></i>
                <span slot="title">应用案例</span>
              </el-menu-item>
              <el-menu-item index="9">
                <i class="el-icon-setting"></i>
                <span slot="title">开发工具</span>
              </el-menu-item>
              <el-menu-item index="10">
                <i class="el-icon-setting"></i>
                <span slot="title">new资讯</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </div>
    );
  }
}
