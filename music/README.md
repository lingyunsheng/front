# 项目说明
本项目仅为毕业设计时开始设计，毕设专用，如有fork，非常感谢哦，么么哒。
本项目是新世纪音乐播放器，以React全家桶，采用ReactHooks开发以及immutable数据流为基础的播放器均衡器，移动端音乐WebApp

## 技术栈
**前端部分**
- react全家桶 react，react-router 用于构建用户界面的MVVM框架
- redux  著名的javascript状态管理容器
- redex-thunk 处理一部逻辑的redux中间件
- immutable facebook的进行持久处理数据结构处理的库
- react-lazyload react懒加载库 
- better-scroll 提升移动端滑动体验的知名库
- styled-components 处理样式 实现css-in-js前端工程化
- axios 用来请求后端api数据

**后端部分**
- github NeteaseCloudMusicApi 开源库
- node koa框架

**其他**
- create-react-app：react脚手架 快速搭建项目
- eslint 知名代码风格检查
- iconfont 阿里巴巴矢量图标库
- fastclick 解决移动端300ms问题


### PWA
PWA progressive Web App 渐进式增强WEB应用
可以使用WebApp实现在手机上使用 体验App的感觉
- 可以添加至主屏幕，点击主屏幕图标可以启动动画以及隐藏地址栏
- 实现离线缓存功能，用户手机没有网络，依然可以使用一些离线功能
- 实现消息推送

**Manifest实现添加至主屏幕**
```js
<meta name="viewport" content="width=device-width,user-scalable="no" />
<link rel="manifest" href="manifest.json" />
```

是指主屏幕图标信息
```js
{
  "name": "一个PWA示例", // 必填 显示的插件名称
  "short_name": "PWA Demo", // 可选  在APP launcher和新的tab页显示，如果没有设置，则使用name
  "description": "The app that helps you understand PWA", //用于描述应用
  "display": "standalone", // 定义开发人员对Web应用程序的首选显示模式。standalone模式会有单独的
  "start_url": "/", // 应用启动时的url
  "theme_color": "#313131", // 桌面图标的背景色
  "background_color": "#313131", // 为web应用程序预定义的背景颜色。在启动web应用程序和加载应用程序的内容之间创建了一个平滑的过渡。
  "icons": [ // 桌面图标，是一个数组
    {
      "src": "/public/img/logo.png",
      "sizes": "144x144",
      "type": "image/png"
    }]
}
```

**service worker实现离线缓存**
<img src="https://upload-images.jianshu.io/upload_images/13946194-a323106107f54f19.png?imageMogr2/auto-orient/strip|imageView2/2/w/554/format/webp" alt="" title="" /><br/>
- 运行于浏览器后台，不受页面刷心动影响，可以监听和拦截作用域范围内所有的http请求
- 网站必须使用https
- 单独的作用域范围 单独的运行环境和执行线程
- 不能操作页面DOM，可以通过事件机制来处理
- 事件驱动型服务线程

**实现消息推送**
```js
 self.addEventListener('notificationclick', function (event) {
    console.log(event);
    event.notification.close(); //关闭通知
    event.waitUntil(
        // 获取所有clients
        self.clients.matchAll().then(function (clients) {
            if (!clients || clients.length === 0) {
                return;
            }
            clients.forEach(function (client) {
                // 使用postMessage进行通信
                client.postMessage(action);
                console.log("post a message");
            });
        })
    );
});
Service Worker与client通信
到目前为止，我们已经可以顺利得给用户展示提醒，并且在用户操作提醒后准确捕获到用户的操作。然而，还缺最重要的一步——针对不同的操作，触发不同的交互

 self.addEventListener('notificationclick', function (event) {
    event.waitUntil(
        // 获取所有clients
        self.clients.matchAll().then(function (clients) {
            if (!clients || clients.length === 0) {
                return;
            }
            clients.forEach(function (client) {
                // 使用postMessage进行通信
                client.postMessage(action);
                console.log("post a message");
            });
        })
    );
});
```
**App Shell 模型**
App Shell 架构是构建 PWA 应用的一种方式，它通常提供了一个最基本的 Web App 框架，包括应用的头部、底部、菜单栏等结构。顾名思义，我们可以把它理解成应用的一个「空壳」，这个「空壳」仅包含页面框架所需的最基本的 HTML 片段，CSS 和 javaScript，这样一来，用户重复打开应用时就能迅速地看到 Web App 的基本界面，只需要从网络中请求、加载必要的内容。我们使用 Service Worker 对 App Shell 做离线缓存，以便它可以在离线时正常展现，达到类似 Native App 的体验。


