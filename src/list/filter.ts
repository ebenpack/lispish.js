/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Returns a new cons list consisting of the values
 * of the given cons list for which the the callback function,
 * called passing the value of each item in the list in turn,
 * evaluated to true.
 * @param  {cons}   L
 * @param  {Function} fn
 * @return {cons}
 */
export = function filter(L: cons, fn: (currentValue: any)=>boolean) : cons {
    if (L === null){
        return L;
    } if (cdr(L) === null){
        if (fn(car(L))){
            return cons(car(L), null);
        } else {
            return null;
        }
    } else {
        if (fn(car(L))){
            return cons(car(L), filter(cdr(L), fn));
        } else {
            return filter(cdr(L), fn);
        }
    }
}