var cons = require('../cons/cons');
var car = require('../cons/car');
var cdr = require('../cons/cdr');
var list = require('./list');

/**
 * Given a cons list, returns a new list with the last item removed.
 * @param  {cons} L
 * @return {cons}
 */
function pop(L){
    if (cdr(L) === null){
        return null;
    } else {
        return cons(car(L), pop(cdr(L)));
    }
}

module.exports = pop;