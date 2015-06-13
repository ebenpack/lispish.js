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