var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Returns a new list, which is a
 * reversed copy of the list passed in.
 * @param  {(cons|null)} L
 * @return {(cons|null)}
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