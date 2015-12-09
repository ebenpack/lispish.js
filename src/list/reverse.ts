/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Returns a new list, which is a
 * reversed copy of the list passed in.
 * @param  {cons} L
 * @return {cons}
 */
export = function reverse(L : cons) : cons {
    function helper(L : cons, rev : cons) : cons {
        if (L === null){
            return rev;
        } else {
            return helper(cdr(L), cons(car(L), rev));
        }
    }
    return helper(L, null);
}