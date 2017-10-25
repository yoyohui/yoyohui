
// 函数的解构赋值
function sayHi(name, age, ...gender) {
    console.log(name);
    console.log(age);
    console.log(gender);
}

// sayHi('小明', 16, '男');

sayHi('小红', 16, ' 女', 98);
