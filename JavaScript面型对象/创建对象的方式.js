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
