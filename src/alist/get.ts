
/// <reference path="../cons.d.ts" />

import car from '../cons/car';
import cdr from '../cons/cdr';
import equal from '../cons/equal';

/**
 * Finds and returns the first key-value pair
 * which has a key matching that passed in.
 * Returns false if no match is found.
 * @param  {cons} L
 * @param  {*} key
 * @return {cons}
 */
export default function get(L : Cons, key : any) : Cons {
    if (L === null){
        return null;
    } else {
        if (equal(car(car(L)), key)){
            return cdr(car(L));
        } else {
            return get(cdr(L), key);
        }
    }
}