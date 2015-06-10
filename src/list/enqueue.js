var cons = require('../cons/cons.js');

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the front of the list.
 * @param  {(cons|null)} L
 * @param  {*} val
 * @return {cons}
 */
function enqueue (L, val) {
    return cons(val, L);
}

module.exports = enqueue;