# React 使用的Reconciliation算法
## React渲染机制 Reconcilliation过程 一致化处理过程 协调过程
<img src="https://user-gold-cdn.xitu.io/2019/10/19/16de3834ffcc66f4?imageslim" alt="" title="" /> <br/>

props/state发生改变，render函数返回不同的元素书，新旧DOM树比较对比（diff），针对差异的地方进行更新，最后渲染为真实的dom树，react采用的是虚拟dom

为了获得更优秀的性能， 减少diff过程，如何避免？

采用shouldComponentUpdate生命周期函数

shouldComponentUpdate是会在props/state发生改变变化的时候，返回一个true，表示祖籍安徽重新渲染，从而调用render函数，进行新旧DOM树的diff比对。
shouldComponentUpdATE返回true会更新，false不更新，可以控制shouldComponentUpdate来进行VDOM是否更新
<img src="https://user-gold-cdn.xitu.io/2019/10/19/16de39cf997a808f?imageslim" alt="" title=""/> <br/>

这里 React 的做法非常简单粗暴，直接将 原 VDOM 树上该节点以及该节点下所有的后代节点 全部删除，然后替换为新 VDOM 树上同一位置的节点，当然这个节点的后代节点也全都跟着过来了。

shouldComponentUpdate可以性能优化，避免不必要的Reconciliation过程，性能优秀

PureComponentUpdate 性能优化 如果props//state不更新使用这个组件 props/state发生改变比较

memo方法 raect为函数组件提供了memo方法 将函数传入memo中

```js
function Home() {

}
export default React.memo(Home);
```

### react diff算法
<img src="https://user-gold-cdn.xitu.io/2019/10/19/16de41554a3ff3e2?imageslim" alt="" title=""/> <br/>


# React Immutable数据流  持久处理数据结构的库
## PureComponent/memo 浅层比较 memo  无状态组件 数据量大不适合
## shouldComponentUpdate
## immutable 数据结构 +SCU(memo) 浅层比对 immer重构

immutable是一种利用结构共享形成的持久化数据结构，一旦props/state进行更改 会生成返回一个新的对象，具体点来说，immutable 对象数据内部采用是多叉树的结构，凡是有节点被改变，那么它和与它相关的所有上级节点都更新。

```js
项目中涉及的 immutable 方法
1.fromJS
它的功能是将 JS 对象转换为 immutable 对象。

import {fromJS} from 'immutable';
const immutableState = fromJS ({
    count: 0
});
大家以后会经常在 redux 的 reducer 文件中看到这个 api, 是 immutable 库当中导出的方法。

2. toJS
和 fromJS 功能刚好相反，用来将 immutable 对象转换为 JS 对象。但是值得注意的是，这个方法并没有在 immutable 库中直接导出，而是需要让 immutable 对象调用。比如:

const jsObj = immutableState.toJS ();
3.get/getIn
用来获取 immutable 对象属性。通过与 JS 对象的对比来体会一下：

//JS 对象
let jsObj = {a: 1};
let res = jsObj.a;
//immutable 对象
let immutableObj = fromJS (jsObj);
let res = immutableObj.get ('a');
//JS 对象
let jsObj = {a: {b: 1}};
let res = jsObj.a.b;
//immutable 对象
let immutableObj = fromJS (jsObj);
let res = immutableObj.getIn (['a', 'b']);// 注意传入的是一个数组
4.set
用来对 immutable 对象的属性赋值。

let immutableObj = fromJS ({a: 1});
immutableObj.set ('a', 2);
5. merge
新数据与旧数据对比，旧数据中不存在的属性直接添加，旧数据中已存在的属性用新数据中的覆盖。

let immutableObj = fromJS ({a: 1});
immutableObj.merge ({
    a: 2,
    b: 3
});// 修改了 a 属性，增加了 b 属性
```

