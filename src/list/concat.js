var cons = require('../cons/cons');
var car = require('../cons/car');
var cdr = require('../cons/cdr');

/**
 * Returns a new list that is the result
 * of concatenating L2 onto the end of L1;
 * @param  {cons} L1
 * @param  {cons} L2
 * @return {cons}
 */
function concat(L1, L2){
    if (L1 === null){
        return L2;
    } else {
        return cons(car(L1), concat(cdr(L1), L2));
    }
}

module.exports = concat;