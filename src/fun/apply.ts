/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Call the given function with the list of arguments supplied.
 * @param  {Function} fn
 * @param  {cons}   args
 * @return {*}
 */
export = function apply(fn : (a: any)=>any, args : cons) : any{
    function helper(fn, args){
        if (cdr(args) === null){
            return fn(car(args));
        } else {
            return apply(fn.bind(null, car(args)), cdr(args));
        }
    }
    return helper(fn, args);
}