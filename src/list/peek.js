var cons = require('../cons/cons');
var car = require('../cons/car');
var cdr = require('../cons/cdr');

/**
 * Returns the value of the last item in a cons list.
 * @param  {cons} L
 * @return {*}
 */
function peek(L){
    if (L === null){
        return L;
    } if (cdr(L) === null){
        return car(L);
    } else {
        return peek(cdr(L));
    }
}

module.exports = peek;