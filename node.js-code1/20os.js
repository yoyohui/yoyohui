

// 在NodeJS 中对很多常用的功能进行了封装
// 我们将这些封装好的“东西”叫成 模块
// 

// 有很多模块随 NodeJS 的安装，被自动安装好了
// 称为系统模块，常见的系模块有 fs path http os ...
// 

// OS 模块封装了读取系统信息的功能

// 要想使用 OS 模块，需要使用 require 先将其引入

// require 需要传入系统模块名称，并且会得到一个返回值
let os = require('os');

// console.log(os);

// console.log(os.hostname());

// console.log(os.cpus());

// console.log(os.userInfo());