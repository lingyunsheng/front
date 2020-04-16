# tobo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).




# mysql安装


**管理员方式打开命令行**
https://blog.csdn.net/hiudawn/article/details/80701935


重置密码
https://www.cnblogs.com/emanlee/p/4621727.html

# mysql密码wqs1997 用户名root
https://blog.csdn.net/icecoola_/article/details/105012235?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-5&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-5


# vue-cli4 自动把px转换成rem方法

npm i lib-flexible postcss-px2rem --s

```js
1、在根目录添加postcss.config.js文件

module.exports = {
 plugins: {
   autoprefixer: {},
   "postcss-px2rem": {
     remUnit: 37.5, // 50px = 1rem
     remPrecision: 2 // rem的小数点后位数
   }
 }
};

2、在main.js添加

import 'lib-flexible/flexible'
```
