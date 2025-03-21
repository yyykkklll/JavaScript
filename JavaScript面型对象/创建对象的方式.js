// 第一种方式 直接const创建对象
const person = {
  name: "kelong",
  age: 23,
  hello: function () {
    console.log("你好，我是" + this.name);
  },
};

console.log(person.name);
person.hello();

// 第二种方式 new Object()创建对象
const person2 = new Object();
person2.name = "jiagui";
person2.age = 23;
person2.hello = function () {
  console.log("你好，我是" + this.name);
};

console.log(person2.name);
// person2.hello();

// 第三种方式 构造函数创建对象
function Student(name, score) {
  this.name = name;
  this.score = score;
  this.hello = function () {
    console.log("你好，我是" + this.name + "我的分数是" + this.score);
  };
}

// 第四种方式 使用Obiect.creat()创建对象
const animial = {
  eat: function () {
    console.log("animial吃东西");
  },
};

const dog = Object.create(animial);
dog.berk = function () {
  console.log("dog汪汪叫");
};

dog.eat = function () {
  console.log("dog吃东西");
};

dog.eat();
dog.berk();

// 第五种方式 class

class Student_05 {
  constructor(name, age, score) {
    this.name = name;
    this.age = age;
    this.score = score;
  }
  sayHello() {
    console.log(
      "你好，我是" + this.name,
      "我的年龄是" + this.age,
      "我的分数是" + this.score
    );
  }
}

stu2 = new Student_05("科龙", 23, 99);
stu2.sayHello();

