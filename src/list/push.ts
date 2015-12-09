/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');
import list = require('./list');

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the end.
 * @param  {cons} L
 * @param  {*} val
 * @return {cons}
 */
export = function push(L : cons, val : any) : cons {
    if (L === null){
        return cons(val, null);
    } else if (cdr(L) === null){
        return cons(car(L), cons(val, null));
    } else {
        return cons(car(L), push(cdr(L), val));
    }
}