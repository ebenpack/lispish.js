var cons = require('../cons/cons');
var car = require('../cons/car');
var cdr = require('../cons/cdr');
var get = require('./get');

/**
 * Returns a new alist. If the given key
 * pair existed in the original list, the
 * value will be replaced with the one privded. Otherwise
 * the key-value pair will be added.
 * @param  {cons} L
 * @param  {*} key
 * @param  {*} value
 * @return {cons}
 */
function put(L, key, value){
    function helper(L, key, value){
        if (car(car(L)) === key){
            return cons(cons(key, value), cdr(L));
        } else {
            return cons(car(L), helper(cdr(L), key, value));
        }
    }
    if (get(L, key) === null){
        return cons(cons(key, value), L);
    } else {
        return helper(L, key, value);
    }
}

module.exports = put;