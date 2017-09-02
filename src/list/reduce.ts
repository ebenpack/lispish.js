
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';

/**
 * Applies the given callback function against an accumulator
 * and each value of the cons list (from left-to-right) in order
 * to reduce it to a single value.
 * @param  {cons}   L
 * @param  {Function} fn
 * @param  {*}   acc
 * @return {cons}
 */
export default function reduce(L: Cons, fn: (current : any, prev: any)=>any, acc: any) {
    function reduceHelper(L: Cons, fn: (current: any, prev: any) => any, acc: any) {
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