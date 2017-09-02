
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';

/**
 * Returns a new cons list with the results of calling the provided
 * function on every element.
 * @param  {cons}   L  cons list to be mapped
 * @param  {Function} fn callback function
 * @return {cons}
 */
export default function map(L : Cons, fn : (currentValue : any)=>any) : Cons{
    if (L === null){
        return L;
    } else if (cdr(L) === null){
        return cons(fn(car(L)), null);
    } else {
        return cons(fn(car(L)), map(cdr(L), fn));
    }
}
