// console.log(a); //=>Uncaught ReferenceError: a is not defined
// console.log(typeof a); //=>"undefined"  这是浏览器的BUG，本应该是报错的，因为没有a（暂时性死区）

console.log(typeof a); //=>Uncaught ReferenceError: Cannot access 'a' before initialization
let a;