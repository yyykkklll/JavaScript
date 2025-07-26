import fetch from 'node-fetch';

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json()
    console.log(data.name)
  } catch (error) {
    console.error("请求失败：", error)
  }
}
fetchData()