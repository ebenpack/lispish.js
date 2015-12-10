/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

/**
 * Returns the cdr of a cons
 * @param  {cons} cons cons to be cdr'd
 * @return {*}      cdr value of the given cons
 */
export = function cdr(cons: cons) : any {
    return cons.cdr;
}