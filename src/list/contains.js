var equal = require('../cons/equal.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

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