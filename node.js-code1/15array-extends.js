
var arr1 = ['a', 'b'];

var arr2 = new Array('a', 'b');

// console.log(arr2);

var arr3 = new Array(2, 3);

// console.log(arr3);

// 创建新数组
var arr4 = Array.of(2, 3, 4);

// console.log(arr4);

var arr = ['a', 'b', 'c'];

// arr.forEach(function (val, key) {
//     console.log(key, val);
// });

// var res = arr.find(function (val, key) {
//     // console.log(key, val);
    
//     return val > 'a';
// });

// console.log(res);

var k = arr.findIndex(function (val, key) {
    // console.log(1);

    return val > 'a';
});

console.log(k);


