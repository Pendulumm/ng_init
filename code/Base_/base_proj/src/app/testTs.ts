// ts是强类型语言

// class User {
//     age: number = 111;

//     f1() {
//         // this.age = null;
//         Array()
//     }
// }
//
// ------------------------------------------------------------------------------------------------
//
// 类成员的访问修饰符
// class User {
//     private age: number = 20;

//     public setAge(age: number) {
//         if (age < 18 || age > 60) {
//             console.log('非法的年龄');

//         } else {
//             this.age = age;
//         }

//     }
//     public getAge() {
//         return this.age;
//     }
// }

// let user = new User();
// // user.age = 18;
// // user.age = -2; // 类成员不应该让外界随意赋值
// // console.log(user.age);
// user.setAge(123);
// user.getAge();

// class Emp {
//     protected ename: string;
//     protected salary: number;
//     constructor(ename: string, salary: number) {
//         this.ename = ename;
//         this.salary = salary;
//     }
//     // getEname() {
//     //     return this.ename;
//     // }
// }
// class Coder extends Emp {
//     private lang: string;
//     constructor(ename: string, salary: number, lang: string) {
//         super(ename, salary);
//         this.lang = lang;
//     }
//     public printInfo() {
//         console.log('员工的姓名', this.ename);
//         console.log('员工的工资:', this.salary);
//         console.log('擅长的语言:', this.lang);
//     }
// }

// let coder = new Coder('coder', 10000, 'java');
// // coder.ename = 'tom';
// // coder.salary = 8000;
// // coder.lang = 'sql';
// coder.printInfo();
// // coder.ename = 'tom';

// ------------------------------------------------------------------------------------------------
//
// 类成员的访问修饰符的特殊用法
//
// class Student {
//     // private sname: string;

//     // constructor(sname: string) {
//     //     this.sname = sname;
//     // }

//     // 等价于上面
//     constructor(private sname: string) {

//     }

//     // add(private age: number) { //A parameter property is only allowed in a constructor implementation

//     // }
// }

// let student = new Student('Tom');



//
//
// ------------------------------------------------------------------------------------------------
//
// 使用接口

//
// 要求小汽车必须提供start 和 stop 两个方法
//

// interface Runnable {
//     start(): void;  // 接口中的方法没有主体
//     stop(): void;
// }


// class Car implements Runnable {

//     start() {
//         console.log('汽车在启动');

//     }
//     stop() {
//         console.log('汽车停止');
//     }
// }



//
//
//
//
// ------------------------------------------------------------------------------------------------
// 