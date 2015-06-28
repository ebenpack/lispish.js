(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.lispish = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Returns the car of a cons
 * @param  {cons} cons cons to be car'd
 * @return {*}      car value of the given cons
 */
function car(cons) {
    return cons.car;
}

module.exports = car;
},{}],2:[function(require,module,exports){
/**
 * Returns the cdr of a cons
 * @param  {cons} cons cons to be cdr'd
 * @return {*}      cdr value of the given cons
 */
function cdr(cons) {
    return cons.cdr;
}

module.exports = cdr;
},{}],3:[function(require,module,exports){
var cdr = require('./cdr.js');
var car = require('./car.js');
var range = require('../list/range.js');
var compose = require('../fun/compose.js');

function permute(S) {

    function swap(s, x, y) {
        var min = Math.min(x, y);
        var max = Math.max(x, y);
        return s.slice(0, min) + s[max] + s.slice(min + 1, max) + s[min] + s.slice(max + 1);
    }

    // TODO: Make more funcctional
    function generate(n, S) {
        var result = [];
        if (n === 1) {
            return S;
        } else {
            for (var i = 0; i < n; i += 1) {
                result = result.concat(generate(n - 1, S));
                if (n % 2 === 0) {
                    S = swap(S, i, n - 1);
                } else {
                    S = swap(S, 0, n - 1);
                }
            }
        }
        return result;
    }
    return generate(S.length, S);
}

// In order to provide car/cdr composition shorthand
// (e.g. caaar, cadadr, etc.), we define properties
// on the cons prototype for many of these permutions.
// This is a bit of a hack, as default getters aren't
// supported in ES5. Proxies would allow us to achieve
// this much more elegantly, but unfortunately they are
// not well supported.
// TODO: Make more functional
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        var Ds = (new Array(i + 1).join('d'));
        var As = (new Array(j + 1).join('a'));
        var permutations = permute(As + Ds);
        for (var p = 0, len = permutations.length; p < len; p++) {
            var perm = permutations[p];
            if (perm !== 'a' && perm !== 'd' && perm.length < 5 && !exports.hasOwnProperty('c' + perm + 'r')) {
                exports[('c' + perm + 'r')] = (function(perm) {
                    function helper(perm) {
                        if (perm.length === 0) {
                            return function(i){return i;};
                        } else {
                            if (perm[0] === 'a') {
                                return compose(helper(perm.slice(1)), car);
                            } else if (perm[0] === 'd') {
                                return compose(helper(perm.slice(1)), cdr);
                            }
                        }
                    }
                    return helper(perm);
                })(perm);
            }
        }
    }
}
},{"../fun/compose.js":10,"../list/range.js":24,"./car.js":1,"./cdr.js":2}],4:[function(require,module,exports){
/**
 * Returns an immutable cons pair consisting
 * of a and b
 * @param  {*} a car value
 * @param  {*} b cdr value
 * @return {cons}
 */
function cons(a, b) {
    return Object.freeze(
        Object.defineProperty(
            Object.defineProperty(
                Object.create(null), 'car', {
                    value: a
                }
            ), 'cdr', {
                value: b
            }
        )
    );
}

module.exports = cons;
},{}],5:[function(require,module,exports){
var cons = require('./cons.js');
var pair = require('./pair.js');
var cdr = require('./cdr.js');
var car = require('./car.js');

/**
 * Returns a boolean indicating whether to two given parameters
 * are equal. If the paramters are cons pairs, equality is determined
 * by the equality of their members.
 * @param  {*} a
 * @param  {*} b
 * @return {boolean}
 */
function equal(a, b){
    // If a is a pair and b is not (or vice versa),
    // these cannot be equal.
    if (pair(a) !== pair(b)){
        return false;
    }
    // If car(a) is a pair and car(b) is not (or vice versa),
    // these cannot be equal.
    if (pair(a) && pair(car(a)) !== pair(b) && pair(car(b))){
        return false;
    }
    // If cdr(a) is a pair and cdr(b) is not (or vice versa),
    // these cannot be equal.
    if (pair(a) && pair(cdr(a)) !== pair(b) && pair(cdr(b))){
        return false;
    }
    // If a is a pair (which, if we have reached this point,
    // means that b must also be a pair), recurse.
    // Otherwise, test the equality of a and b directly.
    if (pair(a)){
        return equal(car(a), car(b)) && equal(cdr(a), cdr(b));
    } else {
        return a === b;
    }
}

module.exports = equal;
},{"./car.js":1,"./cdr.js":2,"./cons.js":4,"./pair.js":6}],6:[function(require,module,exports){
/**
 * Returns a boolean indicating whether the given parameter is a cons pair.
 * @param  {*} c
 * @return {boolean}
 */
function pair(c){
    return c !== null && typeof c === 'object' && 'car' in c && 'cdr' in c;
}

module.exports = pair;

},{}],7:[function(require,module,exports){
var cons = require('./cons.js');
var car = require('./car.js');
var cdr = require('./cdr.js');
var pair = require('./pair.js');

/**
 * Returns a string representation of a cons.
 * cons prefix, suffix, and separator can all
 * optionally be defined by the user.
 * @param  {cons} c    cons to be printed
 * @param  {(Object|undefined)} options Optional options object
 * @return {string}      String representation of the given cons
 */
// TODO: Make more functional
function print(c, options) {
    var opts = options || {};
    prefix = typeof opts.prefix !== 'undefined' ? opts.prefix : '(';
    suffix = typeof opts.suffix !== 'undefined' ? opts.suffix : ')';
    separator = typeof opts.separator !== 'undefined' ? opts.separator : ',';

    function printHelper(c, separator) {
        var cdrL = cdr(c);
        var carL = car(c);
        var cdrResult = '';
        var carResult = '';
        if (pair(carL)) {
            carResult = printHelper(carL, separator);
        } else if (carL !== null) {
            carResult = carL.toString();
        }
        if (pair(cdrL)) {
            cdrResult = printHelper(cdrL, separator);
        } else if (cdrL !== null) {
            cdrResult = cdrL.toString();
        }
        if (carResult === '' || cdrResult === '') {
            separator = '';
        }
        return prefix + carResult + separator + cdrResult + suffix;
    }
    return printHelper(c, separator);
}

module.exports = print;
},{"./car.js":1,"./cdr.js":2,"./cons.js":4,"./pair.js":6}],8:[function(require,module,exports){
var apply = require('./apply.js');
var args = require('../helpers/args.js');
var list = require('../list/list.js');

function Y(f) {
    return f((function(h) {
        return function() {
            return apply(f(h(h)), list(args(arguments)));
        }
    })(function(h) {
        return function() {
            return apply(f(h(h)), list(args(arguments)));
        }
    }));
}

module.exports = Y;
},{"../helpers/args.js":12,"../list/list.js":19,"./apply.js":9}],9:[function(require,module,exports){
var cdr = require('../cons/cdr.js');
var car = require('../cons/car.js');

/**
 * Call the given function with the list of arguments supplied.
 * @param  {Function} fn
 * @param  {cons}   args
 * @return {*}
 */
function apply(fn, args){
    function helper(fn, args){
        if (cdr(args) === null){
            return fn(car(args));
        } else {
            return apply(fn.bind(null, car(args)), cdr(args));
        }
    }
    return helper(fn, args);
}

module.exports = apply;
},{"../cons/car.js":1,"../cons/cdr.js":2}],10:[function(require,module,exports){
/**
 * Compose functions a and b
 * @param  {Function} a Outer function
 * @param  {Function} b Inner function
 * @return {Function}   Composed function
 */
function compose(a, b) {
    return function(c) {
        return a(b(c));
    };
}

module.exports = compose;
},{}],11:[function(require,module,exports){
var cons = require('../cons/cons.js');
var apply = require('./apply.js');

/**
 * Curry the given function. If the number of expected parameters
 * is passed explicitly, this will be used. Otherwise, the arity of the
 * function passed in will be used.
 * @param  {Function} fn
 * @param  {integer}   arity
 * @return {Function}
 */
function curry(fn, arity){
    function helper(fn, arity, args){
        if (arity === 0){
            return apply(fn, args);
        } else {
            return function(arg){
                return helper(fn, arity - 1, cons(arg, args));
            };
        }
    }
    if (typeof arity === 'undefined'){
        return helper(fn, fn.length, null);
    } else {
        return helper(fn, arity, null);
    }
}
module.exports = curry;
},{"../cons/cons.js":4,"./apply.js":9}],12:[function(require,module,exports){
/**
 * Given an array-like, returns a real array.
 * @param  {Array-like} args
 * @return {Arrau}
 */
function argsHelper(args){
    var newArgs = new Array(args.length);
    for(var i = 0, len = newArgs.length; i < len; ++i) {
        newArgs[i] = args[i];
    }
    return newArgs;
}

module.exports = argsHelper;
},{}],13:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Returns a new list that is the result
 * of concatenating L2 onto the end of L1;
 * @param  {cons} L1
 * @param  {cons} L2
 * @return {cons}
 */
