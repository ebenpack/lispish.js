
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';
import length from './length';

/**
 * Given a list, returns a new list 'slice'.
 * If n is not passed in, the slice will be from m to
 * the end of the original list. If n is passed in,
 * then the slice will be from m to n. Invalid slices 
 * (e.g. where m is larger than n) will return null.
 * @param  {cons} L
 * @param  {integer} m
 * @param  {(integer|undefined)} n
 * @return {cons}
 */
export default function slice(L : Cons, m : number, n? : number) : Cons {
    function sliceHelper(L : Cons, m : number, n : number, current : number){
        if (current === n || m >= n){
            return null;
        } else if (current >= m){
            return cons(car(L), sliceHelper(cdr(L), m, n, current + 1));
        } else {
            return sliceHelper(cdr(L), m, n, current + 1);
        }
    }
    if (typeof n === 'undefined'){
        return sliceHelper(L, m, length(L), 0);
    } else {
        return sliceHelper(L, m, n, 0);
    }
}