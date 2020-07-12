# 原型链
```js
function person() {
    this.name=name
}
person.prototype.age=10
const p = new person()
```
构造函数
prototype __proto__

prototype:原型对象 共享构造函数的属性和方法，可以扩展对象的属性和方法，任何函数对象都有prototype这个原型对象
__proto__ 任何对象都有__proto__这个属性，通过这个属性指针向上查找，指向了这个对象的原型，这个对象的原型也通过这个指针往上查找，一直找到Object对象，Object指向null 这个属性组成的链就叫做原型链  原型链的最顶端是null，往下查找就是Object对象

# 构造函数
和普通函数一样 构造函数是 只要能通过new来调用的就是 构造函数

箭头函数不可以作为构造函数

# new的实现原理
- 创建一个空对象obj，分配内存空间
- 从参数列表获取构造函数 并将obj的obj__proto__属性指向构造函数的prototype
- 通过apply来执行构造 将当前的this的指向改为obj
- 返回构造函数的执行结果或者当前的obj对象

```js
function new(fn) {
    let obj ={}
    obj.__proto__=fn.prototype;
    var res = fn.apply(obj,arguments);
    if(typeof res === 'function' || typeof res==='object') {
        return res;
    } else {
        return obj;
    }
}

function person() {
    this.name='www'
}
let p = new(person)
console.log(p.name)
```

# typeof和instanceof的区别

**js的基本数据类型**

Number，String，Boolean，Null，Undefined，BigInt，Symbol

**js的对象类型/引用类型**

## typeof 判断基础数据类型 返回值的类型有number string boolean null function undefined symbol object

```js
let a=1  // number
let a1='1' // string
let a3=true // bolleab
let a4=undefined // undefined
let a5=symbol // symbol
let a6 ={} // object
console.log(typeof(a),typeof(a1),typeof(a2)....)
```

## instanceof判断该对象是否是目标的实例，根据原型链__proto__向上查找，是否处于原型链中，通过instanceof可以判断一个实例是否是其父类或者祖先类型的实例

```js
function person() {
    this.name=name
}
console.log(person instanceof person)
// false
```
person函数的原型链
person.__proto__=>Function.prototype.__proto__=>Object.__proto__=>null
在原型链上找不到person

# 数据类型

- 原始数据类型： Null Undefined String Number Boolean BigInt Symbol
- Object对象类型，也称为引用类型： function object array date regexp

# js基本数据类型和引用类型在内存上的区别

基本数据类型：存储在栈中，基本数据类型大小是固定的，存储在栈中，可以快速查找，占用的内存小

引用类型：存储在堆内存中，引用类型的大小是不固定的，存储在堆内存中，大小不固定，灵活的读取，栈内存中存储着堆中的内存地址

我们查找对象是从栈中查找，基本对象是对于它的值进行操作，对于引用类型 对于其引用地址进行操作

```js
var name='xiaoming'
var name1 = name; // 值拷贝
var obj={age:10};
var obj1 = obj // 引用地址的拷贝，所有两个对象指向同一个内存地址

```
<img src="https://user-gold-cdn.xitu.io/2020/2/23/1707148374e5c7ef?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="" />

**函数的传参是传值还是传引用呢**



函数传参： 函数参数传递的是值，无论是基本类型还是引用类型，在栈中存储的是遗传内存地址，所以也是一个值



# NaN 非数，代表非数字的特殊值，用于表示某个数字非数值

NaN是Number的静态属性

```js
typeof(NaN) // number
NaN==NaN// false NaN和任何数比较都是NaN

```
判断一个值是否是NaN

```js
function isNaN(n) {
    let x= number(n)
    return x !== x;
}
```
# null为什么不是object

**null是基本数据类型，原因是js的底层是以二进制格式实现的，采用的是三位数表示数据类型，对象是000，null也是000所以错误的判断成了object**

```js
typeof(null) // object
null instanceof Object // false

```

如歌判断一个值是否是null

```js
function isNull(n) {
    if(!a && typeof(a) ==='object') {
        return true;
    }
    return false;
}

console.log(isNull(0)) // false
console.log(isNull(null)) // true

```

# 包装对象：便于基本类型调用对象的方法

**包装对象：String，Number，Boolean**

可以与实例对象进行自动转换，可以把原始类型的值包装成对象，在字符串调用函数的时候，js引擎会将原始类型的值转换成只读的包装对象，执行完函数后就销毁

# class和function

class是一个语法糖，本质是基于原型链，class语义化和编码方式更加符合面向对象的思维

function可以使用call apply bind的方式去改变执行上下文，class不可以

