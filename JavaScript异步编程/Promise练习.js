function asyncTask() {
    return new Promise((resolve, reject) => {
        // 自定义执行器函数 模拟异步处理
        setTimeout(() => {
            const success = Math.random();
            if (success > 0.5) {
                resolve(`执行成功，Value:${success}`);
            } else {
                reject(`执行失败，Value:${success}`);
            }
        })
    })
}

asyncTask().then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})
