async function fetchData() {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve("数据获取成功")
        }, 2000)
    })
    let res = await promise;
    console.log(res);
}

fetchData()

async function fetchMultiple() {
    let p1 = new Promise(resolve => {
        setTimeout(() => {
            resolve("p1执行完毕!")
        }, 2000)
    })
    let p2 = new Promise(resolve => {
        setTimeout(() => {
            resolve("p2执行完毕")
        }, 3000)
    })
    let promise = await Promise.all([p2, p1])
    console.log(promise)
}

fetchMultiple()