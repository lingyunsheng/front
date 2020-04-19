<template>
  <div class="register">
    <h1>掘金 - juejin.im</h1>
    <p>一个帮助开发者成长的社区</p>
    <form actions="" post="get" class="form">
        <input type="username" placeholder="用户名" value="" /><br/>
        <input type="password" placeholder="密码" value="" /><br/>
        <input type="phone" placeholder="手机号" value=""/><br/>
        <button type="submit">注册</button>
    </form>
    <p class="sign">
     注册登录即表示<br/>
     <span>同意<router-link to="/terms" class="sign-terms">用户协议、隐私政策</router-link></span>
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
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class Register extends Vue {
  private data() {
    return {};
  }
  private created() {
    return {};
  }
  private methods() {
    return {};
  }
}
</script>

<style lang='stylus' scoped>
.register {
    width:100%;
    height:400px;
    padding-top:.625rem;
    // border:1px solid #eee;
    h1 {
        font-size:1rem;
        color:#2E3135;
        font-weight:600;
        margin: 0 0 .375rem .9375rem
    }
    p {
        font-size:.875rem;
        color:#2E3135;
        margin: 0 0 .375rem .9375rem
    }
    .form {
        margin-top:.625rem;
        margin-left: .9375rem;
        input {
            margin-bottom:.625rem;
            color:#666;
            font-size:.9rem;
            background:#fbfbfb;
            padding .7rem .6rem;
            border:1px solid #f4f4f4;
            width:81%;
        }
        button {
            background:#007FFF;
            text-align:center;
            color:#fff;
            border:none;
            width:90%;
            font-size:1.167rem;
        }
    }
    .sign {
        margin-top:.3125rem;
        margin-left: .9375rem;
        color:#767676;
        span {
            .sign-terms {
                color:#007FFF;
                list-style:none;
                text-decoration :none
            }
        }
    }
    .hot-tags {
        margin-top:1rem;
        display:flex;
        flex-direction:column;
        .hot-tags-title {
            border-bottom:1px solid #eee;
            p {
                float:left;
                font-size:.875rem;
                color:#000;
            }
            a {
                float:left;
                text-decoration:none;
                color:#007fff;
                font-size:.75rem;
                padding-top:.1875rem;
                margin-left:9rem;
            }
        }
        .hot-tags-all {
            margin-left:-30px;
            ul li {
                list-style:none;
                display:block;
                float:left;
                white-space:normal;
                width:3rem;
                height:1.875rem;
                background:#F3F6F3;
                margin-right:5px;
                text-align:center;
                padding-top:.1875rem;
                border-radius:50% solid #F3F6F3;
                cursor:pointer;
                &:hover {
                    color:#fff;
                    background:#0c0;
                }
            }
        }
    }
}
</style>