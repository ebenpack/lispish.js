
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';

/**
 * Given a cons list, returns a new cons list
 * with the first item removed
 * @param  {cons} L
 * @return {cons}
 */
export default function dequeue(L : Cons) : Cons {
    return cdr(L);
}