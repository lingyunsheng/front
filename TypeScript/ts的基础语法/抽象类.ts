// readonly 只能读
// class Person {
//     // private _name:string;
//     public readonly name:string;
//     constructor(name:string) {
//         this.name=name;
//     }
//     // get name() {
//     //     return this._name;
//     // }
// }
// const person = new Person('dell');
// person.name='hello';
// console.log(person.name);

// 抽象类
// abstract class Geom {
//     // 抽象类封装方法
//     // 定义抽象的方法或者具体的实现
//     // 抽象类只能被继承 不可以被new
//     width:number;
//     getType() {
//         return 'Gemo';
//     }
//     abstract  getArea(): number;
// }

// // 继承抽象类
// class circle extends Geom {
//     getArea() {
//         return 123;
//     }
// }

// class Square {

// }

// class Triangle {

// }
interface Person {
    name: string
}
interface Teacher extends Person{
    teachAge:3
}

interface Student extends Person{
    age:number
}

const teacher = {
    name:'dell'
}
const student = {
    name:'lee',
    age:18
}
const getUserInfo = (user:Person) => {
  console.log(user.name);
};

getUserInfo(teacher);
getUserInfo(student);
