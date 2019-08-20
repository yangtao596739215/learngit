/*
 * THIS是函数执行的主体（谁执行的） 
 *    THIS是谁和函数在哪创建的或者在哪执行的都没有必然的联系
 * 
 * 掌握几条分清执行的主体的规律
 * 	  1.给元素的某个事件绑定方法，当事件触发方法执行的时候，方法中的THIS是当前操作的元素
 *    2.方法执行，看方法前面是否有点，有点，点前面是谁THIS就是谁，没有点THIS是WINDOW（在严格模式下没有点THIS是UNDEFINED  =>"use strict"）
 *    3.在构造函数模式执行中，函数体中的THIS是当前类的实例
 */
/* document.body.onclick = function () {
	//this:BODY
} */
/* function fn() {
	console.log(this);
}
let obj = {
	fn: fn
};
fn();//=>this:window
obj.fn();//=>this:obj */
/* 
function Fn() {
	// this:f这个实例
	this.name = 'xxx';
}
let f = new Fn();
console.log(f.name); */

//====================================
/* var fullName = 'language';
var obj = {
	fullName: 'javascript',
	prop: {
		getFullName: function () {
			return this.fullName;
		}
	}
};
console.log(obj.prop.getFullName());
//=>this:obj.prop  =>return obj.prop.fullName  =>undefined
var test = obj.prop.getFullName;
console.log(test());
//=>this:window  =>return window.fullName  =>"language" */

/* var name = 'window';
var Tom = {
	name: "Tom",
	show: function () {
		console.log(this.name);
	},
	wait: function () {
		// this:Tom  
		var fun = this.show; 
		//=>Tom.show

		fun();
		//=>this:window  =>console.log(window.name)  =>"window"
	}
};
Tom.wait(); */



/* window.val = 1;
var json = {
	val: 10,
	dbl: function () {
		this.val *= 2;
	}
}
json.dbl();
//=>this:json  =>json.val *= 2  =>json.val=20

var dbl = json.dbl;
dbl();
//=>this:window  =>window.val *= 2  =>window.val=2

json.dbl.call(window);
//=>this:window（基于call方法改的）  =>window.val=4

alert(window.val + json.val);
//=>"24" */


/* var val = 1;
var json = {
	val: 10,
	dbl: function () {
		// 上级作用域（栈不是堆），所以是全局作用域
		val *= 2; //=>全局val=2
	}
};
json.dbl();
alert(json.val + val); //=>"12" */

/* var val = 1;
var json = {
	val: 10,
	dbl: function () {
		//this:json
		this.val *= 2; //=>json.val=20
	}
};
json.dbl();
alert(json.val + val); //=>"21" */


var num = 10;
var obj = {num: 20};
obj.fn = (function (num) {
    this.num = num * 3;
    num++;
    return function (n) {
        this.num += n;
        num++;
        console.log(num);
    }
})(obj.num);
var fn = obj.fn;
fn(5);
obj.fn(10);
console.log(num, obj.num);