
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';

/**
 * Returns a new cons list consisting of the values
 * of the given cons list for which the the callback function,
 * called passing the value of each item in the list in turn,
 * evaluated to true.
 * @param  {cons}   L
 * @param  {Function} fn
 * @return {cons}
 */
export default function filter(L: Cons, fn: (currentValue: any)=>boolean) : Cons {
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