let p1 = Promise.resolve("p1执行完成!");
let p2 = new Promise(resolve => {
    setTimeout(() => resolve("p2执行完成!"), 200)
});
let p3 = Promise.resolve("p3执行完成!");

Promise.all([p1, p2, p3]).then(
    function (result) {
        for (let i = 0; i < result.length; i++) {
            console.log("第" + (i + 1) + "个 Promise 的结果:", result[i]);
        }
    }
).catch(err => {
    console.log(err);
})
