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