function concat(L1, L2){
    if (L1 === null){
        return L2;
    } else {
        return cons(car(L1), concat(cdr(L1), L2));
    }
}

module.exports = concat;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4}],14:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Given a cons list, returns a new cons list
 * with the first item removed
 * @param  {cons} L
 * @return {cons}
 */
function dequeue (L) {
    return cdr(L);
}

module.exports = dequeue;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4}],15:[function(require,module,exports){
var cons = require('../cons/cons.js');

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the front of the list.
 * @param  {cons} L
 * @param  {*} val
 * @return {cons}
 */
function enqueue (L, val) {
    return cons(val, L);
}

module.exports = enqueue;
},{"../cons/cons.js":4}],16:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Returns true if every element in the list passes the
 * test implemented by the provided callback function.
 * The callback function is passed the current value
 * and the current index in the list.
 * @param  {cons}   L
 * @param  {Function} fn
 * @return {boolean}
 */
function every(L, fn){
    function helper(L, fn, idx){
        if (L === null){
            return true;
        } else {
            if (!fn(car(L), idx)){
                return false;
            } else {
                return helper(cdr(L), fn, idx + 1);
            }
        }
    }
    return helper(L, fn, 0);
}

module.exports = every;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4}],17:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Returns a new cons list consisting of the values
 * of the given cons list for which the the callback function,
 * called passing the value of each item in the list in turn,
 * evaluated to true.
 * @param  {cons}   L
 * @param  {Function} fn
 * @return {cons}
 */