immutable-js 使用了另一套数据结构的 API ，与我们的常见操作有些许不同，它将所有的原生对象都会转化成 immutable-js 的内部对象，并且任何操作最终都会返回一个新的 immutable 的值。


## immer 
与 immutable-js 最大的不同，immer 是使用原生数据结构的 API 而不是内置的 API，举个简单例子：
Immer 是 mobx 的作者写的一个 immutable 库，核心实现是利用 ES6 的 proxy，几乎以最小的成本实现了 js 的不可变数据结构，简单易用、体量小巧、设计巧妙，满足了我们对JS不可变数据结构的需求。
无奈网络上完善的文档实在太少，所以自己写了一份，本篇文章以贴近实战的思路和流程，对 Immer 进行了全面的讲解。
```js
const produce = require('immer')

const state = {
  done: false,
  val: 'string',
}

const newState = produce(state, (draft) => {
  draft.done = true
})

console.log(state.done) // false
console.log(newState.done) // true
所有需要更改的逻辑都可以放进 produce 的第二个参数的函数内部，即使给对象内的元素直接赋值，也不会对原对象产生任何影响。

简单介绍完使用之后，下面就开始简单介绍它的内部实现。不过在这之前，想先通过上面的例子简单的发散思考一下。

通过文章最开始的例子我们就能明白，给函数传入一个对象，直接通过“点”操作符对里面的一个属性进行更改是一定会改变外面的结果的。而上面的这个例子中，draft 参数穿入进去，与 state 一样也有 done 这个属性，但是在通过 draft.done 改变值之后，原来的 state.done 并没有发生改变。其实到这里，结合之前研究 vue 源码的经验，我当时就笃定，这里一定用了 Object.defineProperty，draft 通过“点”操作的之后，一些数据的结果被劫持了，然后做了一些新的操作。

immer 原理解析
真正翻开源码，诚然里面确实有 defineProperty 的身影，不过在另一个标准的文件中，用了一种新的方式，那就是 ES6 中新增的 Proxy 对象。而在日常的业务过程中，应该很少有前端工程师会用到 Proxy 对象，因为它的应用场景确实有些狭隘，所以这里简单介绍一下 Proxy 对象的使用。

Proxy 对象接受两个参数，第一个参数是需要操作的对象，第二个参数是设置对应拦截的属性，这里的属性同样也支持 get，set 等等，也就是劫持了对应元素的读和写，能够在其中进行一些操作，最终返回一个 Proxy 对象。

const proxy = new Proxy({}, {
  get(target, key) {
    console.log('proxy get key', key)
  },
  set(target, key, value) {
    console.log('value', value)
  }
})

proxy.info     // 'proxy get key info'
proxy.info = 1 // 'value 1'
上面这个例子中传入的第一个参数是一个空对象，当然我们可以用其他对象有内容的对象代替它。例如维护一份 state 在内部，来判断是否有变化，下面这个例子就是一个构造函数，如果将它的实例传入 Proxy 对象作为第一个参数，就能够后面的处理对象中使用其中的方法：

class Store {
  constructor(state) {
    this.modified = false
    this.source = state
    this.copy = null
  }
  get(key) {
    if (!this.modified) return this.source[key]
    return this.copy[key]
  }
  set(key, value) {
    if (!this.modified) this.modifing()
    return this.copy[key] = value
  }
  modifing() {
    if (this.modified) return
    this.modified = true
    this.copy = Array.isArray(this.source)
      ? this.source.slice()
      : { ...this.source }
  }
}
上面这个构造函数相比源代码省略了很多判断的部分。实例上面有 modified，source，copy 三个属性，有 get，set，modifing 三个方法。modified 作为内置的 flag，判断如何进行设置和返回。

里面最关键的就应该是 modifing 这个函数，如果触发了 setter 并且之前没有改动过的话，就会手动将 modified 这个 flag 设置为 true，并且手动通过原生的 API 实现一层 immutable。

对于 Proxy 的第二个参数，就更加简单了。在这个例子中，只是简单做一层转发，任何对元素的读取和写入都转发到前面的实例内部方法去。

const PROXY_FLAG = '@@SYMBOL_PROXY_FLAG'
const handler = {
  get(target, key) {
    if (key === PROXY_FLAG) return target
    return target.get(key)
  },
  set(target, key, value) {
    return target.set(key, value)
  },
}
这里在 getter 里面加一个 flag 的目的就在于将来从 proxy 对象中获取 store 实例更加方便。

最终我们能够完成这个 produce 函数，创建 store 实例后创建 proxy 实例。然后将创建的 proxy 实例传入第二个函数中去。这样无论在内部做怎样有副作用的事情，最终都会在 store 实例内部将它解决。最终得到了修改之后的 proxy 对象，而 proxy 对象内部已经维护了两份 state ，通过判断 modified 的值来确定究竟返回哪一份。

function produce(state, producer) {
  const store = new Store(state)
  const proxy = new Proxy(store, handler)

  producer(proxy)

  const newState = proxy[PROXY_FLAG]
  if (newState.modified) return newState.copy
  return newState.source
}
这样，一个分割成 Store 构造函数，handler 处理对象和 produce 处理 state 这三个模块的最简版就完成了，将它们组合起来就是一个最最最 tiny 版的 immer ，里面去除了很多不必要的校验和冗余的变量。但真正的 immer 内部也有其他的功能，例如深度克隆情况下的结构共享等等。

性能
性能方面，就用 immer 官方 README 里面的介绍来说明情况。

这是一个关于 immer 性能的简单测试。这个测试使用了 100000 个组件元素，并且更新其中的 10000 个。freeze 表示状态树在生成之后已被冻结。这是一个最佳的开发实践，因为它可以防止开发人员意外修改状态树。

图片描述

通过上图的观察，基本可以得出：

从 immer 的角度来看，这个性能环境比其他框架和库要恶劣的多，因为它必须代理的根节点相对于其余的数据集来说大得多
从 mutate 和 deepclone 来看，mutate 基准确定了数据更改费用的基线，没有不可变性（或深度克隆情况下的结构共享）
使用 Proxy 的 immer 大概是手写 reducer 的两倍，当然这在实践中可以忽略不计
immer 大致和 immutable-js 一样快。但是，immutable-js 最后经常需要 toJS 操作，这里的性能的开销是很大的。例如将不可变的 JS 对象转换回普通的对象，将它们传递给组件中，或着通过网络传输等等（还有将从例如服务器接收到的数据转换为 immutable-js 内置对象的前期成本）
immer 的 ES5 实现速度明显较慢。对于大多数的 reducer 来说，这并不重要，因为处理大量数据的 reducer 可以完全不（或者仅部分）使用 immer 的 produce 函数。幸运的是，immer 完全支持这种选择性加入的情况
在 freeze 的版本中，只有 mutate，deepclone 和原生 reducer 才能够递归地冻结全状态树，而其他测试用例只冻结树的修改部分
写在后面
其实纵观 immer 的实现，核心的原理就是放在了对对象读写的劫持，从表现形式上立刻就能让人想到 vue ，mobx 从核心原理上来说也是对对象的读写劫持，最近有另一篇非常火的文章 -- 如何让 (a == 1 && a == 2 && a == 3) 为 true，也相信不少的小伙伴读过，除了那个肉眼不可见字符的答案，其他答案也算是对对象的读写劫持从而达到目标。

所以说在 JS 中，很多知识相辅相成，有多少种方式能让 (a == 1 && a == 2 && a == 3) 为 true，理论上有多少种答案就会有多少种 MVVM 的组成方式，甚至就有多少种方法能够实现这样的 immutable。所以任何一点点小的知识点的聚合，未来都可能影响前端的发展。
```

