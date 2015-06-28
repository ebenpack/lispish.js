var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

var length = require('../list/length.js');

/**
 * Given a list, returns a new list 'slice'.
 * If n is not passed in, the slice will be from m to
 * the end of the original list. If n is passed in,
 * then the slice will be from m to n. Invalid slices 
 * (e.g. where m is larger than n) will return null.
 * @param  {cons} L
 * @param  {integer} m
 * @param  {(integer|undefined)} n
 * @return {cons}
 */
function slice(L, m, n){
    function sliceHelper(L, m, n, current){
        if (current === n || m >= n){
            return null;
        } else if (current >= m){
            return cons(car(L), sliceHelper(cdr(L), m, n, current + 1));
        } else {
            return sliceHelper(cdr(L), m, n, current + 1);
        }
    }
    if (typeof n === 'undefined'){
        return sliceHelper(L, m, length(L), 0);
    } else {
        return sliceHelper(L, m, n, 0);
    }
}

module.exports = slice;