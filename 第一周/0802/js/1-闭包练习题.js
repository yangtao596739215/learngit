var i = 20;

function fn() {
	i -= 2;
	return function (n) {
		console.log((++i) - n);
	}
}
var f = fn();
f(1);
f(2);
fn()(3);
fn()(4);
f(5);
console.log(i);