Immer 是 mobx 的作者写的一个 immutable 库，核心实现是利用 ES6 的 proxy，几乎以最小的成本实现了 js 的不可变数据结构，简单易用、体量小巧、设计巧妙，满足了我们对JS不可变数据结构的需求。
无奈网络上完善的文档实在太少，所以自己写了一份，本篇文章以贴近实战的思路和流程，对 Immer 进行了全面的讲解。

数据处理存在的问题
先定义一个初始对象，供后面例子使用： 首先定义一个currentState对象，后面的例子使用到变量currentState时，如无特殊声明，都是指这个currentState对象

let currentState = {
  p: {
    x: [2],
  },
}
复制代码
哪些情况会一不小心修改原始对象？

// Q1
let o1 = currentState;
o1.p = 1; // currentState 被修改了
o1.p.x = 1; // currentState 被修改了
 
// Q2
fn(currentState); // currentState 被修改了
function fn(o) {
  o.p1 = 1;
  return o;
};
 
// Q3
let o3 = {
  ...currentState
};
o3.p.x = 1; // currentState 被修改了
 
// Q4
let o4 = currentState;
o4.p.x.push(1); // currentState 被修改了
复制代码
解决引用类型对象被修改的办法
深度拷贝，但是深拷贝的成本较高，会影响性能；
ImmutableJS，非常棒的一个不可变数据结构的库，可以解决上面的问题，But，跟 Immer 比起来，ImmutableJS 有两个较大的不足：
需要使用者学习它的数据结构操作方式，没有 Immer 提供的使用原生对象的操作方式简单、易用；
它的操作结果需要通过toJS方法才能得到原生对象，这使得在操作一个对象的时候，时刻要注意操作的是原生对象还是 ImmutableJS 的返回结果，稍不注意，就会产生意想不到的 bug。
看来目前已知的解决方案，我们都不甚满意，那么 Immer 又有什么高明之处呢？

