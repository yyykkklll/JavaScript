// 1. 最简单形式
const sayHello = ()=>console.log('Hello, JavaScript!');

// 2. 带参数
const add = (a,b)=>{console.log(a+b);};

// 3. 单行简写（隐式返回）
const mul = (a,b)=>a*b;
console.log(mul(2,3));
// 4. 单个参数时省略括号
const squre = x=>x*x;
console.log(squre(3));
