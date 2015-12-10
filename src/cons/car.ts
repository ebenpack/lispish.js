/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

/**
 * Returns the car of a cons
 * @param  {cons} cons cons to be car'd
 * @return {*}      car value of the given cons
 */

export = function car(cons: cons) : any {
    return cons.car;
}