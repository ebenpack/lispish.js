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
 * @return {(cons|null)}
 */
function filter(L, fn){
    if (cdr(L) === null){
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