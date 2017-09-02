
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';
import pair from '../cons/pair';
import concat from './concat';

/**
 * Flatten a list.
 * @return {cons}
 */
export default function flatten(L : Cons) : Cons {
    if (L === null) {
        return null;
    } else if (!pair(car(L))) {
        return cons(car(L), flatten(cdr(L)));
    } else {
        return concat(flatten(car(L)), flatten(cdr(L)));
    }
}