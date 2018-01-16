(function(window, document) {
    if (!Array.isArray) {
        Array.isArray = function(arg) {
            return Object.prototype.toString.call(arg) === '[object Array]';
        }
    }

    if (typeof Array.prototype.reduce !== 'function') {
        Array.prototype.reduce = function(callback) {
            if (!Array.isArray(this)) {
                return 'Type Error - Call reduce method for Array type';
            }
            if (typeof callback !== 'function') {
                return 'Type Error - Pass function as argument in reduce method';
            }
            var result, i = 0, len = this.length;
            if (arguments.length >= 2) {
                result = arguments[1];
            } else {
                result = this[i++];
            }
            while(i < len) {
                result = callback(result, this[i], i, this);
                i++;
            }
            return result;
        }
    }
}(window, document));
