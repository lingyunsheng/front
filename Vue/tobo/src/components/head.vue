<template>
  <div class="header-container">
    <div class="header">
      <div class="header-logo">
        <img
          data-v-26abcca9
          src="https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"
          alt="掘金"
          class="logo-img"
        />
      </div>
      <div class="header-menu">
        <ul class="header-item">
          <li
            class="header-items"
            v-for="(item, index) in headerItems"
            :key="index"
            @click="handleComponent(item)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="header-search">
        <input type="search" placeholder="搜索掘金" value />
        <i class="el-icon-search"></i>
      </div>
      <div class="header-sign">
        <ul class="header-sign-item">
          <li class="header-sign-items write">
            <i class="el-icon-tickets" style="margin-right:3px; margin-top:1px"></i>写文章
          </li>
          <li class="header-sign-items login" @click="dialogVisible = true" v-show="isIndex">登录</li>
          <el-dialog
            title="登录"
            :visible.sync="dialogVisible"
            width="20%"
            :before-close="handleClose"
            class="login-dialog"
            v-if="loginStatus"
          >
            <img
              src="../assets/log.png"
              alt="logo"
              width="120px"
              height="95px"
              style="position:absolute;top:-80px;left:30%"
            />
            <p class="form">
              <input type="phone" placeholder="请输入手机号或邮箱" value v-model="phone" ref="phones" />
              <br />
              <input type="password" placeholder="请输入密码" value v-model="password" ref="passwords" />
              <br />
              <button type="submit" @click="login">登录</button>
            </p>
            <p class="account">
              没有账号？
              <span class="account-register" @click="openRegister">注册</span>
              <span class="account-forgot">忘记密码</span>
            </p>
            <p class="sign">
              注册登录即表示同意
              <span>
                <router-link to="/terms" class="sign-terms">用户协议、隐私政策</router-link>
              </span>
            </p>
          </el-dialog>
          <li
            class="header-sign-items register"
            @click="dialogRegisterVisible= true"
            v-show="isIndex"
          >注册</li>
          <el-dialog
            title="注册"
            :visible.sync="dialogRegisterVisible"
            width="20%"
            :before-close="handleRegisterClose"
            class="register-dialog"
            v-show="registerStatus"
          >
            <img
              src="../assets/log.png"
              alt="logo"
              width="120px"
              height="95px"
              style="position:absolute;top:-80px;left:30%"
            />
            <p class="form">
              <input type="username" placeholder="请输入用户名" value v-model="registerName" />
              <br />
              <input type="phone" placeholder="请输入手机号" value v-model="registerPhone" />
              <br />
              <input type="password" placeholder="请输入密码（至少6位）" value v-model="registerPassword" />
              <br />
              <button type="submit" @click="register">注册</button>
            </p>
            <p class="account">
              <span class="account-register" @click="openLogin">已有账号</span>
            </p>
            <p class="sign">
              注册登录即表示同意
              <span>
                <router-link to="/terms" class="sign-terms">用户协议、隐私政策</router-link>
              </span>
            </p>
          </el-dialog>
          <li class="header-sign-items annouce" v-show="loginSuccess">
            <i class="el-icon-message-solid"></i>
          </li>
          <li class="header-sign-items avatar" v-show="loginSuccess">
            <el-dropdown>
              <img
                class="el-dropdown-link"
                src="../assets/log.png"
                alt="logo"
                width="25"
                height="25"
              />
              <el-dropdown-menu slot="dropdown" class="el-dropdown-link-items">
                <el-dropdown-item>写文章</el-dropdown-item>
                <el-dropdown-item>草稿</el-dropdown-item>
                <el-dropdown-item>我的主页</el-dropdown-item>
                <el-dropdown-item>我赞过的</el-dropdown-item>
                <el-dropdown-item>我的收藏集</el-dropdown-item>
                <el-dropdown-item>已购</el-dropdown-item>
                <el-dropdown-item>标签管理</el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>关于</el-dropdown-item>
                <el-dropdown-item @click="logout">登出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-select">
      <ul class="select-item">
        <li
          class="select-items"
          :class="{'actived':'item.actived', 'disactived':'!item.actived'}"
          :key="item.key"
          v-for="(item, index) in selectItem"
          @click="changeSelectItems(item, index)"
        >{{item.name}}</li>
      </ul>
    </div>
    <div :is="currentComponent"></div>
  </div>
