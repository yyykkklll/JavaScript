// let p1 = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("满任务");
//     }, 2000)
// })
//
// let p2 = new Promise(resolve => {
//     setTimeout(() => {
//         console.log("快任务");
//     }, 1000)
// })
//
// Promise.race([p1, p2]).then(result => {
//     console.log(result);
// });

let promise = Promise.resolve(1);
promise.then(result => {
    console.log(result);
    return result + 1;
}).then(result => {
    console.log(result);
    return result + 1;
}).then(result => {
    console.log(result);
    return result + 1;
}).then(result => {
    console.log(result);
})
