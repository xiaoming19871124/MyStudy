// 获取http模块
const http = require('http');

// 创建服务
const server = http.createServer(function(req, res) {
    console.log("url: " + req.url);

    // 设置返回格式
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf8' });
    res.write('<h2>Node.js</h2>')

    // 结束会话
    res.end();

});
// 开启监听
server.listen(8081);
console.log('Server running at http://127.0.0.1:8081/');