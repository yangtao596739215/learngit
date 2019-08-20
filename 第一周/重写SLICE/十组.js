~ function () {
    function slice(n, m) {
        typeof n !== "number" ? n = 0 : n = Math.floor(n);
        typeof m !== "number" ? m = this.length : m = Math.floor(m);
        n < 0 ? n += this.length : null;
        m < 0 ? m += this.length : null;
        m > this.length ? m = this.length : null;
        let ary = [];
        for (let i = 0; i < this.length; i++) {
            if (n >= m) {
                break;
            }
            ary[i] = this[n];
            n++;
        }
        return ary;
    }
    Array.prototype.myslice = slice;
}()