function filter(L, fn){
    if (L === null){
        return L;
    } if (cdr(L) === null){
        if (fn(car(L))){
            return cons(car(L), null);
        } else {
            return null;
        }
    } else {
        if (fn(car(L))){
            return cons(car(L), filter(cdr(L), fn));
        } else {
            return filter(cdr(L), fn);
        }
    }
}

module.exports = filter;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4}],18:[function(require,module,exports){
var cdr = require('../cons/cdr.js');
var reduce = require('./reduce.js');

/**
 * Returns the length of the given list
 * @param  {cons} l list
 * @return {integer}   length of the given list.
 */
function length(L){
    return reduce(L, function(curr, acc){return acc + 1;}, 0);
}

module.exports = length;
},{"../cons/cdr.js":2,"./reduce.js":25}],19:[function(require,module,exports){
var cons = require('../cons/cons.js');
var argsHelper = require('../helpers/args.js');

/**
 * Returns a cons list constructed from the given parameters.
 * @return {cons}
 */
function list(){
    function helper(args){
        if (args.length === 0){
            return null;
        } else {
            if (Array.isArray(args[0])){
                return cons(helper(args[0]), helper(args.slice(1)));
            } else {
                return cons(args[0], helper(args.slice(1)));
            }
        }
    }
    if (arguments.length === 1 && Array.isArray(arguments[0])){
        return helper(arguments[0]);
    } else {
        return helper(argsHelper(arguments));
    }
    
}

module.exports = list;
},{"../cons/cons.js":4,"../helpers/args.js":12}],20:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Returns a new cons list with the results of calling the provided
 * function on every element.
 * @param  {cons}   L  cons list to be mapped
 * @param  {Function} fn callback function
 * @return {cons}
 */
function map(L, fn){
    if (L === null){
        return L;
    } else if (cdr(L) === null){
        return cons(fn(car(L)), null);
    } else {
        return cons(fn(car(L)), map(cdr(L), fn));
    }
}

module.exports = map;

},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4}],21:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Returns the value of the last item in a cons list.
 * @param  {cons} L
 * @return {*}
 */
function peek(L){
    if (L === null){
        return L;
    } if (cdr(L) === null){
        return car(L);
    } else {
        return peek(cdr(L));
    }
}

module.exports = peek;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4}],22:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');
var list = require('./list.js');

/**
 * Given a cons list, returns a new list with the last item removed.
 * @param  {cons} L
 * @return {cons}
 */
function pop(L){
    if (cdr(L) === null){
        return null;
    } else {
        return cons(car(L), pop(cdr(L)));
    }
}

module.exports = pop;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4,"./list.js":19}],23:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');
var list = require('./list.js');

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the end.
 * @param  {cons} L
 * @param  {*} val
 * @return {cons}
 */
function push(L, val){
    if (L === null){
        return cons(val, null);
    } else if (cdr(L) === null){
        return cons(car(L), cons(val, null));
    } else {
        return cons(car(L), push(cdr(L), val));
    }
}

