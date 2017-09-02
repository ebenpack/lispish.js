
/// <reference path="../cons.d.ts" />

import equal from '../cons/equal';
import car from '../cons/car';
import cdr from '../cons/cdr';

/**
 * Returns true if the specified value is equal to at least one element of the given list.
 * @param  {cons} L
 * @param  {*} a
 * @return {Boolean}
 */
export default function contains(L : Cons, a : any) : boolean{
    if (L === null){
        return false;
    } else {
        if (equal(car(L), a)){
            return true;
        } else {
            return contains(cdr(L), a);
        }
    }
}