var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

/**
 * Given a cons list, returns a new cons list
 * with the first item removed
 * @param  {cons} L
 * @return {(cons|null)}
 */
function dequeue (L) {
    return cdr(L);
}

module.exports = dequeue;