immer功能介绍
安装immer
欲善其事必先利其器，安装 Immer 是当前第一要务

npm i --save immer
复制代码
immer如何fix掉那些不爽的问题
Fix Q1、Q3

import produce from 'immer';
let o1 = produce(currentState, draft => {
  draft.p.x = 1;
})
复制代码
Fix Q2

import produce from 'immer';
fn(currentState);
function fn(o) {
  return produce(o, draft => {
    draft.p1 = 1;
  })
};
复制代码
Fix Q4

import produce from 'immer';
let o4 = produce(currentState, draft => {
  draft.p.x.push(1);
})
复制代码
是不是使用非常简单，通过小试牛刀，我们简单的了解了 Immer ，下面将对 Immer 的常用 api 分别进行介绍。

概念说明
Immer 涉及概念不多，在此将涉及到的概念先行罗列出来，阅读本文章过程中遇到不明白的概念，可以随时来此处查阅。

currentState
被操作对象的最初状态

draftState
根据 currentState 生成的草稿状态，它是 currentState 的代理，对 draftState 所做的任何修改都将被记录并用于生成 nextState 。在此过程中，currentState 将不受影响

nextState
根据 draftState 生成的最终状态

produce 生产
用来生成 nextState 或 producer 的函数

producer 生产者
通过 produce 生成，用来生产 nextState ，每次执行相同的操作

recipe 生产机器
用来操作 draftState 的函数

常用api介绍
使用 Immer 前，请确认将immer包引入到模块中

import produce from 'immer'
复制代码
or

import { produce } from 'immer'
复制代码
这两种引用方式，produce 是完全相同的

produce
备注：出现PatchListener先行跳过，后面章节会做介绍

