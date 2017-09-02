
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import car from '../cons/car';
import cdr from '../cons/cdr';
import get from './get';


/**
 * Returns a new alist. If the given key
 * pair existed in the original list, the
 * value will be replaced with the one privded. Otherwise
 * the key-value pair will be added.
 * @param  {cons} L
 * @param  {*} key
 * @param  {*} value
 * @return {cons}
 */
export default function put(L : Cons, key : any, value : any) : Cons{
    function helper(L: Cons, key: any, value: any) : Cons {
        if (car(car(L)) === key){
            return cons(cons(key, value), cdr(L));
        } else {
            return cons(car(L), helper(cdr(L), key, value));
        }
    }
    if (get(L, key) === null){
        return cons(cons(key, value), L);
    } else {
        return helper(L, key, value);
    }
}