# 继承
# 作用域链机制
**作用域**
作用域就是变量和函数可访问范围，当前变量和函数所处的执行上下文，词法作用域就是当前变量和函数定义和执行的区间

**ES6之前分为：函数作用域和全局作用域**

**全局作用域：浏览器下就是window，顶级作用域，作用域链的顶级就是window**

**函数作用域，在函数体内声明的变量，参数，作用域都在函数体内**

**作用域链：就是在当前作用域查找变量定义的初始值，函数在执行时会创建一个执行上下文，在执行上下文中，顺着一直往上查找，查找到同名的属性，这就是作用域链**

```js
var a=10;
function fn() {
    var b=20;
    function bar() {
        console.log(a+b);
        // a一直往上找，直到最高级就找到了
    }
    return bar;
}
b=200;
var x=fn();
fn();
```
**执行上下文分为两个阶段：解释阶段和执行阶段**

解释阶段：词法分析-》语法分析-》作用域规则确定 定义变量 

执行阶段：创建执行上下文->执行函数代码-》垃圾回收


# let var const 区别

var: 解析器在对js解析，将脚本扫描一遍，将变量的声明提前到代码块的顶部，var声明的变量，全局变量，变量提升

let const： 不存在变量提升 块级作用域， 解决了变量提升的问题， 暂时性死区

# 数据属性和访问属性Object.defineProperty

**数据属性（数据描述符）**

- [[Configurable]]:表示能否通过delete删除属性从而定义属性，能否修改属性的特性，能否把属性修改为访问器的属性
- [Enumerable]]:能否通过for-in循环返回属性
- [[Writable]]: 表示能否修改属性的值
- [[Value]]： 包括各个属性的值

数据属性可以直接定义，var p={name:'xxx'},相关属性都为true，使用Object.defineProperty()修改属性方法

```js
var p ={
    name:'html'
}
// 劫持对象的值
Object.defineProperty(p,'name', {
    value:'xxx'
})
p.name='css'
console.log(p.name) // css
Object.defineProperty(p, 'name', {
    writable:false,
    value:'agian'
})
p.name='css'
console.log(p.na,e) // agian
```
设置writable：flase 不可以修改
configurable:true可以重新赋值 enumerable默认为false

**访问器属性（存取描述符）**

访问器属性不包含数据值 没有value双属性，有**get**和**set**属性，通过两个属性去定义读和写，数据劫持和拦截器

-[[Configurable]]:表示可以通过delete删除属性重新定义，可以修改属性的特性 默认false
- [[Enumerable]]: 通过for-in去循环遍历返回属性 默认false
- [[Get]]: 在读取属性时调用的函数 默认undefined
- [[Set]]: 写入属性调用的函数 默认undefined

- 访问属性不能直接定义，需要通过Object.defineProperty()定义
- 根据get set的特性，实现对象代理，vue实现数据的劫持

**数据属性和访问属性都有Configurable和Enumerable属性**

```js
var p= {
    name:''
}
Object.defineProperty(p, 'name', {
    get:function() {
        return 'dddd'
    }
    set:function(val) {
        return 'ghjk' +val;
    }
})

p.name='kll'
console.log(p.name) // dddd
```

# toString和valueOf: 继承Object的对象可以重写方法 隐式转换 对象的原始值

**js不同于其他语言，两个不同的数据类型都可以进行四则运算和判断，归功于隐式转换**

```js
1+'1' // 11
2*'3' // 6
```

重写函数

```js
let obj = function() {
    this.toString=()=> {
        return 'i am obj'
    }
    this.valueOf=()=> {
        return 99;
    }
}
let n = new obj()
console.log(n+'abc') // 99abc
console.log(n*10) // 990
```

**当两个函数同时存在的时候，会先调用valueof，如果返回的不是原始类型，则调用toString方法，如果toString方法返回的不是原始数据类型报错 TypeError:Cannot convert object to primitive value**

```js
let o = function() {
    this.toString() {
        console.log('info toString')
        return {'string:':'sss'}
    }
    this.valueOf() {
        console.log(;info valueOf);
        return{'val':99}
    }
}
let n=new O()
console.log(n+'xx')
// info
// can not convert object to primitive value
```

# 箭头函数是否有arguments对象

**arguments是一个类数组对象，可以获取到多个参数的个数和参数列表数组，对于不定参数的函数可以使用arguments获取参数**

**array.slice.call(arguments)**

**浏览器没有arguments参数列表**

```js
let aa = function(...args) {
    let b = [].slice.call(arguments,0)
    let a = arguments[0]
}
aa(1)

// 报错
let aa = (...args=> {
    let b = [].slice.call(arguments,0)
    let a = arguments[0]
}
aa(1)
```

