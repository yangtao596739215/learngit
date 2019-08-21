/* document.body.onclick = function () {
	// this:document.body
	fn();//=>this:window
}

var obj={
	aa:fn
};

function fn(){
	console.log(this);
}
fn();//=>window
obj.aa();//=>this:obj */

/* 
 * 代码执行
 *   第一步：创建obj
 *   第二步：创建堆存储值
 *       1.属性名fn
 *       2.属性值:自执行函数执行的返回结果给fn（返回的小函数）
 *   第三步：obj和值关联
 */
/* let obj = {
	fn: (function () {
		// this:window
		return function () {
			console.log(this);
		}
	})()
};
obj.fn(); //=>this.obj
let fn = obj.fn; //=>把小函数给fn
fn(); //=>this:window */