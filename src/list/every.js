var cons = require('../cons/cons');
var car = require('../cons/car');
var cdr = require('../cons/cdr');

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