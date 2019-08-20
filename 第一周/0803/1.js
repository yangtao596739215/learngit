/*
 * 全局作用域
 *   变量提升  var a;  function fn(){...};
 *   代码执行
 */
// console.log(a); //=>undefined
// var a = 12;

// function fn() {
// 	/*
// 	 * 全新的私有作用域（私有的执行上下文）
// 	 *    形参赋值 & 变量提升   var a; 
// 	 *    代码执行
// 	 */
// 	console.log(a); //=>undefined
// 	var a = 13;
// }
// fn();
// console.log(a); //=>12

/*
 * 变量提升（全局） 
 *    var a;
 *    function fn(){...};
 */
// console.log(a); //=>undefined
// var a = 12;
// function fn() {
// 	/*
// 	 * 形参赋值 & 变量提升（私有） 
// 	 */
// 	console.log(a); //=>12
// 	a = 13; //=>把全局的a赋值13
// }
// fn();
// console.log(a); //=>13

/*
 * 变量提升（全局） 
 *    function fn(){...};
 * 
 * 在全局作用域下，带VAR/FUNCTION声明的全局变量相当于给WINDOW设置了对应的属性（即是全局变量也是属性），不带VAR等声明的只是给WINDOW设置了对应的属性，如果使用的是LET/CONST声明的，只是全局变量，没有给WINDOW设置属性的.
 */
// console.log(a); //=>ReferenceError：a is not defined
// a = 12;
// function fn() {
// 	console.log(a);
// 	a = 13;
// }
// fn();
// console.log(a);

/*
 * 变量提升（全局） 
 *    function fn(){...};
 * 
 * LET/CONST等是不进行变量提升的
 */
// console.log(1); //=>1
// console.log(a); //=>Uncaught ReferenceError: Cannot access 'a' before initialization
// let a = 12;
// function fn() {
// 	/*
// 	 * 词法解析
// 	 *   已经知道了在当前私有栈中有一个“LET A”,此时的私有栈中出现的A都是私有的
// 	 * 形参赋值 & 变量提升 
// 	 */
// 	console.log(a); //=>Uncaught ReferenceError: Cannot access 'a' before initialization
// 	let a = 13;
// }
// fn();
// console.log(a);
//=>在当前作用域下（全局、私有、块作用域），如果创建变量使用的是LET/CONST等，一定不能在创建代码的前面使用这些变量，否则会报错：ReferenceError: Cannot access 'a' before initialization

/*
 * LET所在的大括号是一个块作用域（私有作用域） 
 */
// if (1 === 1) {
// 	var a = 12; //=>没有块作用域，还是全局下的a
// 	let b = 13; //=>有块作用域，是私有块中的b
// }
// console.log(a); //=>12
// console.log(b); //=>Uncaught ReferenceError: b is not defined


/*
 * 全局变量提升
 *   var foo;
 *   function bar...; 
 */
// var foo=1; 
// function bar(){
// 	/*
// 	 * 私有栈变量提升&形参赋值
// 	 *   var foo; （不管条件是否成立都要进行变量提升） 
// 	 */
//     if(!foo){//=>!undefined =>true
//         var foo=10; 
//     }
//     console.log(foo); 
// }
// bar();

// let foo = 1;
// function bar() {
// 	if (!foo) { //=>!1 =>false
// 		/*
// 		 * 块作用域
// 		 *    foo是块中私有的 
// 		 */
// 		let foo = 10;
// 	}
// 	// 不能使用块中私有的foo，找自己私有作用域中的（没有则往全局找）
// 	console.log(foo); //=>1
// }
// bar();

// let foo = 1;
// function bar() {
// 	if (foo) {
// 		let foo = 10;
// 		console.log(foo); //=>10
// 	}
// 	console.log(foo); //=>1
// }
// bar();

// let n = 12;
// ~ function () {
// 	// 作用域A
// 	if (1) {
// 		// 作用域B
// 		let n = 13;
// 	}
// 	console.log(n); //=>12
// }();

// let n = 12;
// ~ function () {
// 	let n = 0;
// 	if (1) {
// 		n = 13;
// 	}
// 	console.log(n); //=>13
// }();
// console.log(n); //=>12


/*
 * 变量提升
 *   var a;  var b;  var c;
 *   function test...;  
 */
// var a=10,b=11,c=12;
// function test(a){
// 	/*
// 	 * 形参赋值 & 变量提升
// 	 *   a=10;
// 	 *   var b; 
// 	 */
//      a=1; 
//      var b=2;
// 	 c=3; //=>C是全局的
// 	 console.log(a,b,c);//=>1 2 3
// }
// test(10);
// console.log(a);  
// console.log(b);   
// console.log(c);

/*
 * 不管条件是否成立都要进行变量提升
 *   var a;  //=>全局下声明一个a也相当于给window.a  =>'a' in window =>true
 */
// if (!("a" in window)) {
// 	var a = 1;
// }
// console.log(a); //=>undefined


/*
 *  arguments是函数内置的实参集合（箭头函数中没有arguments）：不管是否定义了形参，也不管传递了多少实参，arguments中包含所有传递的实参信息（类数组集合）
 *  
 *  全局变量提升
 *     var a;
 *     function b...;
 */
