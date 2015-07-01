var cons = require('../cons/cons');
var car = require('../cons/car');
var cdr = require('../cons/cdr');

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