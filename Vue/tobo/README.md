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


# vue-property-decorator

vue-property-decorator是一个vue库，和vue-class-component一样的class库，源于class库
/* npm 仓库地址 */
// https://www.npmjs.com/package/vue-property-decorator

/* github地址 */
// https://github.com/kaorun343/vue-property-decorator

**@Component(options)**

```js

@Component({
  components: {
    Helloworld,  //声明对子组件的引用
  }
})
export default class App extend Vue {}
```

**filters**
filter表示对数据的筛选，根linux的管道符相似，数据通过filter进行处理，配置时一定要使用filters

```js
<template>
  <div id="app">
    {{name | filterA}}
  </div>
</template>
<script lang="ts">
@Component({
  components: {
    Helloworld,  //声明对子组件的引用
  },
  filters: {
    addWords: (value) => `${name} word`
  }
})
export default class App extend Vue {
  private name: string =''
}
</script>
```

**@Prop**
属性声明，自定义组件使用
```js
export default {
  name: 'upload',
  props: {
    value: {
      type: string,
      default: ''
    }
  }
}
```

ts的写法
```js
import {Prop, Vue, Component} from 'vue-property-decorator';
export default class Upload extend Vue {
  @Prop();
  private value:string = ''
}
```

**computed计算属性**
vue2.5写法
```js
computed: {
  getImgUrl() {
    return this.value;
  }
}
```

ts写法
```ts
get imgUrl() {
  return 'www'+this.value;
}
```

**@watch:监测vue实力上数据的变动**
如果对象，键是观察表达式 值对应回调
```js
export default {
  name: 'index',
  data() {
    return {
      demo: {
        name: ''
      },
      value: ''
    }
  },
  computed: {
    newName() {
      return this.demo.name;
    }
  },
  watch: {
    newName(val) {
      this.value=val;
    }
  }
}
```


ts

```ts
export default class App extends Vue {
  demo:any={name:''}
  value: string = ''

  getName() {
    return this.demo.name;
  }
  // 写一个监测数据的变化函数回调
  @watch('newName')
  newName(val) {
    this.value = val;
  }
}
```


**emit**
父组件通过props传递给子组件 子组件通过emit传给父组件
```ts
import {Emit, Component, Vue} from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  @Emit(this.eventAttach())
}
```
https://www.zhihu.com/question/52061495