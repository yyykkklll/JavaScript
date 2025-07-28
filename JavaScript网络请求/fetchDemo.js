fetch("http://httpbin.org/get")
    .then(response => response.json())
    .then(data => {
        if (data && data.headers) {
            console.log(data.headers);
        } else {
            console.log("返回数据格式不符合预期", data);
        }
    })
    .catch(error => console.error("请求失败:", error));


