/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import equal = require('../cons/equal');
import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Returns true if the specified value is equal to at least one element of the given list.
 * @param  {cons} L
 * @param  {*} a
 * @return {Boolean}
 */
export = function contains(L : cons, a : any) : boolean{
    if (L === null){
        return false;
    } else {
        if (equal(car(L), a)){
            return true;
        } else {
            return contains(cdr(L), a);
        }
    }
}