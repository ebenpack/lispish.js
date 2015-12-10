/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Returns a new list that is the result
 * of concatenating L2 onto the end of L1;
 * @param  {cons} L1
 * @param  {cons} L2
 * @return {cons}
 */
export = function concat(L1 : cons, L2 : cons) : cons {
    if (L1 === null){
        return L2;
    } else {
        return cons(car(L1), concat(cdr(L1), L2));
    }
}