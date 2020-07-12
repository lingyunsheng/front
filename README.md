# front


# vue3.0

```js
npm install -g @vue/cli

yarn global add @vue/cli

// 或者

npm install -g vue @vue/cli typescript

vue create vue3

cd  vue3

npm run serve

yarn serve  配置其他

// 视图工具
vue ui

```

**shims-tsx.d.ts和shims-vue.d.ts**

- shims-tsx.d.ts，允许使用.tsx结尾的文件，在项目中使用jsx代码
- shims-vue.d.ts主要用于typescript识别.vue文件 ts默认并不支持导入vue文件 导入到时候文件都按VueConstructor<Vue>处理



# 类组件
**vue.extends**
```js
  import Vue from 'vue'

  const Component = Vue.extend({
  	// type inference enabled
  })
```

**jsx**
```ts
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Test extends Vue {
  @Prop({ type: Object })
  private test: { value: string }
}
```




# koa
```js
// 导入koa 导入一个大写的koa
const Koa = require("koa");
// 引入路由函数
// 登录接口
const bodyParser = require("koa-bodyparser");
const router = require("koa-router")();
// 创建一个app 实例化koa
const app = new Koa();



router.get("/search/:name", async (ctx, next) => {
  await next();
  var name = ctx.params.name;
  ctx.response.body = `hello koa2, ${name}`;
  // console.log(ctx.request.method,ctx.request.url,ctx.req,ctx.res);
});

router.get("/", async (ctx, next) => {
  ctx.response.body = `
    <h1>Index, WELCOME TO LOGIN</h1>
    <form action="/signin" method="post">
        <p>Name: <input name="name" defaultValue="koa"></p>
        <p>Password: <input name="password" type="password"></p>
        <p><input type="submit" value="Submit"></p>
    </form>
  `;
});

router.post("/signin", async (ctx, next) => {
  var name = ctx.request.body.name;
  var password = ctx.request.body.password;
  console.log(`signin with name: ${name}, password: ${password},${ctx.request.body.name}`);
  if (name !== '' && password !== '') {
    ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
  } else {
    ctx.response.body = `
        <h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>
    `;
  }
});

app.use(bodyParser());
app.use(router.routes());
// 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配
app.use(router.allowedMethods());

app.use(async (ctx, next) => {
  ctx.response.body = `
        <h1>koa</h1>
        <div>
            ${ctx.request.method}
            ${ctx.request.url}
            ${ctx.request.headers}
        </div>
        <div>
           ${ctx.response.status}
        </div>
        <div>
            ${ctx.req}
        </div>
        <div>
            ${ctx.res}
        </div>
    `;
  await next();
  // console.log(ctx.request.method,ctx.request.url,ctx.req,ctx.res);
});

// 监听端口

app.listen(3000, () => {
  console.log("3000 port was successed start");
});
```

跨域  koa-cors;
app.use(cors())



# Git操作
https://juejin.im/book/5c47343bf265da612b13e5c0/section/5c473982e51d45731470c051