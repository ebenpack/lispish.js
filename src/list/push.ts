
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';
import list from './list';

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the end.
 * @param  {cons} L
 * @param  {*} val
 * @return {cons}
 */
export default function push(L : Cons, val : any) : Cons {
    if (L === null){
        return cons(val, null);
    } else if (cdr(L) === null){
        return cons(car(L), cons(val, null));
    } else {
        return cons(car(L), push(cdr(L), val));
    }
}