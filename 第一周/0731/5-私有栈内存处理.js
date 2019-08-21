/* console.log(a, b);
var a = 12,
	b = 12;

function fn() {
	console.log(a, b);
	var a = b = 13;
	console.log(a, b);
}
fn();
console.log(a, b); */


/* console.log(a, b, c);
var a = 12,
	b = 13,
	c = 14;

function fn(a) {
	console.log(a, b, c);
	a = 100;
	c = 200;
	console.log(a, b, c);
}
b = fn(10);
console.log(a, b, c); */

/* function sum(a) {
	console.log(a);
	let a = 100; //=>Uncaught SyntaxError: Identifier 'a' has already been declared
	console.log(a);
}
sum(200); */


/* var ary = [12, 23];
function fn(ary) {
	console.log(ary);
	ary[0] = 100;
	ary = [100];
	ary[0] = 0;
	console.log(ary);
}
fn(ary);
console.log(ary); */


/* var i = 0;
function A() {
	var i = 10;
	// 函数X是在A的私有作用域中创建的
	function x() {
		console.log(i);
	}
	return x;
}
var y = A(); //=>y=x
y();
function B() {
	var i = 20;
	y();
}
B(); */

var i = 5;
function fn(i) {
    return function (n) {
        console.log(n + (++i));
    }
}
var f = fn(1);
f(2); //=>4
fn(3)(4); //=>8
fn(5)(6); //=>12
f(7); //=>10
console.log(i); //=>5