// var a = 4;
// function b(x, y, a) {
// 	/*
// 	 * 形参赋值
// 	 *   x=1
// 	 *   y=2
// 	 *   a=3 
// 	 * 在JS非严格模式下，ARGUMENTS和形参存在映射关系（一个改都会跟着变）
// 	 */
// 	// console.log(arguments); //=>{0:1,1:2,2:3,length:3...}
// 	console.log(a); //=>3
// 	arguments[2] = 10; //=>把传递的第三个实参值改为10，所以形参a也跟着改为10
// 	console.log(a); //=>10
// }
// a = b(1, 2, 3); //=>a=b执行的返回结果（只看RETURN）  =>a=undefined
// console.log(a); //=>undefined

// 开启JS语法的严格模式（ES6或者平时开发，我们一般都基于严格模式）
// 严格JS模式下ARGUMENTS和形参的映射机制就切断了
// "use strict";
// function b(x, y, a) {
// 	arguments[2] = 10; //=>{2:10...}
// 	console.log(a); //=>3
// }
// b(1, 2, 3);

//=================
// 逻辑或|| 和 逻辑与&& 在赋值操作中的意义
// A||B ：先验证A的真假，如果A为真，返回的是A的值，如果A为假返回的是B的值
// A&&B ：A为真返回B的值，A为假返回A的值
// &&的优先级高于||
/* let a = 0 || false;
console.log(a); //=>FALSE
a = 1 || false;
console.log(a); //=>1
a = 1 && 100;
console.log(a); //=>100
a = 0 && 100;
console.log(a); //=>0
a = 0 || 1 && 2 || 3; //=>先算1&&2  =>0||2||3  =>再算0||2 =>2 =>最后2||3 =>2
console.log(a); //=>2 */

/* function fn(x, callback) {
	// => typeof x === 'undefined' ? x = 0 : null;
	x = x || 0;

	// callback代表回调函数（传递的是个函数）：我们需要保证它是一个函数才能执行
	// typeof callback === 'function' ? callback() : null;
	callback && callback();
}
fn();
fn(10);
fn(10, function () {}); */

// var foo = 'hello';
// (function (foo) {
// 	/*
// 	 * 形参赋值 & 变量提升
// 	 *   foo = "hello" 
// 	 */
// 	console.log(foo); //=>"hello" 
// 	var foo = foo || 'world';
// 	console.log(foo); //=>"hello" 
// })(foo); //=>把全局的FOO的值"HELLO"作为实参传递给函数的形参
// console.log(foo); //=>"hello" 


// var i = 10;
// function fn() {
//     return function (n) {
//         console.log(n + (++i));
//     }
// }
// var f = fn();
// f(20);
// fn()(20);
// fn()(30);
// f(30);

/*
 * var test = 自执行函数执行的返回结果
 *    自执行函数执行
 *    test = AF0（小函数）
 */
// var test = (function (i) {
// 	/*
// 	 * 形参赋值&变量提升
// 	 *   i = 2
// 	 */
// 	// return AF0（小函数）;
// 	return function () {
// 		// 传递的5没用（我们没有形参）
// 		alert(i *= 2);//=>i=i*2 =>i=2*2=4  "4"
// 	}
// })(2);
// test(5);


// var a = 1;
// var obj = {
// 	"name": "tom"
// }; //=>obj=AF0
// function fn() {
// 	// 形参赋值&变量提升  var a2;
// 	var a2 = a; //=>a2=1
// 	obj2 = obj; //=>window.obj2=AF0
// 	a2 = a; //=>a2=1
// 	obj2.name = "jack"; //=>AF0堆中的name='jack'
// }
// fn();
// console.log(a); //=>1
// console.log(obj);//=>{name:'jack'}


/*
 * 变量提升
 *   var a;  1
 *   function fn...; 
 */
// var a = 1;
// function fn(a) {
// 	/*
// 	 * 形参赋值
// 	 *    a = 1;
// 	 * 变量提升 
// 	 *    var a; （无效）
// 	 *    function a = AF0; （声明无效，但是需要给a赋值为函数）
// 	 * 
// 	 * a=function...  AF0
// 	 */
// 	console.log(a); //=>函数
// 	var a = 2; //=>a=2 私有a赋值为2
// 	function a() {}
// 	console.log(a); //=>2
// }
// fn(a); //=>把全局A的值1当做实参传递给FN

/*
 * 变量提升
 *    fn = AF3（函数是输出3的）
 */
// fn(); //=>3
// function fn(){console.log(1);}
// fn(); //=>3
// function fn(){console.log(2);}
// fn(); //=>3
// var fn=10; //=>fn = 10
// fn(); //=>Uncaught TypeError: fn is not a function
// function fn(){console.log(3);}
// fn();

/*
 * let vs var
 *    1.let没有变量提升（但是在词法解析阶段也得知某个变量是否是私有变量）
 *    2.let不允许在相同的作用域下重复声明
 *    3.let解决了JS中的暂时性死区问题
 *    4.let创建的全局变量没有给window设置对应的属性 
 *    5.let会产生块级作用域
 *    ....
 */