/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');
import list = require('./list');

/**
 * Given a cons list, returns a new list with the last item removed.
 * @param  {cons} L
 * @return {cons}
 */
export = function pop(L : cons) : cons {
    if (cdr(L) === null){
        return null;
    } else {
        return cons(car(L), pop(cdr(L)));
    }
}