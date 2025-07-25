let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        if (success) {
            resolve("操作成功!");
        } else {
            reject("操作失败!");
        }
    })
});

promise.then(result => {
    console.log(result);
})

promise.catch(err => {
    console.log(err);
})
