// class Person {
//     constructor(private _name:string) {
//         // getter setter方法 可以访问属性
//         // 私有属性 所以使用get 类内可以访问到私有属性， 调用这个方法
//     }
//     get name() {
//         return this._name
//     }
//     set name(name:string) {
//         const realName = name.split('')[0]
//         this._name=name;
//     }
// }
// const person = new Person('dell');
// console.log(person.name);
// person.name='dell lee'
// console.log(person.name);

// 设计模式 单例模式  只允许一个类永远只能生成这个类的唯一实例
class Demo {
    // 存储demo
  private static instance: Demo;
  private constructor(public name:string) {}
  // 把这个方法挂载到类上
  static getInstance() {
    if(!this.instance) {
        // 创建一个实例 会往constructor穿
        this.instance= new Demo(name);
    }
    return this.instance
  }
}
const demo1 = Demo.getInstance(); // 返回唯一的实例 创建新的实例
const demo2 = Demo.getInstance();