第1种使用方式：
语法：
produce(currentState, recipe: (draftState) => void | draftState, ?PatchListener): nextState

例子1：

let nextState = produce(currentState, (draft) => {
 
})
 
currentState === nextState; // true
复制代码
例子2：

let currentState = {
  a: [],
  p: {
    x: 1
  }
}
 
let nextState = produce(currentState, (draft) => {
  draft.a.push(2);
})
 
currentState.a === nextState.a; // false
currentState.p === nextState.p; // true
复制代码
由此可见，对 draftState 的修改都会反应到 nextState 上，而 Immer 使用的结构是共享的，nextState 在结构上又与 currentState 共享未修改的部分，共享效果如图(借用的一篇 Immutable 文章中的动图，侵删)：

自动冻结功能
Immer 还在内部做了一件很巧妙的事情，那就是通过 produce 生成的 nextState 是被冻结（freeze）的，（Immer 内部使用Object.freeze方法，只冻结 nextState 跟 currentState 相比修改的部分），这样，当直接修改 nextState 时，将会报错。 这使得 nextState 成为了真正的不可变数据。

例子：

let nextState = produce(currentState, (draft) => {
  draft.p.x.push(2);
})
 
currentState === nextState; // true
复制代码
第2种使用方式
利用高阶函数的特点，提前生成一个生产者 producer

语法：
produce(recipe: (draftState) => void | draftState, ?PatchListener)(currentState): nextState

例子：

let producer = produce((draft) => {
  draft.x = 2
});
let nextState = producer(currentState);
复制代码
recipe的返回值
recipe 是否有返回值，nextState 的生成过程是不同的：
recipe 没有返回值时：nextState 是根据 recipe 函数内的 draftState 生成的；
recipe 有返回值时：nextState 是根据 recipe 函数的返回值生成的；

let nextState = produce(
  currentState, 
  (draftState) => {
    return {
      x: 2
    }
  }
)
复制代码
此时，nextState 不再是通过 draftState 生成的了，而是通过 recipe 的返回值生成的。

recipe中的this
recipe 函数内部的this指向 draftState ，也就是修改this与修改 recipe 的参数 draftState ，效果是一样的。
注意：此处的 recipe 函数不能是箭头函数，如果是箭头函数，this就无法指向 draftState 了

produce(currentState, function(draft){
  // 此处，this 指向 draftState
  draft === this; // true
})
复制代码
patch补丁功能
通过此功能，可以方便进行详细的代码调试和跟踪，可以知道 recipe 内的做的每次修改，还可以实现时间旅行。

Immer 中，一个 patch 对象是这样的:

interface Patch {
  op: "replace" | "remove" | "add" // 一次更改的动作类型
  path: (string | number)[] // 此属性指从树根到被更改树杈的路径
  value?: any // op为 replace、add 时，才有此属性，表示新的赋值
}
复制代码
语法：

produce(
  currentState, 
  recipe,
  // 通过 patchListener 函数，暴露正向和反向的补丁数组
  patchListener: (patches: Patch[], inversePatches: Patch[]) => void
)
 
applyPatches(currentState, changes: (patches | inversePatches)[]): nextState
复制代码
例子：

import produce, { applyPatches } from "immer"
 
let state = {
  x: 1
}
 
let replaces = [];
let inverseReplaces = [];
 
state = produce(
  state,
  draft => {
    draft.x = 2;
    draft.y = 2;
  },
  (patches, inversePatches) => {
    replaces = patches.filter(patch => patch.op === 'replace');
    inverseReplaces = inversePatches.filter(patch => patch.op === 'replace');
  }
)
 
state = produce(state, draft => {
  draft.x = 3;
})
console.log('state1', state); // { x: 3, y: 2 }
 
state = applyPatches(state, replaces);
console.log('state2', state); // { x: 2, y: 2 }
 
state = produce(state, draft => {
  draft.x = 4;
})
console.log('state3', state); // { x: 4, y: 2 }
 
