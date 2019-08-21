/* console.log(a);
var a = 12;
var b = a;
b = 13;
console.log(a); //=>12 */

/* console.log(sum(10, 20));
function sum(n, m) {
	return n + m;
}
 */

//  函数表达式方式，由于使用VAR来创建SUM，变量提升阶段只会声明变量，不会赋值，所以此时函数在前面执行，函数是没有值的，不能执行（真实项目中这种方式最常用，因为它操作严谨）
console.log(sum); //=>undefined
// sum(10, 20); //=>Uncaught TypeError: sum is not a function
var sum = function (n, m) {
	return n + m;
};
// let sum=(n,m)=>n+m;
console.log(sum(10, 20));