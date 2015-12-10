/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Given two cons lists, returns a new cons list composed of
 * cons pairs consisting of positionally determined elements
 * from each of the given lists. The resulting list will only contain
 * as many elements as contained in the shorter of the two lists.
 * @param  {cons} L1
 * @param  {cons} L2
 * @return {cons}
 */
export = function zip(L1 : cons, L2 : cons) : cons {
    if (L1 === null || L2 === null){
        return null;
    } else if (cdr(L1) === null || cdr(L2) === null){
        return null;
    } else {
        return cons(cons(car(L1), car(L2)), zip(cdr(L1), cdr(L2)));
    }
}