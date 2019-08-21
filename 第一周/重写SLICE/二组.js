~function () {
     //实现slice功能
     function mySlice(n, m) {
         //m索引可以不写
         typeof m === 'undefined' ? m = this.length : null;
         n = Number(n);
         m = Number(m);
         !isNaN(n) ? null : n=0;
         !isNaN(m) ? null : m=0;
         //支持负数索引
         n < 0 ? n = this.length + n : null;
         m < 0 ? m = this.length + m : null;
         //实现小数索引 向下取整
         m = Math.floor(m);
         n = Math.floor(n);
         let ary = [];
         for (let i = 0; i < this.length; i++) {
             if (i >= n  && i < m) {
                 ary[i - n] = this[i];
             }
         }
         return ary;
     }
     Array.prototype.mySlice = mySlice;
 }();
 let xx = [10, 20, 30, 40, 50, 60];
 console.log(xx.mySlice());
 console.log(xx.mySlice(15));
 console.log(ary.mySlice('0', true));
 console.log(ary.mySlice('k'));
 console.log(ary.mySlice(2, 5));
 console.log(ary.mySlice(5, 2));
 console.log(ary.mySlice(-5, -2));
 console.log(ary.mySlice(2.3, 4.8));
 console.log(ary.mySlice(3.3, 4.8));
 console.log(ary.mySlice(2));
