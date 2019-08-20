// var a = 12;
// var a = 13;
// console.log(a); //=>13

// let a = 12;
// let a = 13; //=>Uncaught SyntaxError: Identifier 'a' has already been declared
// console.log(a);


/*
 * 全局作用域（栈内存）
 *   1.变量提升
 *   2.代码执行 
 */
// console.log(1); //=>这行代码就已经不会执行了
// let a = 12;
// console.log(a);
// let a = 13;  //=>Uncaught SyntaxError: Identifier 'a' has already been declared
// console.log(a);

// console.log(1); //=>1
// console.log(a); //=>Uncaught ReferenceError: Cannot access 'a' before initialization
// let a = 12;

// //=>所谓重复是：不管之前通过什么办法，只要当前栈内存中存在了这个变量，我们使用let/const等重复再声明这个变量就是语法错误
// console.log(a);
// var a = 12;
// let a = 13; //=>Uncaught SyntaxError: Identifier 'a' has already been declared
// console.log(a);


fn();
function fn(){ console.log(1); }
fn();
function fn(){ console.log(2); }
fn();
var fn = function(){ console.log(3); }
fn();
function fn(){ console.log(4); }
fn();
function fn(){ console.log(5); }
fn();