</template>
<script lang='ts'>
import {
  Component,
  Vue,
  Model,
  Ref,
  Provide,
  Emit
} from "vue-property-decorator";
import { Button, Dialog, Input, Message, Dropdown } from "element-ui";
@Component({})
export default class Head extends Vue {
  @Ref("phone") readonly phones!: number | string;
  @Provide() public loginSuccess: boolean = false;
  private dataA: string = "test";
  private msg: string = "111";
  private dialogVisible: boolean = false;
  private dialogRegisterVisible: boolean = false;
  private registerStatus: boolean = true;
  private loginStatus: boolean = true;
  private phone: number | string = "";
  private password: string = "";
  private registerName: string = "";
  private registerPhone: number;
  private registerPassword: string = "";
  private logininfo: Array<[]> = [];
  private isIndex: boolean = true;
  private headerItems: Array<any> = [
    {
      name: "首页",
      key: "Container"
    },
    {
      name: "沸点",
      key: "Pins"
    },
    {
      name: "话题",
      key: "Topic"
    },
    {
      name: "小册",
      key: "Books"
    },
    {
      name: "活动",
      key: "Events"
    }
  ];
  private selectItem: Array<any> = [
    {
      name: "推荐",
      key: "rank"
    },
    {
      name: "后端",
      key: "backend"
    },
    {
      name: "前端",
      key: "frontend"
    },
    {
      name: "人工智能",
      key: "ai"
    },
    {
      name: "开发工具",
      key: "tool"
    },
    {
      name: "阅读",
      key: "read"
    }
  ];
  private actived: boolean = false;
  // private disactived: boolean = true;
  // private data() {
  //   return {
  //     msg: "1111",
  //     dialogVisible: false,
  //     dialogRegisterVisible: false,
  //     registerStatus: true,
  //     loginStatus: true,
  //     phone: '',
  //     password: '',
  //     logininfo: [],
  //   };
  // }
  private created() {
    // this.login();
    return {};
  }
  private mounted() {
    let selectItem = document.getElementsByClassName("select-items");
    selectItem[0].style.color = "#007fff";
    for (let i = 0; i < selectItem.length; i++) {
      selectItem[i].addEventListener("click", function() {
        selectItem[i].style.color = "#007fff";
        for (let j = 0; j < selectItem.length; i++) {
          if (i !== j) {
            selectItem[i].style.color = "#71777c";
          }
        }
      });
    }
    let head = document.querySelectorAll(".header-items");
    head[0].style.color = "#007fff";
    // this.changeSelectItems();
  }
  private handleClose(done) {
    done();
  }
  private handleRegisterClose(done) {
    done();
  }
  private openRegister() {
    this.registerStatus = !this.registerStatus;
    this.loginStatus = !this.loginStatus;
  }
  private openLogin() {
    this.loginStatus = !this.loginStatus;
    this.registerStatus = !this.registerStatus;
  }
  private login() {
    console.log(`用户名:${this.phone}`);
    console.log(`密码:${this.password}`);
    this.$axios
      .post("/api/user/login", {
        username: this.phone,
        password: this.password
      })
      .then(res => {
        console.log(res);
        localStorage.setItem("username", this.phone);
        localStorage.setItem("password", this.password);
        if (res.status == 200) {
          this.loginStatus = false;
          this.loginSuccess = true;
          this.isIndex = false;
          console.log(this.loginSuccess);
          this.$message({
            message: "登录成功",
            type: "success"
          });
          this.$router.push("/blog");
        } else {
          this.$message.error("用户名/密码错误,请重试");
        }
      })
      .catch(err => {
        console.log(err);
        this.$message.error("用户名/密码错误,请重试");
      });
  }
  private register() {
    let username: string = this.registerName;
    let password: string = this.registerPassword;
    let phone: number = this.registerPhone;
    if (!username) {
      this.$message.error("请输入用户名");
    } else if (password.length < 6) {
      this.$message.error("请输入密码，不得少于6位");
    } else if (phone.length !== 11) {
      this.$message.error("手机号输入错误");
    } else {
      this.$axios
        .post("/api/user/register", {
          username: username,
          password: password,
          phone: phone
        })
        .then(res => {
          this.$message({
            message: "注册成功",
            type: "success"
          });
          this.registerStatus = false;
          this.loginSuccess = true;
          this.isIndex = false;
          this.$router.push("/blog");
        });
    }
  }
  private changeSelectItems(item, index) {
    console.log("点击了:" + item.name + "下标是:" + index);
    Vue.set(item, "actived", "true");
  }
  private logout() {
    this.$router.go(-1);
  }
  private handleComponent(item) {
    this.$emit("emitClickEvent", item.key);
  }
}
</script>

