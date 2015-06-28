var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Given two cons lists, returns a new cons list composed of
 * cons pairs consisting of positionally determined elements
 * from each of the given lists. The resulting list will only contain
 * as many elements as contained in the shorter of the two lists.
 * @param  {cons} L1
 * @param  {cons} L2
 * @return {cons}
 */
function zip(L1, L2){
    if (L1 === null || L2 === null){
        return null;
    } else if (cdr(L1) === null || cdr(L2) === null){
        return null;
    } else {
        return cons(cons(car(L1), car(L2)), zip(cdr(L1), cdr(L2)));
    }
}

module.exports = zip;
