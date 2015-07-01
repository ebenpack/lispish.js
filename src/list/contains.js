var equal = require('../cons/equal');
var car = require('../cons/car');
var cdr = require('../cons/cdr');

/**
 * Returns true if the specified value is equal to at least one element of the given list.
 * @param  {cons} L
 * @param  {*} a
 * @return {Boolean}
 */
function contains(L, a){
    if (L === null){
        return false;
    } else {
        if (equal(car(L), a)){
            return true;
        } else {
            return contains(cdr(L), a);
        }
    }
}

module.exports = contains;