module.exports = push;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4,"./list.js":19}],24:[function(require,module,exports){
var cons = require('../cons/cons.js');

/**
 * Returns a range list from n to m.
 * @param  {integer} n If m in not passed, the end of the range (exlusive),
 * otherwise the start of the range (inclusive).
 * @param  {(integer|undefined)} m If passed, the end of the range (exlusive).
 * @param {(integer|undefined)} step steps to take between each item in the range.
 * Defaults to 1.
 * @return {cons}   List from n to m.
 */
function range(m, n, step){
    function rangeHelper(m, n, step){
        if (m === n){
            return null;
        } else if (goodStep(m, n, step)) {
            return cons(m, rangeHelper(m+step, n, step));
        } else {
            return cons(m, null);
        }
    }
    function goodStep(start, stop, step){
        return (abs(stop - start) > abs(stop - (start + step)));
    }
    function stepHelper(m, n, step){
        if (typeof n === 'undefined'){
            if (goodStep(0, m, step)) {
                return rangeHelper(0, m, step);
            } else {
                return null;
            }
        } else {
            if (goodStep(m, n, step)) {
                return rangeHelper(m, n, step);
            } else {
                return null;
            }
        }
    }
    if (typeof step === 'undefined'){
        return stepHelper(m, n, 1);
    } else {
        return stepHelper(m, n, step);
    }
}

function abs(n){
    if (n < 0){
        return -n;
    } else {
        return n;
    }
}

module.exports = range;
},{"../cons/cons.js":4}],25:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Applies the given callback function against an accumulator
 * and each value of the cons list (from left-to-right) in order
 * to reduce it to a single value.
 * @param  {cons}   L
 * @param  {Function} fn
 * @param  {*}   acc
 * @return {cons}
 */
function reduce(L, fn, acc){
    function reduceHelper(L, fn, acc){
        if (L === null){
            return acc;
        } else if (cdr(L) === null){
            return fn(car(L), acc);
        } else {
            return reduce(cdr(L), fn, fn(car(L), acc));
        }
    }
    if (typeof acc === 'undefined'){
        return reduceHelper(L, fn, 0);
    } else {
        return reduceHelper(L, fn, acc);
    }
}

module.exports = reduce;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4}],26:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Returns a new list, which is a
 * reversed copy of the list passed in.
 * @param  {cons} L
 * @return {cons}
 */
function reverse(L){
    function helper(L, rev){
        if (L === null){
            return rev;
        } else {
            return helper(cdr(L), cons(car(L), rev));
        }
    }
    return helper(L, null);
}

module.exports = reverse;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4}],27:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

var length = require('../list/length.js');

/**
 * Given a list, returns a new list 'slice'.
 * If n is not passed in, the slice will be from m to
 * the end of the original list. If n is passed in,
 * then the slice will be from m to n. Invalid slices 
 * (e.g. where m is larger than n) will return null.
 * @param  {cons} L
 * @param  {integer} m
 * @param  {(integer|undefined)} n
 * @return {cons}
 */
function slice(L, m, n){
    function sliceHelper(L, m, n, current){
        if (current === n || m >= n){
            return null;
        } else if (current >= m){
            return cons(car(L), sliceHelper(cdr(L), m, n, current + 1));
        } else {
            return sliceHelper(cdr(L), m, n, current + 1);
        }
    }
    if (typeof n === 'undefined'){
        return sliceHelper(L, m, length(L), 0);
    } else {
        return sliceHelper(L, m, n, 0);
    }
}

module.exports = slice;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4,"../list/length.js":18}],28:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Returns true if some element in the list passes the
 * test implemented by the provided callback function.
 * The callback function is passed the current value
 * and the current index in the list.
 * @param  {cons}   L
 * @param  {Function} fn
 * @return {boolean}
 */
function some(L, fn){
    function helper(L, fn, idx){
        if (L === null){
            return false;
        } else {
            if (fn(car(L), idx)){
                return true;
            } else {
                return helper(cdr(L), fn, idx + 1);
            }
        }
    }
    return helper(L, fn, 0);
}

module.exports = some;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4}],29:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

var length = require('../list/length.js');

/**
 * Given a list, returns a new, sorted list.
 * Optionally, a custom comparison function can be passed.
 * By default, ascending sort if performed.
 * @param  {cons}   L
 * @param  {Function} fn
 * @return {cons}
 */
