var cons = require('../cons/cons');
var car = require('../cons/car');
var cdr = require('../cons/cdr');

/**
 * Map over an association list.
 * @param {alist} L
 * @param {Function} fn
 * @return {list}
 */
function map(L, fn){
    if (L === null){
        return L;
    } else if (cdr(car(L)) === null){
        return cons(fn(car(car(L)), null), null);
    } else {
        return cons(fn(car(car(L)), cdr(car(L))), map(cdr(L), fn));
    }
}

module.exports = map;