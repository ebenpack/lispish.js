var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

var length = require('../list/length.js');

/**
 * Returns a new list that is the result
 * of concatenating L2 onto the end of L1;
 * @param  {(cons|null)} L1
 * @param  {(cons|null)} L2
 * @return {(cons|null)}
 */
function concat(L1, L2){
    if (L1 === null){
        return L2;
    } else {
        return cons(car(L1), concat(cdr(L1), L2));
    }
}

module.exports = concat;