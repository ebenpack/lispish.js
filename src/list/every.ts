/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Returns true if every element in the list passes the
 * test implemented by the provided callback function.
 * The callback function is passed the current value
 * and the current index in the list.
 * @param  {cons}   L
 * @param  {Function} fn
 * @return {boolean}
 */
export = function every(L: cons, fn: (currentValue: any, idx: number)=>boolean) : boolean {
    function helper(L : cons, fn: (currentValue: any, idx: number) => boolean, idx : number) {
        if (L === null){
            return true;
        } else {
            if (!fn(car(L), idx)){
                return false;
            } else {
                return helper(cdr(L), fn, idx + 1);
            }
        }
    }
    return helper(L, fn, 0);
}