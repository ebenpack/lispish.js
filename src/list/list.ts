
/// <reference path="../cons.d.ts" />

import cons from '../cons/cons';
import args from '../helpers/args';

/**
 * Returns a cons list constructed from the given parameters.
 * @return {cons}
 */
export default function list(...outerArgs: any[]) : Cons{
    function helper(args : any[]) : Cons {
        if (args.length === 0){
            return null;
        } else {
            if (Array.isArray(args[0])){
                return cons(helper(args[0]), helper(args.slice(1)));
            } else {
                return cons(args[0], helper(args.slice(1)));
            }
        }
    }
    if (outerArgs.length === 1 && Array.isArray(outerArgs[0])) {
        return helper(outerArgs[0]);
    } else {
        return helper(args(outerArgs));
    }
    
}