state = applyPatches(state, inverseReplaces);
console.log('state4', state); // { x: 1, y: 2 }
复制代码
state.x的值4次打印结果分别是：3、2、4、1，实现了时间旅行， 可以分别打印patches和inversePatches看下，

patches数据如下：

[
  {
    op: "replace",
    path: ["x"],
    value: 2
  },
  {
    op: "add",
    path: ["y"],
    value: 2
  },
]
复制代码
inversePatches数据如下：

[
  {
    op: "replace",
    path: ["x"],
    value: 1
  },
  {
    op: "remove",
    path: ["y"],
  },
]
复制代码
可见，patchListener内部对数据操作做了记录，并分别存储为正向操作记录和反向操作记录，供我们使用。

至此，Immer 的常用功能和 api 我们就介绍完了。

接下来，我们看如何用 Immer ，提高 React 、Redux 项目的开发效率。

用immer优化react项目的探索
首先定义一个state对象，后面的例子使用到变量state或访问this.state时，如无特殊声明，都是指这个state对象

state = {
  members: [
    {
      name: 'ronffy',
      age: 30
    }
  ]
}
复制代码
抛出需求
就上面定义的state，我们先抛一个需求出来，好让后面的讲解有的放矢：
members 成员中的第1个成员，年龄增加1岁

优化setState方法
错误示例
this.state.members[0].age++;
复制代码
只所以有的新手同学会犯这样的错误，很大原因是这样操作实在是太方便了，以至于忘记了操作 State 的规则。

下面看下正确的实现方法

setState的第1种实现方法
const { members } = this.state;
this.setState({
  members: [
    {
      ...members[0],
      age: members[0].age + 1,
    },
    ...members.slice(1),
  ]
})
复制代码
setState的第2种实现方法
this.setState(state => {
  const { members } = state;
  return {
    members: [
      {
        ...members[0],
        age: members[0].age + 1,
      },
      ...members.slice(1)
    ]
  }
})
复制代码
以上2种实现方式，就是setState的两种使用方法，相比大家都不陌生了，所以就不过多说明了，接下来看下，如果用 Immer 解决，会有怎样的烟火？

用immer更新state
this.setState(produce(draft => {
  draft.members[0].age++;
}))
复制代码
是不是瞬间代码量就少了很多，阅读起来舒服了很多，而且更易于阅读了。

优化reducer
immer的produce的拓展用法
在开始正式探索之前，我们先来看下 produce 第2种使用方式的拓展用法:

例子：

let obj = {};
 
let producer = produce((draft, arg) => {
  obj === arg; // true
});
let nextState = producer(currentState, obj);
复制代码
相比 produce 第2种使用方式的例子，多定义了一个obj对象，并将其作为 producer 方法的第2个参数传了进去；可以看到， produce 内的 recipe 回调函数的第2个参数与obj对象是指向同一块内存。
ok，我们在知道了 produce 的这种拓展用法后，看看能够在 Redux 中发挥什么功效?

普通reducer怎样解决上面抛出的需求
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      const { members } = state;
      return {
        ...state,
        members: [
          {
            ...members[0],
            age: members[0].age + 1,
          },
          ...members.slice(1),
        ]
      }
    default:
      return state
  }
}
复制代码
集合immer,reducer可以怎样写
const reducer = (state, action) => produce(state, draft => {
  switch (action.type) {
    case 'ADD_AGE':
      draft.members[0].age++;
  }
})
复制代码
可以看到，通过 produce ，我们的代码量已经精简了很多；
不过仔细观察不难发现，利用 produce 能够先制造出 producer 的特点，代码还能更优雅：

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'ADD_AGE':
      draft.members[0].age++;
  }
})
复制代码
好了，至此，Immer 优化 reducer 的方法也讲解完毕。

Immer 的使用非常灵活，多多思考，相信你还可以发现 Immer 更多其他的妙用！


# 项目目录搭建
- 路由配置
- 公共组件
- redux




