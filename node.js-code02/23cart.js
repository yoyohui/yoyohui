
// 在 Nodejs 中以 .js 结尾的文件称为一个模块

console.log('我是以.js结尾的模块');

// 仅仅以 .js 结尾不能完全意义上称为一个模块
// 只是 Nodejs 将其对待成了模块

// 做为开发需要真正对功能进行封装，并能够提供给其它开发
// 者调用

let version = '1.0.0';

function addCart() {
    // 假设通过 addCart 添加购物车
    console.log('添加成功');
}

function deleteCart() {
    // 假设通过 deleteCart 删除购物车
}

function modifyCart() {
    // 假设通过 modifyCart 删除购物车
}

// 仅仅将方法定义不行，还得将这些函数公开出去
// 使用 return 不合语法，Nodejs 新增了一个专
// 门负责将模块内部函数或变量公开的对象 module.exports

// var module = {};

// module.exports = {};

// module.exports.addCart = addCart;
// module.exports.deleteCart = deleteCart;
// module.exports.modifyCart = modifyCart;

// module.exports.abc = version;

// 模块的返回值就是 module.exports

// 在Nodejs 中除了使用 module.exports 外
// 又提供了一个 exports 来实现与 module.exports 类似的功能

// exports = module.exports

// exports.addCart = addCart;
// exports.deleteCart = deleteCart;
// exports.modifyCart = modifyCart;

// exports.abc = version;

// 重新赋值了与module.exports 无关了，所以也不能将模块内的数据
// 分开给外部了
exports = {
    addCart: addCart,
    deleteCart: deleteCart,
    modifyCart: modifyCart,
    abc: version
}