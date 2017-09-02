/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';

/**
 * Returns a new list that is the result
 * of concatenating L2 onto the end of L1;
 * @param  {cons} L1
 * @param  {cons} L2
 * @return {cons}
 */
export default function concat(L1 : Cons, L2 : Cons) : Cons {
    if (L1 === null){
        return L2;
    } else {
        return cons(car(L1), concat(cdr(L1), L2));
    }
}