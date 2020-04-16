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
  console.log("-----", ctx.request.body);
  const data = await mysql.queryUser();
  let { username, password } = ctx.request.body;
  const res = data.data;
  // console.log('res', data);
  if (username == "凌云生" && password == "123") {
    ctx.response.status = 200;
    ctx.request.body = {
      code: 200,
      message: "登录成功",
    };
  }
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
const register = async (ctx, next) => {
  let { username, password, phone } = ctx.request.body;
  console.log(username, password, phone)
  ctx.response.status=200;
  ctx.request.body={
    code:200,
    message: '注册成功'
  }
};
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
  register,
  content,
};
