
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';

/**
 * Returns the value of the last item in a cons list.
 * @param  {cons} L
 * @return {*}
 */
export default function peek(L : Cons) : any{
    if (L === null){
        return L;
    } if (cdr(L) === null){
        return car(L);
    } else {
        return peek(cdr(L));
    }
}