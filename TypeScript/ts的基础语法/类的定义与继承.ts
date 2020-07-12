class Person {
    name='dell';
    getName() {
        return this.name;
    }

}
// 类的继承
class Teacher extends Person {
    getTeacherName() {
        return 'dell';
    }
    // 重写父类的方法
    getName() {
        // person的父类 super.getName()
        return super.getName()+'lee'
    }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName())