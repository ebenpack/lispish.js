var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');
var list = require('./list.js');

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