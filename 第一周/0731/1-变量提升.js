/*
 * 全局作用域（栈内存）
 *   1.变量提升
 *     var a;    
 *   2.代码执行 
 */
// console.log(a); //=>undefined
// var a = 12;
// a = 13;
// console.log(a); //=>13


/*
 * 全局作用域（栈内存）
 *   1.变量提升
 *        
 *   2.代码执行 
 */
// console.log(a); //=>Uncaught ReferenceError: Cannot access 'a' before initialization 在JS中上一行代码报错，下面的代码都不会再去执行了
// let a = 12;
// a = 13;
// console.log(a);

/*
 * 全局作用域（栈内存）
 *   1.变量提升
 *   2.代码执行 
 */
// console.log(a); //=>Uncaught ReferenceError: a is not defined
// a = 13; //=>window.a=13;
// console.log(a);


var b = 14;
console.log(b);
console.log(window.b);