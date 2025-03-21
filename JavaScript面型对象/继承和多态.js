// ES6 class实现继承
class animial {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(this.name + "吃东西");
  }
}

class cat extends animial {
  constructor(nane, color) {
    super(nane);
    this.color = color;
  }
  meow() {
    console.log(this.name + "喵喵叫");
  }
}

cat1 = new cat("小猫", "白色");
cat1.eat();
cat1.meow();

// 原型链实现继承
