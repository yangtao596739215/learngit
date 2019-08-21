Array.prototype.slice = function (begin, end) {
    end = (typeof end !== 'undefined') ? end : this.length;
    if (Object.prototype.toString.call(this) === '[object Array]') {
        return _slice.call(this, begin, end);
    }
    var i, cloned = [],
        size, len = this.length;
    var start = begin || 0;
    start = (start >= 0) ? start : Math.max(0, len + start);
    var upTo = (typeof end == 'number') ? Math.min(end, len) : len;
    if (end < 0) {
        upTo = len + end;
    }
    size = upTo - start;
    if (size > 0) {
        cloned = new Array(size);
        if (this.charAt) {
            for (i = 0; i < size; i++) {
                cloned[i] = this.charAt(start + i);
            }
        } else {
            for (i = 0; i < size; i++) {
                cloned[i] = this[start + i];
            }
        }
    }
    return cloned;
};