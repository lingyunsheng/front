// 导入koa 导入一个大写的koa
const Koa = require("koa");
// 引入路由函数
const bodyParser = require("koa-bodyparser");
const router = require("koa-router")();
const cors = require('koa2-cors');
const mysql = require("./mysql/index");
// 创建一个app 实例化koa
const app = new Koa();

router.get("/content", async (ctx, next) => {
  const data = await mysql.query();
  ctx.response.status = 200;
  ctx.body = {
    code: 200,
    data: data,
  };
});

app.use(
    cors({
        origin: function(ctx) { //设置允许来自指定域名请求
            if (ctx.url === '/test') {
                return '*'; // 允许来自所有域名请求
            }
            return 'http://localhost:8080'; //只允许http://localhost:8080这个域名的请求
        },
        maxAge: 5, //指定本次预检请求的有效期，单位为秒。
        credentials: true, //是否允许发送Cookie
        allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
    })
);

app.use(bodyParser());
app.use(router.routes());
// // 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配
app.use(router.allowedMethods());




// 我们可以用下面的中间件理解app.use(cors({}))
// app.use(async (ctx, next) => {
//     // 允许来自所有域名请求
//     ctx.set("Access-Control-Allow-Origin", "http://localhost:8080");
//     // 这样就能只允许 http://localhost:8080 这个域名的请求了
//     // ctx.set("Access-Control-Allow-Origin", "http://localhost:8080"); 
 
//     // 设置所允许的HTTP请求方法
//     ctx.set("Access-Control-Allow-Methods", "OPTIONS, GET, PUT, POST, DELETE");
 
//     // 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段.
//     ctx.set("Access-Control-Allow-Headers", "x-requested-with, accept, origin, content-type");
 
//     // 服务器收到请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应。
 
//     // Content-Type表示具体请求中的媒体类型信息
//     ctx.set("Content-Type", "application/json;charset=utf-8");
 
//     // 该字段可选。它的值是一个布尔值，表示是否允许发送Cookie。默认情况下，Cookie不包括在CORS请求之中。
//     // 当设置成允许请求携带cookie时，需要保证"Access-Control-Allow-Origin"是服务器有的域名，而不能是"*";
//     ctx.set("Access-Control-Allow-Credentials", true);
 
//     // 该字段可选，用来指定本次预检请求的有效期，单位为秒。
//     // 当请求方法是PUT或DELETE等特殊方法或者Content-Type字段的类型是application/json时，服务器会提前发送一次请求进行验证
//     // 下面的的设置只本次验证的有效时间，即在该时间段内服务端可以不用进行验证
//     ctx.set("Access-Control-Max-Age", 300);
 
//     /*
//     CORS请求时，XMLHttpRequest对象的getResponseHeader()方法只能拿到6个基本字段：
//         Cache-Control、
//         Content-Language、
//         Content-Type、
//         Expires、
//         Last-Modified、
//         Pragma。
//     */
//     // 需要获取其他字段时，使用Access-Control-Expose-Headers，
//     // getResponseHeader('myData')可以返回我们所需的值
//     ctx.set("Access-Control-Expose-Headers", "myData");
 
//     await next();
// });
const user = require("./routes/user");
user(app);

// 监听端口

app.listen(3000, () => {
  console.log("3000 port was successed start");
});
