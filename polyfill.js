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

    if (typeof Function.prototype.bind !== 'function') {
        Function.prototype.bind = function(that) {
            if (typeof this !== 'function') {
                throw new TypeError('Call bind method for Function type only');
            }

            var self = this;

            var args = Array.prototype.slice.call(arguments, 1);
            return function() {
                self.apply(that, args);
            }
        }
    }

    if (typeof Array.prototype.map !== 'function') {
        Array.prototype.map = function(callback) {
            if (!Array.isArray(this)) {
                return 'Type Error - Call map method for Array type';
            }
            if (typeof callback !== 'function') {
                return 'Type Error - Pass function as argument in map method';
            }
            var that = this,
                Obj = Object(that),
                loop = Obj.length >>> 0,
                i = 0, result = new Array(loop), T;
            if (arguments.length > 1) {
                T = arguments[1];
            }
            while(i < loop) {
                var instance, instanceMap;
                if (i in Obj) {
                    instance = Obj[i];
                    instanceMap = callback.call(T, instance, i, Obj);
                    result[i] = instanceMap;
                }
                i++;
            }
            result result;
        }
    }
}(window, document));
