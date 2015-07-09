var car = require('../cons/car');
var cdr = require('../cons/cdr');

var equal = require('../cons/equal');

/**
 * Finds and returns the first key-value pair
 * which has a key matching that passed in.
 * Returns false if no match is found.
 * @param  {cons} L
 * @param  {*} key
 * @return {(cons|false)}
 */
function get(L, key){
    if (L === null){
        return null;
    } else {
        if (equal(car(car(L)), key)){
            return car(car(L));
        } else {
            return get(cdr(L), key);
        }
    }
}

module.exports = get;