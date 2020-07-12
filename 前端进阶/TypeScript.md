# TS
TS1.5之前版本： module关键字既可以称作内部模块，也可以称作外部模块
TS1.5及之后的版本： 内部模块module关键字，就是命名空间，相当于namespace X{...} 外部模块对于js来说就是一个整体的模块

不太推荐使用命名空间

```ts
module Math {
    export function add(x,y) {...}
}
```
ts1.5
```ts
namespace Math {
    export function add(x,y) {...}
}
```
# null和undefined是其他类型（包括void）的子类型，可以复制给基本类型 数值类型

tsconfig.json
默认情况下，编译器会提示错误，这是因为 tsconfig.json 里面有一个配置项是默认开启的
```ts
// tsconfig.json 

{
 	 /* Strict Type-Checking Options */
    "strict": true,                           /* Enable all strict type-checking options. */
    // "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
    // 对 null 类型检查，设置为 false 就不会报错了
    // "strictNullChecks": true,              /* Enable strict null checks. */
    // "strictFunctionTypes": true,           /* Enable strict checking of function types. */
    // "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
    // "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
    // "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
    // "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
}
```

strictNullChecks
参数用于新的严格空检查模式，在严格空检查模式下，null 和 undefined 值都不属于任何一个类型，它们只能赋值给自己这种类型或者 any


# viod和never
- void 表示没有任何类型 没有返回值 可以被赋值null和undefined
- never 永远都不会执行 永远不存在的值 不包含值的类型
- void 返回值类型的函数可以正常运行 而never返回值的函数无法正常返回，无法中止会抛出异常的

# 元组越界问题
```ts
let aaa: [string, number] = ['aaa', 5];
// 向元组添加元素不会报错
arr.push(6);
console.log(aaa) // ['aaa', 5, 6]
// 打印元组不会报错
console.log(arr[2]);
// 打印添加的元组会报错  error

```
# 枚举成员的特点 enum
- 是只读属性， 无法修改
- 枚举成员默认值从0开始递增， 可以自定义设置初始值
```ts
enum Color {
    red = 1,
    green = 2
}
console.log(Color.red) // 1
// 自定义初始值
console.log(Color)
{'1': 'red', '2': 'green'};
```
- 枚举成员值
  - 可以没有初始值
  - 可以是对一个常量成员的引用
  - 可以是一个常量表达式
  - 也可以是一个非常量表达式
```ts
enum Enum {
    // const member 常量成员 在编译阶段被计算出结构
    a,  // 没有初始值
    b = Enum.a, // 对常量成员的引用
    c= 1+2, // 常量表达式

    // 计算成员 computed member 表达式保留在程序的执行阶段
    d = Math.random(),
    e = '123'.length,
    // 紧跟在计算成员后端的枚举成员必须有初始值
    f = 6,
    g
}
```
# 常量枚举和普通枚举的区别
# 枚举的使用场景
# 可索引类型接口
# 函数类型接口
# 类类型接口
# 混合类型接口
# 函数重载
# 访问控制修饰符
# 重写和重载
# 继承和多态
# 泛型
# 类型谓词
# 可选链运算符的使用
# 非空断言符的使用
# 空值合并运算符的使用
# typeof class 和class作为类型的区别
# TS的never类型具体作用
# 使用联合类型的时候 类型未确定的情况下 默认只会从中获取共有的部分
# what's on version 3.3.3333
# 全局环境中，不能给某些变量声明类型
```ts
let name: string;
export {}
// 加了export就不会报错
```
# 模块的引入导出
# 使用as替代尖括号断言
# 如何对JS文件进行类型检查