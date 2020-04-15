const mysql = require("./../mysql/index");

const user = async (ctx, next) => {
  const data = await mysql.query();
//   console.log(data);
  ctx.body = `
            <h1>hello, koa2</h1>
            <form action="/user/login" method="post">
                <p><input name="name" type="text" placeholder="请输入用户名或者手机号" value=""></p>
                <p><input name="password" type="password" placeholder="请输入密码"></p>
                <button>登录</button>
            </form>
            ${data}
        `;
};

const login = async (ctx, next) => {
  /**ctx.request.body为解析的post数据对象 */
  //{name:'joyitsai', password:'123456'}
  console.log(ctx.request.body);
  let { username, password } = ctx.request.body;
  let data = await mysql.queryUser();
  console.log(data);
  ctx.body=data
//   if (name == "lingyunsheng" && password == "123456") {
//     ctx.body = `
//          <h1>Hello koa2,WELCOME ${name}</h1>`;
//   } else {
//     ctx.body = `
//         <h1>账号信息错误</h1>
//         <a href="/user">回到首页</a>
//       `;
//   }
};
// const queryContent = () => {
//   return new Promise((resolve, reject) => {
//     pool.query("select * from user", function (err, data) {
//       if (err) {
//         reject(err);
//         throw err;
//       }
//       resolve(data);
//     });
//   });
// };
const content = async (ctx, next) => {
  const data = await mysql.query();
  ctx.response.status = 200;
  console.log("----", data);
  if (ctx.request.method === "GET") {
    ctx.request.body = {
      code: 200,
      data,
    };
  }
};

module.exports = {
  user,
  login,
  content,
};