<style lang='stylus' scoped>
.header-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  margin: 0;
  padding: 0;

  .header {
    margin: 0 auto;
    height: 3.8125rem;
    line-height: 3.8125rem;
    width: 100%;
    border-bottom: 1px solid #eee;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 10.5rem 0 15.5rem;

    .header-logo {
      width: 6.125rem;
      height: 2.375rem;
    }

    .header-menu {
      .header-item {
        margin-bottom: 0.625rem;

        .header-items {
          list-style: none;
          float: left;
          color: #71777c;
          padding: 0 0.4rem 0.3rem 0.4rem;
          cursor: pointer;
          font-size: 1rem;

          &:hover {
            color: #007FFF;
          }
        }
      }
    }

    .header-search {
      width: 10rem;
      height: 2.0625rem;
      line-height: 2.0625rem;
      margin-left: 9rem;
      margin-top: 0.625rem;

      input {
        width: 10rem;
        height: 2.0625rem;
        box-shadow: none;
        outline: none;
        font-size: 1rem;
        color: #666;
        padding: 0.7rem 0.6rem;
        background-color: #fbfbfb;
        border: 0.0625rem solid #f4f4f4;
      }

      .el-icon-search {
        float: right;
        position: absolute;
        margin-top: 10px;
        margin-left: -25px;
        color: #666;
      }
    }

    .header-sign {
      .header-sign-item {
        .header-sign-items {
          list-style: none;
          float: left;
          margin-left: 1rem;
          color: #007fff;
          font-size: 1.1rem;
          cursor: pointer;

          .header-sign-items .login {
            &:after {
              content: '|';
              display: block;
              color: #007fff;
            }
          }

          .header-sign-items .avatar {
            .el-dropdown-link {
              cursor: pointer;
              color: #fbfbfb;
              border-radius: 50% solid #000;
              margin-top: 5px;
              border: 1px solid #000;
            }

            .el-icon-arrow-down {
              font-size: 12px;
            }

            .el-dropdown-link-items {
              width: 9.8125rem;
              color: #fbfbfb;
            }
          }
        }

        .login-dialog {
          margin-top: 6.25rem;

          .form {
            margin-top: -2.5rem;

            input {
              margin-bottom: 0.625rem;
              color: #666;
              font-size: 0.9rem;
              background: #fbfbfb;
              padding: 0.7rem 0.6rem;
              border: 1px solid #f4f4f4;
              width: 81%;
              margin-top: -0.625rem;
            }

            button {
              background: #007FFF;
              text-align: center;
              color: #fff;
              border: none;
              width: 90%;
              font-size: 1.167rem;
              margin-top: -0.625rem;
            }
          }

          .account {
            margin-top: -1rem;
            font-size: 0.8rem;
            position: relative;

            .account-register {
              color: #007fff;
              cursor: pointer;
            }

            .account-forgot {
              cursor: pointer;
              color: #007fff;
              right: 1.6rem;
              position: absolute;
            }
          }

          .sign {
            margin-top: -3.125rem;
            font-size: 0.8rem;

            span {
              .sign-terms {
                text-decoration: none;
                color: #007fff;
              }
            }
          }
        }

        .register-dialog {
          margin-top: 6.25rem;

          .form {
            margin-top: -2.5rem;

            input {
              margin-bottom: 0.625rem;
              color: #666;
              font-size: 0.9rem;
              background: #fbfbfb;
              padding: 0.7rem 0.6rem;
              border: 1px solid #f4f4f4;
              width: 81%;
              margin-top: -0.625rem;
            }

            button {
              background: #007FFF;
              text-align: center;
              color: #fff;
              border: none;
              width: 90%;
              font-size: 1.167rem;
              margin-top: -0.625rem;
            }
          }

          .account {
            margin-top: -1rem;
            font-size: 0.8rem;
            position: relative;

            .account-register {
              position: absolute;
              color: #007fff;
              cursor: pointer;
              left: 50%;
              top: 50%;
              transform: translate(-60%, -50%);
              margin-top: 0.5rem;
            }

            .account-forgot {
              cursor: pointer;
              color: #007fff;
              right: 1.6rem;
              position: absolute;
            }
          }

          .sign {
            margin-top: -1.125rem;
            font-size: 0.8rem;

            span {
              .sign-terms {
                text-decoration: none;
                color: #007fff;
              }
            }
          }
        }
      }
    }
  }

  .header-select {
    width: 100%;
    height: 3.125rem;
    background: #fff;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    padding: 0 10.5rem 0 12.5rem;

    .select-item {
      .select-items {
        list-style: none;
        float: left;
        margin-left: 1rem;
        color: #71777C;

        &:hover {
          color: #007fff;
          cursor: pointer;
        }
      }

      .actived {
        color: #007fff;
      }

      .disactived {
        color: #71777C;
      }
    }
  }
}
</style>