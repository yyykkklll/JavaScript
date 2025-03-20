document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // 这里添加登录逻辑
    console.log('用户名:', username);
    console.log('密码:', password);
    
    // 示例：简单的验证
    if(username === 'yankelong' && password === '0000') {
        alert('登录成功！');
        window.location.href = 'blog.html'; // 登录成功后跳转到博客页面
    } else {
        alert('用户名或密码错误！');
    }
});