const bodyParser = require("koa-bodyparser");
const router = require("koa-router")();
const userContorller = require('../controllers/user');

module.exports = (app) => {
  /**表单页面，提交地址为/user/login */
  router.get("/user", userContorller.user);
  router.get("content", userContorller.content);

  /**router.post()配置post路由 */
  router.post("/user/login", userContorller.login);
  router.post("/user/register", userContorller.register);
  app.use(bodyParser());
  app.use(router.routes()).use(router.allowedMethods());
};
