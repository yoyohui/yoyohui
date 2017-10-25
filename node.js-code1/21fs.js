
// 通过系统模块 fs 可以实现目录及文件的操作（增、删、改、查）

let fs = require('fs');

// mkdir 可以支持两个参数
// 第1个目录名称
// 第2个回调函数
fs.mkdir('test', (abc) => {
    // 如果有错误，abc 为一个对象
    // 描述了错误的原因
    // 如果没有错 abc 为 null
    // console.log(abc);
});

// 
fs.writeFile('./test/aa.html', '<h1>hello Node！</h1>', (err) => {
    // console.log(err)
    if(!err) {
        console.log('文件创建成功!');
    }
});