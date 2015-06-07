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
/**
 * Returns an immutable cons pair consisting
 * of a, b
 * @param  {*} a car value
 * @param  {*} b cdr value
 * @return {cons}
 */
function cons(a, b) {
    if (!(this instanceof cons)) {
        return new cons(a, b);
    }
    this.car = a;
    this.cdr = b;
    Object.freeze(this);
}

function range(n){
    if (n === 0){
        return [0];
    } else if (n === 1){
        return [0];
    } else {
        return range(n-1).concat(n-1);
    }
}

function permute(S){
    function swap(s, x, y){
        var min = Math.min(x,y);
        var max = Math.max(x,y);
        return s.slice(0, min) + s[max] + s.slice(min+1, max) + s[min] + s.slice(max+1);
    }
    function generate(n, S){
        var result = [];
        if (n === 1){
            return S;
        } else {
            for (var i = 0; i < n; i += 1){
                result = result.concat(generate(n - 1, S));
                if (n % 2 === 0){
                    S = swap(S,i, n-1);
                }
                else{
                    S = swap(S, 0, n-1);
                }
            }
        }
        return result;
    }
    return generate(S.length, S);
}

// Define getters on cons.prototype to allow for
// (limited) shorthand composition of car and cdr
// (e.g. cddr, caddar, etc.).
// This is a bit of a hack, as dynamic getters
// are not possible in ES5. ES6 Proxies would
// solve this problem, but alas, they are not yet
// widely supported.
for (var i=0; i<5; i++){
    for (var j=0; j<5; j++){
        var Ds = (new Array(i+1).join('d'));
        var As = (new Array(j+1).join('a'));
        var permutations = permute(As + Ds);
        for (var p=0, len=permutations.length; p <len; p++){
            var perm = permutations[p];
            if (!cons.prototype.hasOwnProperty('c' + perm + 'r')){
                Object.defineProperty(cons.prototype, 'c' + perm + 'r', {
                    get: (function(perm){
                        return function(){
                            function helper(that, perm){
                                if (perm.length===0){
                                    return that;
                                } else{
                                    if (perm[0] === 'a'){
                                        return helper(that.car, perm.slice(1));
                                    } else if (perm[0] === 'd'){
                                        return helper(that.cdr, perm.slice(1));
                                    }
                                }
                            }
                            return helper(this, perm);
                        };
                    })(perm)
                });
            }
        }
    }
}

exports.cons = cons;
exports.car = require('./car');
exports.cdr = require('./cdr');
exports.print = require('./print');
},{"./car":1,"./cdr":2,"./print":4}],4:[function(require,module,exports){
/**
 * Returns a string representation of a cons.
 * cons prefix, suffix, and separator can all
 * optionally be defined by the user.
 * @param  {cons} c    cons to be printed
 * @param  {(Object|undefined)} options Optional options object
 * @return {string}      String representation of the given cons
 */
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
        if (carL instanceof cons) {
            carResult = printHelper(carL, separator);
        } else if (carL !== null) {
            carResult = carL.toString();
        }
        if (cdrL instanceof cons) {
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
},{}],5:[function(require,module,exports){
var cons = require('../cons/cons.js');

function filter(L, fn){
    if (cons.cdr(L) === null){
        if (fn(cons.car(L))){
            return cons.cons(cons.car(L), null);
        } else {
            return null;
        }
    } else {
        if (fn(cons.car(L))){
            return cons.cons(cons.car(L), filter(cons.cdr(L), fn));
        } else {
            return filter(cons.cdr(L), fn);
        }
    }
}

module.exports = filter;
},{"../cons/cons.js":3}],6:[function(require,module,exports){
var cons = require('../cons/cons.js');

function list(){
    var args = new Array(arguments.length);
    for(var i = 0, len = args.length; i < len; ++i) {
        args[i] = arguments[i];
    }
    function helper(args){
        if (args.length === 0){
            return null;
        } else {
            return cons.cons(args[0], helper(args.slice(1)));
        }
    }
    return helper(args);
}

exports.list = list;
exports.map = require('./map.js');
exports.filter = require('./filter.js');
exports.reduce = require('./reduce.js');
exports.push = require('./push.js');
exports.pop = require('./pop.js');
exports.peek = require('./peek.js');
},{"../cons/cons.js":3,"./filter.js":5,"./map.js":7,"./peek.js":8,"./pop.js":9,"./push.js":10,"./reduce.js":11}],7:[function(require,module,exports){
var cons = require('../cons/cons.js');

function map(L, fn){
    if (cons.cdr(L) === null){
        return cons.cons(fn(cons.car(L)), null);
    } else {
        return cons.cons(fn(cons.car(L)), map(cons.cdr(L), fn));
    }
}

module.exports = map;

},{"../cons/cons.js":3}],8:[function(require,module,exports){
var cons = require('../cons/cons.js');

function peek(L){
    if (cons.cdr(L) === null){
        return cons.car(L);
    } else {
        return peek(cons.cdr(L));
    }
}

module.exports = peek;
},{"../cons/cons.js":3}],9:[function(require,module,exports){
var cons = require('../cons/cons.js');
var list = require('./list.js');

function pop(L){
    if (cons.cdr(L) === null){
        return null;
    } else {
        return list(cons.car(L), pop(cons.cdr(L)));
    }
}

module.exports = pop;
},{"../cons/cons.js":3,"./list.js":6}],10:[function(require,module,exports){
var cons = require('../cons/cons.js');
var list = require('./list.js');

function push(L, val){
    if (cons.cdr(L) === null){
        return list(cons.car(L), list(val, null));
    } else {
        return list(cons.car(L), push(cons.cdr(L), val));
    }
}

module.exports = push;
},{"../cons/cons.js":3,"./list.js":6}],11:[function(require,module,exports){
var cons = require('../cons/cons.js');

function reduce(L, fn, acc){
    function reduceHelper(L, fn, acc){
        if (cons.cdr(L) === null){
            return fn(cons.car(L), acc);
        } else {
            return reduce(cons.cdr(L), fn, fn(cons.car(L), acc));
        }
    }
    if (typeof acc === 'undefined'){
        return reduceHelper(L, fn, 0);
    } else {
        return reduceHelper(L, fn, acc);
    }
}

module.exports = reduce;
},{"../cons/cons.js":3}],12:[function(require,module,exports){
var cons = require('./cons/cons.js');
var list = require('./list/list.js')

exports.cons = cons;
exports.list = list;
},{"./cons/cons.js":3,"./list/list.js":6}]},{},[12])(12)
});