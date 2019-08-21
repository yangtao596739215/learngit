/* let obj = {
	name: '吴振宇',
	age: 21,
	GF: null
};
console.log("name" in obj); //=>TRUE  
console.log("GF" in obj); //=>TRUE  
console.log("BF" in obj); //=>FALSE
// [PROPERTY] in [OBJECT] 验证当前属性是否属于这个对象   hasOwnProperty? */

/*
 * 全局作用域
 *   1.变量提升  
 *     不管条件是否成立都要进行变量提升
 *     var a;  //=>创建一个全局变量a  =>window.a
 *   2.代码执行
 */
// console.log(a); //=>undefined
// if (!('a' in window)) { //=>'a' in window  =>TRUE
// 	var a = 13;
// }
// console.log(a); //=>undefined

/*
 * 全局作用域
 *   1.变量提升  
 *     但是做函数的有特殊性：在老版本浏览器中，确实不论条件是否成立，函数也是提前声明或者定义的，但是新版本浏览器中，为了兼容ES6严谨的语法规范，条件中的函数在变量提升阶段只能提前声明，不能提前定义
 *     function fn;
 *   2.代码执行
 */
// console.log(fn); //=>undefined
// // fn(); //=>Uncaught TypeError: fn is not a function
// if ('fn' in window) { //=>TRUE
// 	// 条件成立，进来后的第一件事是给FN赋值，然后在代码执行
// 	fn(); //=>"哈哈哈"
// 	function fn() {
// 		console.log('哈哈哈');
// 	}
// }
// fn(); //=>"哈哈哈"


/*
 * 全局作用域
 *   1.变量提升 
 *   2.代码执行
 */
f = function () {return true;}  //=>window.f=...
g = function () {return false;}
~function () {
	/*
	 * 函数执行会形成一个私有作用域
	 *   1.变量提升  function g;
	 *   2.代码执行
	 */
    if (g() && [] == ![]) { //=>Uncaught TypeError: g is not a function
        f = function () {return false;}
        function g() {return true;}
    }
}();
console.log(f());
console.log(g());

//=> 自执行函数：前面加的（）或者！、-、~、+只有一个目的，让语法符合而已
//=> 自执行函数本身不进行变量提升（没名字）
// (function(n){})(10);
// ~function(n){}(10);
// -function(n){}(10);
// !function(n){}(10);
// +function(n){}(10);