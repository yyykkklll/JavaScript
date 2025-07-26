// 引入 fetch（Node.js 环境）
import fetch from 'node-fetch';

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json()) // 解析为JSON
    .then(data => console.log(data.name)) // 打印用户姓名
    .catch(error => console.error("请求失败：", error));