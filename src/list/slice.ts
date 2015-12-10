/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');
import length = require('./length');

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
export = function slice(L : cons, m : number, n? : number) : cons {
    function sliceHelper(L : cons, m : number, n : number, current : number){
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