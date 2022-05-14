//call, apply, bind都可以动态指定普通函数中this的指向
// 区别：
// 1. call和apply：都会使函数执行，但是参数不同
// 2. bind：不会使函数执行，参数同call

//1. call: 参数为列表的形式
function sayHi() {
    console.log(this);
}
let user = {
    name: '小明',
    age: 18
}

let student = {
    name: '小红',
    age: 16
}
//调用函数并指定this的值
sayHi.call(user);   //this改为user
sayHi.call(student);//this改为student

function counter(x, y) {
    return x + y;
}
//调用counter 函数，并传入参数
let result = counter.call(null, 5, 10);
console.log(result);
// { name: '小明', age: 18 }
// { name: '小红', age: 16 }
// 15

//2. apply
// 普通函数
function sayHi() {
    console.log(this);
}

let user = {
    name: '小明',
    age: 18
}

let student = {
    name: '小红',
    age: 16
}

// 调用函数并指定 this 的值
sayHi.apply(user); // this 值为 user
sayHi.apply(student); // this 值为 student

// 求和函数
function counter(x, y) {
    return x + y;
}

// 调用 counter 函数，并传入参数
let result = counter.apply(null, [5, 10]);
console.log(result);
// { name: '小明', age: 18 }
// { name: '小红', age: 16 }
// 15

//3. bind: 不会调用函数，而是创建了一个指定了this值的新函数
  // 普通函数
function sayHi() {
    console.log(this);
}

let user = {
    name: '小明',
    age: 18
}

// 调用 bind 指定 this 的值
let sayHello = sayHi.bind(user);

// 调用使用 bind 创建的新函数
sayHello(); // { name: '小明', age: 18 }

