/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Returns a new cons list with the results of calling the provided
 * function on every element.
 * @param  {cons}   L  cons list to be mapped
 * @param  {Function} fn callback function
 * @return {cons}
 */
export = function map(L : cons, fn : (currentValue : any)=>any) : cons{
    if (L === null){
        return L;
    } else if (cdr(L) === null){
        return cons(fn(car(L)), null);
    } else {
        return cons(fn(car(L)), map(cdr(L), fn));
    }
}
