<template>
  <div class="register" v-show="isIndex">
    <h1>掘金 - juejin.im</h1>
    <p>一个帮助开发者成长的社区</p>
    <p class="form">
      <input type="username" placeholder="请输入用户名" value v-model="registerName" />
      <br />
      <input type="password" placeholder="请输入密码（至少6位）" value v-model="registerPassword" />

      <br />
      <input type="phone" placeholder="请输入手机号" value v-model="registerPhone" />
      <br />
      <button type="submit" @click="register">注册</button>
    </p>
    <p class="sign">
      注册登录即表示
      <br />
      <span>
        同意
        <router-link to="/terms" class="sign-terms">用户协议、隐私政策</router-link>
      </span>
    </p>

    <div class="hot-tags">
      <div class="hot-tags-title">
        <p>热门标签</p>
        <a href="#">查看全部</a>
      </div>
      <div class="hot-tags-all">
        <ul class="tags-item">
          <li class="tags-items">框架</li>
          <li class="tags-items">面经</li>
          <li class="tags-items">算法</li>
          <li class="tags-items">项目</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class Register extends Vue {
  private registerName: string = "";
  private registerPhone: number;
  private registerPassword: string = "";
  private isIndex: boolean = true;
  private created() {
    return {};
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
          this.isIndex = false;
          this.$router.push("/blog");
        });
    }
  }
}
</script>

<style lang='stylus' scoped>
.register {
  width: 100%;
  height: 400px;
  padding-top: 0.625rem;

  // border:1px solid #eee;
  h1 {
    font-size: 1rem;
    color: #2E3135;
    font-weight: 600;
    margin: 0 0 0.375rem 0.9375rem;
  }

  p {
    font-size: 0.875rem;
    color: #2E3135;
    margin: 0 0 0.375rem 0.9375rem;
  }

  .form {
    margin-top: 0.625rem;
    margin-left: 0.9375rem;

    input {
      margin-bottom: 0.625rem;
      color: #666;
      font-size: 0.9rem;
      background: #fbfbfb;
      padding: 0.7rem 0.6rem;
      border: 1px solid #f4f4f4;
      width: 81%;
    }

    button {
      background: #007FFF;
      text-align: center;
      color: #fff;
      border: none;
      width: 90%;
      font-size: 1.167rem;
    }
  }

  .sign {
    margin-top: 0.3125rem;
    margin-left: 0.9375rem;
    color: #767676;

    span {
      .sign-terms {
        color: #007FFF;
        list-style: none;
        text-decoration: none;
      }
    }
  }

  .hot-tags {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;

    .hot-tags-title {
      border-bottom: 1px solid #eee;

      p {
        float: left;
        font-size: 0.875rem;
        color: #000;
      }

      a {
        float: left;
        text-decoration: none;
        color: #007fff;
        font-size: 0.75rem;
        padding-top: 0.1875rem;
        margin-left: 9rem;
      }
    }

    .hot-tags-all {
      margin-left: -30px;

      ul li {
        list-style: none;
        display: block;
        float: left;
        white-space: normal;
        width: 3rem;
        height: 1.875rem;
        background: #F3F6F3;
        margin-right: 5px;
        text-align: center;
        padding-top: 0.1875rem;
        border-radius: 50% solid #F3F6F3;
        cursor: pointer;

        &:hover {
          color: #fff;
          background: #0c0;
        }
      }
    }
  }
}
</style>