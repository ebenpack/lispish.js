
/// <reference path="../cons.d.ts" />

import car from '../cons/car';
import cdr from '../cons/cdr';

/**
 * Call the given function with the list of arguments supplied.
 * @param  {Function} fn
 * @param  {cons}   args
 * @return {*}
 */
export default function apply(fn : (a: any)=>any, args : Cons) : any{
    function helper(fn, args){
        if (cdr(args) === null){
            return fn(car(args));
        } else {
            return apply(fn.bind(null, car(args)), cdr(args));
        }
    }
    return helper(fn, args);
}