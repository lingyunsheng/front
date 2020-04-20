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
  let data = await mysql.queryUser();
  let { username, password } = ctx.request.body;
  console.log("res", Array.isArray(data));
  let res = data.some(
    (item) => item.username == username && item.password == password
  );
  console.log("res", res);
  if (res) {
    ctx.response.status = 200;
    ctx.request.body = {
      code: 200,
      message: "登录成功",
    };
  }
};
const register = async (ctx, next) => {
  let { username, password, phone } = ctx.request.body;
  console.log(username, password, phone);
  let id = Math.random()*50-1;
  let inserInfo = `insert into user (id, username, password, phone) values ( '${id}', '${username}', '${password}', '${phone}')`;
  if (username && password && phone) {
    let data = await mysql.insertUser(inserInfo);
    console.log('插入的数据', data)
    ctx.response.status = 200;
    ctx.request.body = {
      code: 200,
      message: "注册成功",
    };
  }
};
const content = async (ctx, next) => {
  const data = await mysql.query();
  console.log("----", data);
  if (ctx.request.method === "GET") {
    ctx.response.status = 200;
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