**node.js有arguments，可以获取参数长度**



# 精度丢失问题 0.1+0.2 = 0.300000000000004
**js是采用二进制存储的，会出现无限循环，由于位数限制-2^53-1~2^53-1 会隔断截断，当相加后，会换算成十进制**

**如何避免：(0.1*100+0.2*100)/100=0.3**

number-precision 开源工具



# toFixed四舍五入  math.round()四舍五入 math.floor向下取整 Math.ceil()向上取整
```js
(1.235).toFixed(2) // "1.24" 正确
(1.355).toFixed(2)   // "1.35" 错误

// 使用 Math.round 可以四舍五入的特性，把数组放大一定的倍数处理
function round(number, precision) {
    return Math.round(+number + 'e' + precision) / Math.pow(10, precision);
}

// toFixed 小数点保留n位

(1.378).toFixed(2) // 1.38
```

# 进制转化

**十进制转其他进制**
```js
Number.toString([2,38,10,16])
```

**其他进制转10进制**

```js
Number.parseInt('1101110',[2,8,10,16])
```

其他进制互相转换可以先转成10进制

# js处理二进制

ArrayBuffer:来表示通用的，固定长度的原始二进制数据缓存区，作为内存区域，可以存放多种类型的数据，不能直接读写

试图 view TypedArray和Data试图
视图

Blob 存放二进制的容器 fileReader进行转换


# 异步有哪些解决方案
- 回调函数：通过嵌套调用实现
- Generator：异步任务的容器，生成器本质上是一种特殊的迭代器，Generator执行后返回了一个指针，调用对象里的next方法，移动内部指针，分段执行Generator函数，指向yeild语句，返回一个对象{value:当前对象的执行结果，done：是否继续执行结束}
- Promise：promise一部，代码冗余，通过then的方法处理异步，手动调用promise.then方法
- co：把Generator和Promise封装 自动执行
- async/await：babel webpack  基于generator+promise封装 语义浩，可以像普通函数一样调用
# Generator:异步任务容器，核心是暂停函数执行，然后从上次暂停的地方继续执行 yield是关键字
**执行Generator函数会返回一个迭代器对象，会返回一个指针，这个指针会第哦啊用next方法，next会返回value和done属性，移动内部指针指向yield鱼鱼，执行他的值，返回一个对象结果，没有return语句返回的是undefined**
```js
let go = function* (x) {
    console.log('1',x)
    let a = yield x*2;
    console.log('2',a)
}
let g = go(10)
let val = g.next();
while(!val.done) {
    val = g.next(val.value)
}
console.log(val)
```
# Promise：pending fufilled rejected 单项不可以改变 Promise,then(onFulfilled,onRejectd)
# co库的执行原理
co利用promise特性 将Generator包裹在promise里 循环执行next方法 通过then.resolve调用
```js
function co(gen) {
    return new Promise(function(resolve, reject) { // 最外层是一个 Promise 对象
      if (typeof gen === 'function') gen = gen.apply(ctx, args);
      if (!gen || typeof gen.next !== 'function') return resolve(gen);
  
      onFulfilled();
  
      function onFulfilled(res) {
        var ret;
        try {
          ret = gen.next(res); // 将上一步的返回值传递给 next
        } catch (e) {
          return reject(e);
        }
        next(ret); // 将上一步执行结果转换成 promise
        return null;
      }
  
      /**
       * Get the next value in the generator,
       * return a promise.
       *
       * @param {Object} ret
       * @return {Promise}
       * @api private
       */
  
      function next(ret) {
        if (ret.done) return resolve(ret.value); // done为true，就表示执行结束，resolve结果出去
        var value = toPromise.call(ctx, ret.value); // toPromise 是个工具函数，将对象转换成 promise，可以理解返回的 value 就是 promise
        if (value && isPromise(value)) return value.then(onFulfilled, onRejected); // then 函数执行回调 onFulfilled
        return onRejected(new TypeError('You may only yield a function, promise, generator, array, or object, ' // 异常处理
          + 'but the following object was passed: "' + String(ret.value) + '"'));
      }
    });
  }
```
# 事件循环event loop
# 模块化
# 闭包
# 垃圾回收机制
**对象需要占用内存，内存资源有限的，js会周期性的对不是哟个的对象销毁，释放内存，对象没有被引用，几个对象形成循环引用，根访问不到，所以可以回收**

**标记清除和引用计数**

**标记清除法：垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记，，然后去掉环境中的变量以及被环境中的变量引用的标记**

从根开始计算引用数 哪个没有引用就销毁

