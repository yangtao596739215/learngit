~function(){
    function sslice(n,m){
        let x = this.length;
        //判断参数个数 赋予作用域参数的初始值 n代表开始位置 m代表结束位置
        // if(arguments.length==0){
        //     n = 0;
        //     m = x;
        // }
        //判断第一位
        if(isNaN(Number(arguments[0]))){
            n = 0;
        }else{
            n = Number(arguments[0]);
        }
        //判断第二位
        if(isNaN(Number(arguments[1]))){
            m = x;
        }else{
            m = Number(arguments[1])+1;
        }
        //超过两个参数报错
        if(arguments.length>2){
            throw new Error("The number interval of new sslice parameters is [0,2].");
        }
        //数组处理
        let firstindex = parse(n,x);
        let lastindex = parse(m,x);
        let result = [];
        let arrindex = 0
        //循环赋值
        for (let i = firstindex; i < lastindex; i++){
            result[arrindex++]=this[i];   
        }
        //返回结果
        return result;
    }
    /* parse(x,y) 数字处理的方法 
       parameter x 被处理的数字
       parameter y 数组长度*/
    //将参数进行转化 当参数小于0 绝对值大于长度数组长度 则为0 如果相反 则等于长度加上该负数
    //如果该数大于数组长度 则为数组长度
    function parse(x,y){
        if(x<0){
            Math.abs(x)>y?x=0:x=y+x;
        }
        x>y?x=y:null;
        return x;
    }
    Array.prototype.slice = sslice;
}();

    let array = [1,2,3,4,5,6,7,8,9,0]
    let newary = array.slice();
    console.log(newary);