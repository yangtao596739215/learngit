~function () {
    //1.新添加了 只有一个参数并为数组的情况
    //2.大量if使用三木运算符简写代码
    //3.变量定义使用单行书写
    function sslice() {
        let a = arguments.length, x = this.length;
        //有切只有一个参数并为数组的情况
        if (a == 1 && arguments[0].__proto__ == [].__proto__) {
            arguments[0] = 0;
        }
        let n = Number(arguments[0]), m = Number(arguments[1]);
        //判断参数个数 赋予作用域参数的初始值 n代表开始位置 m代表结束位置

        if (arguments.length == 0) {
            n = 0;
            m = x;
        } else {
            //判断第一位 并赋值
            if (isNaN(n) && isNaN(m)) {
                return [];
            }
            isNaN(n) ? n = 0 : null;
            //判断第二位 并赋值
            //isNaN(m) &&!isNaN(n)? m = x : null;
             if(isNaN(m) &&!isNaN(n)){
                 return [];
             }else if(isNaN(m)){
                m = x;
             }
        }
        //超过两个参数报错
        //数组处理
        let firstindex = parse(n, x), lastindex = parse(m, x), result = [], arrindex = 0;
        //循环赋值
        for (let i = firstindex; i < lastindex; i++) {
            result[arrindex++] = this[i];
        }
        //返回结果
        return result;
    }
    /* parse(x,y) 数字处理的方法 
       parameter x 被处理的数字
       parameter y 数组长度*/
    //将参数进行转化 当参数小于0 绝对值大于长度数组长度 则为0 如果相反 则等于长度加上该负数
    //如果该数大于数组长度 则为数组长度
    function parse(x, y) {
        if (x < 0) {
            Math.abs(x) > y ? x = 0 : x = y + x;
        }
        x > y ? x = y : null;
        return x;
    }
    Array.prototype.slice = sslice;
}();