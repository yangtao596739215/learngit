~function () {
    /*
    * mySlice:实现内置的slice方法
    *   @params
    *       n,m
    *   @return
    *       一个新数组
    * by group3 on 20190808
    */

    let mySlice = function (n, m) {
        let newAry = [];

        (m > this.length || typeof m === 'undefined') ? m = this.length: m = parseInt(Number(m));
        m < 0 ? m = this.length - Math.abs(m) : null;

        isNaN(n) ? n = 0 : n = parseInt(Number(n));
        n < 0 ? (Math.abs(n) > this.length ? n = 0 : n = this.length - Math.abs(n)) : null;

        for (let i = n; i < m; i++) {
            newAry[newAry.length] = this[i];
        }

        return newAry;
    }
    Array.prototype.mySlice = mySlice;
}();