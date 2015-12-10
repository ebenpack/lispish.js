/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Applies the given callback function against an accumulator
 * and each value of the cons list (from left-to-right) in order
 * to reduce it to a single value.
 * @param  {cons}   L
 * @param  {Function} fn
 * @param  {*}   acc
 * @return {cons}
 */
export = function reduce(L: cons, fn: (current : any, prev: any)=>any, acc: any) {
    function reduceHelper(L: cons, fn: (current: any, prev: any) => any, acc: any) {
        if (L === null) {
            return acc;
        } else if (cdr(L) === null) {
            return fn(car(L), acc);
        } else {
            return reduceHelper(cdr(L), fn, fn(car(L), acc));
        }
    }
    if (typeof acc === 'undefined') {
        return reduceHelper(L, fn, 0);
    } else {
        return reduceHelper(L, fn, acc);
    }
}