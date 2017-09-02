
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';
import list from './list';

/**
 * Given a cons list, returns a new list with the last item removed.
 * @param  {cons} L
 * @return {cons}
 */
export default function pop(L : Cons) : Cons {
    if (cdr(L) === null){
        return null;
    } else {
        return cons(car(L), pop(cdr(L)));
    }
}