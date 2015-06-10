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
        if (cdr(L) === null){
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