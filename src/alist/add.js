var cons = require('../cons/cons');

/**
 * Returns a new alist with the given key-value
 * added to the front.
 * @param  {cons} L
 * @param  {*} key
 * @param  {*} value
 * @return {cons}
 */
function add(L, key, value){
    return cons(cons(key, value), L);
}

module.exports = add;