function sayHello(callback) {
  console.log("-----------------");
  callback();
}

function callback() {
  console.log("Hello, callback!");
}
sayHello(callback);
