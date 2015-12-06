var cons = require('../cons/cons');
var car = require('../cons/car');
var cdr = require('../cons/cdr');

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
            return reduceHelper(cdr(L), fn, fn(car(L), acc));
        }
    }
    if (typeof acc === 'undefined'){
        return reduceHelper(L, fn, 0);
    } else {
        return reduceHelper(L, fn, acc);
    }
}

module.exports = reduce;