function sort(L, fn){
    function merge(L1, L2, fn){
        if (L1 === null){
            return L2;
        } else if (L2 === null){
            return L1;
        } else if (fn(car(L1), car(L2))){
            return cons(car(L1), merge(cdr(L1), L2, fn));
        } else {
            return cons(car(L2), merge(L1, cdr(L2), fn));
        }
    }
    function split(L, lo, hi){
        function splitHelper(L, lo, hi, curr){
            if (curr < lo){
                return splitHelper(cdr(L), lo, hi, curr+1);
            } else if (curr === hi){
                return null;
            } else {
                return cons(car(L), splitHelper(cdr(L), lo, hi, curr+1));
            }
        }
        if (lo < hi && lo >= 0 && hi <= length(L)){
            return splitHelper(L, lo, hi, 0);
        } else {
            return null;
        }
    }
    function msort(L, fn, len){
        if (L === null || cdr(L) === null){
            return L;
        } else {
            return merge(
                msort(split(L, 0, Math.floor(len/2)), fn, Math.floor(len/2)),
                msort(split(L, Math.floor(len/2), len), fn, len - Math.floor(len/2)),
                fn
            );
        }
    }
    if (typeof fn === 'undefined'){
        return msort(L, function(a,b){return a < b;}, length(L));
    } else {
        return msort(L, fn, length(L));
    }
}

module.exports = sort;
},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4,"../list/length.js":18}],30:[function(require,module,exports){
var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Given two cons lists, returns a new cons list composed of
 * cons pairs consisting of positionally determined elements
 * from each of the given lists. The resulting list will only contain
 * as many elements as contained in the shorter of the two lists.
 * @param  {cons} L1
 * @param  {cons} L2
 * @return {cons}
 */
function zip(L1, L2){
    if (L1 === null || L2 === null){
        return null;
    } else if (cdr(L1) === null || cdr(L2) === null){
        return null;
    } else {
        return cons(cons(car(L1), car(L2)), zip(cdr(L1), cdr(L2)));
    }
}

module.exports = zip;

},{"../cons/car.js":1,"../cons/cdr.js":2,"../cons/cons.js":4}],31:[function(require,module,exports){
// cons
exports.cons = Object.create(null);
exports.cons.cons = require('./cons/cons.js');
exports.cons.car = require('./cons/car.js');
exports.cons.cdr = require('./cons/cdr.js');
exports.cons.print = require('./cons/print.js');
exports.cons.equal = require('./cons/equal.js');
exports.cons.pair = require('./cons/pair.js');

var compositions = require('./cons/compositions.js');
Object.keys(compositions).forEach(function(key) {
    exports.cons[key] = compositions[key];
});

// helpers
exports.helpers = Object.create(null);
exports.helpers.args = require('./helpers/args.js');

// list
exports.list = Object.create(null);
exports.list.list = require('./list/list.js');
exports.list.length = require('./list/length.js');
exports.list.range = require('./list/range.js');
exports.list.map = require('./list/map.js');
exports.list.reduce = require('./list/reduce.js');
exports.list.filter = require('./list/filter.js');
exports.list.peek = require('./list/peek.js');
exports.list.push = require('./list/push.js');
exports.list.pop = require('./list/pop.js');
exports.list.zip = require('./list/zip.js');
exports.list.some = require('./list/some.js');
exports.list.every = require('./list/every.js');
exports.list.reverse = require('./list/reverse.js');
exports.list.concat = require('./list/concat.js');
exports.list.enqueue = require('./list/enqueue.js');
exports.list.dequeue = require('./list/dequeue.js');
exports.list.slice = require('./list/slice.js');
exports.list.sort = require('./list/sort.js');

// fun
exports.fun = Object.create(null);
exports.fun.compose = require('./fun/compose.js');
exports.fun.apply = require('./fun/apply.js');
exports.fun.curry = require('./fun/curry.js');
exports.fun.Y = require('./fun/Y.js');

// math
},{"./cons/car.js":1,"./cons/cdr.js":2,"./cons/compositions.js":3,"./cons/cons.js":4,"./cons/equal.js":5,"./cons/pair.js":6,"./cons/print.js":7,"./fun/Y.js":8,"./fun/apply.js":9,"./fun/compose.js":10,"./fun/curry.js":11,"./helpers/args.js":12,"./list/concat.js":13,"./list/dequeue.js":14,"./list/enqueue.js":15,"./list/every.js":16,"./list/filter.js":17,"./list/length.js":18,"./list/list.js":19,"./list/map.js":20,"./list/peek.js":21,"./list/pop.js":22,"./list/push.js":23,"./list/range.js":24,"./list/reduce.js":25,"./list/reverse.js":26,"./list/slice.js":27,"./list/some.js":28,"./list/sort.js":29,"./list/zip.js":30}]},{},[31])(31)
});