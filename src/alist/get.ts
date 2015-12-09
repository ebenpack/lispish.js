/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import car = require('../cons/car');
import cdr = require('../cons/cdr');
import equal = require('../cons/equal');

/**
 * Finds and returns the first key-value pair
 * which has a key matching that passed in.
 * Returns false if no match is found.
 * @param  {cons} L
 * @param  {*} key
 * @return {cons}
 */
export = function get(L : cons, key : any) : cons {
    if (L === null){
        return null;
    } else {
        if (equal(car(car(L)), key)){
            return cdr(car(L));
        } else {
            return get(cdr(L), key);
        }
    }
}