
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';

/**
 * Map over an association list.
 * @param {alist} L
 * @param {Function} fn
 * @return {list}
 */
export default function map(L : Cons, fn : (key : any, val: any)=>any) : Cons {
    if (L === null){
        return L;
    } else if (cdr(car(L)) === null){
        return cons(fn(car(car(L)), null), null);
    } else {
        return cons(fn(car(car(L)), cdr(car(L))), map(cdr(L), fn));
    }
}