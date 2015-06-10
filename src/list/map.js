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
    if (cdr(L) === null){
        return cons(fn(car(L)), null);
    } else {
        return cons(fn(car(L)), map(cdr(L), fn));
    }
}

module.exports = map;
