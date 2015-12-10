/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import args = require('../helpers/args');

/**
 * Returns a cons list constructed from the given parameters.
 * @return {cons}
 */
export = function list(...outerArgs: any[]) : cons{
    function helper(args : any[]) : cons {
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