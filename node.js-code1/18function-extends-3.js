
// function fn() {

// }

// var fn = function () {}

// 名字
// 参数
// 返回值

// ES6中提供了一种新的定义函数的方法
// 具名
// let fn = (arg) => {
//     console.log(arg);
//     console.log('我是箭头函数!')
// };

// fn('测试');

setTimeout(() => {
    console.log('匿名函数');
}, 2000);


// 简写
var bar = () => 'hello';
// 相当地
// var bar = () => {return 'hello'};

console.log(bar());