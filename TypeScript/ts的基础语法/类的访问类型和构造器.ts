// private,protected, public 访问类型
// public 公有属性和方法 子类可以访问父类所有的属性方法 允许类的内外被调用
// private和protected 子类不可以访问 类的内外不可以调用 允许在类内使用
//  private不可以在子类使用 protected可以使用
// constructor
class Person {
  public name: string;
  protected age?:number;
  public sayHi() {
    this.name;
    console.log("hi");
  }
  private sayABC() {
      this.sayHi();
  }
}

class Teacher extends Person {
    public sayBye() {
        this.age;
        return 'bye';
    }
}


// person类的外部
const person = new Person();
person.name = "dell";
console.log(person.name);
person.sayHi();


class People {
    //传统写法 private name: string;
    // new了一个实例会自动执行
    // public name:string;
    // constructor(name:string) {
    //    this.name=name
    // }
    constructor(public name: string) {
        // this.name=name;
    }
}
const p = new People('dell');
console.log('constructor',p.name);

class Student extends People {
    // 构造器
    constructor(public age:number) {
        // 子类和父类都有构造器的时候，需要向父类传一个name属性
        // 当父类为空的时候 super();
        super('dell')
    }
}
const student = new Student(28)
console.log(student.age);
console.log(student.name);