var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');
var list = require('./list.js');

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the end.
 * @param  {cons} L
 * @param  {*} val
 * @return {cons}
 */
function push(L, val){
    if (L === null){
        return cons(val, null);
    } else if (cdr(L) === null){
        return cons(car(L), cons(val, null));
    } else {
        return cons(car(L), push(cdr(L), val));
    }
}

module.exports = push;