**引用计数：：每个值都标记一个次数，被其他变量引用就+1，如果循环引用可以-1，变量引用释放，-1**


# 严格模式
通过在脚本的最顶端放上一个特定语句 "use strict"; 整个脚本就可开启严格模式语法。
严格模式下有以下好处：

消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
消除代码运行的一些不安全之处，保证代码运行的安全；
提高编译器效率，增加运行速度；
为未来新版本的Javascript做好铺垫。

如以下具体的场景：

严格模式会使引起静默失败(silently fail,注:不报错也没有任何效果)的赋值操作抛出异常
严格模式下的 eval 不再为上层范围(surrounding scope,注:包围eval代码块的范围)引入新变量
严格模式禁止删除声明变量
在严格模式中一部分字符变成了保留的关键字。这些字符包括implements, interface, let, package, private, protected, public, static和yield。在严格模式下，你不能再用这些名字作为变量名或者形参名。
严格模式下 arguments 和参数值是完全独立的，非严格下修改是会相互影响的

# map和weakMap set和weakSet
map的key可以是任意类型，在map里，存放key和value，一一对应，在map操作的时候，内部会遍历数组，数组一直遍历会引用每个键和值没办法被垃圾回收，导致内存泄漏

weakMap弱引用，键值必须是对象，对象的弱引用，

```js
const weaks = new WeakMap()
const obj ={}
weaks.set(obj,37)
// 当o1对象被回收 weakMap的值也会被释放

```


# String和Array的 高阶函数
**String**
- split(): 分割成字符串数组
- slice() : 提取字符串的一部分 返回新的数组 不包含第二个下标  不会改动原字符串
- subString(): 返回一个字符串在开始索引到结束索引之间的子集

**Array**

- slice() 返回新的数组 start,end 不包含end 原数组不会改变
- splice() 通过删除替换现有元素  改变原数组
- push 返回新的长度 改变数组
- pop() 删除 改变
- shift() 删除第一个元素 改变原数组
- unshift() 添加开头 改变数组




# 判断数组的方法
- Array.isArray()
- obbj instanceof Array
- obj.constructor === Array
- Object.prototype.toString.call(obj)==='[Object Array]' toString返回表示该对象的字符串，如果没有被重写覆盖 返回[Object,type]
# 循环的几种方式
- for
- for of
- for in
- for Each
- map
- reduce
```js
const sleep = time => new Promise(res => setTimeout(res, time))
async function ff(){
    let aa = [1,2,3]
    let pp = await aa.reduce(async (re,val)=>{
        let r = await re;
        await sleep(3000)
        r += val;
        return Promise.resolve(r)
    },Promise.resolve(0))
    console.log(pp) // 6
}
ff()

```
# 扩展运算符和剩余运算符
# 线程和进程
# 函数编程
# 尾递归优化 调用
**递归函数：函数内部循环的时候i，调用自身的就是递归函数，函数没有执行完，执行栈会保存变量，占用内存 爆栈，所有使用尾递归**

**尾递归：在函数的最后一步就是调用函数，进入下一个函数不需要上一个函数的环境，内存空间)(1)，尾递归，释放外层函数的调用栈**
```js
function add1(arr) {
    if (arr.length === 0) {
        return 0
    }
    return add1(arr.slice(1)) + arr[0] // 还有父级函数中 arr[0] 的引用
}

function add(arr, re) {
    if (arr.length === 0) {
        return re + 0
    } else {
        return add(arr.slice(1), arr[0] + re) // 仅仅是函数调用
    }
}

console.log(add([1, 2, 3, 4], 0))  // 10
console.log(add1([1, 2, 3, 4])) // 10


```
# 观察者模式 发布-订阅模式的区别
两者都是订阅通知的模式：区别在于
观察者模式： 观察者和订阅者相互知道 高耦合 设计
发布-订阅： 通过一个订阅中心来交互
<img src="https://user-gold-cdn.xitu.io/2020/2/23/170714948516ec93?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="" />

# WebSocket

WebSocket是应用层协议，基于tcp，与HTTP协议都是位于应用层。，TCP/IP的上层

<img src="https://user-gold-cdn.xitu.io/2020/2/23/170714914277ef0f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" alt="" />

HTTP协议是单向通信协议，只有客户端发起HTTP请求，服务端才会返回数据。而WebSocket是双向通信协议，建立连接，客户端和服务器都可以主动向对方发送或接受数据



# 变量类型
==与===
== 值相等
=== 值和类型都要相等

== 隐式类型转换，不是严谨的判断左右两边是否相等，优先比较数据类型是否相等
不相等，进行隐式类型转换，转换为数值再进行比较








