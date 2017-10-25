
// 通过系统模块创建http服务器
let http = require('http');

// 通过 createServer 可以创建服务器实例
let server = http.createServer();

// 通过 listen 监听一个端口
server.listen(3000);

// 通过事件监听来处理请求和响应 request
// 通过 on 来实现事件的监听
server.on('request', (req, res) => {

    // 通过 req 来处理请求
    // 通过 res 来处理响应
    
    // 响应 由状态行、响应头、响应主体构成
    // 通过 writeHead() 来设置状态行和响应头
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=UTF-8'
    });

    // 通过 write 来设置响应主体，允许执行多次
    res.write('你好 nodejs 呀！dfasdfads');

    // 终止响应
    res.end();
});