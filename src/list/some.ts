
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';

/**
 * Returns true if some element in the list passes the
 * test implemented by the provided callback function.
 * The callback function is passed the current value
 * and the current index in the list.
 * @param  {cons}   L
 * @param  {Function} fn
 * @return {boolean}
 */
export default function some(L : Cons, fn : (currentValue: any, idx : number)=>boolean) : boolean {
    function helper(L: Cons, fn: (currentValue: any, idx: number)=>boolean, idx : number): boolean {
        if (L === null){
            return false;
        } else {
            if (fn(car(L), idx)){
                return true;
            } else {
                return helper(cdr(L), fn, idx + 1);
            }
        }
    }
    return helper(L, fn, 0);
}