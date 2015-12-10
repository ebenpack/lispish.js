/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Map over an association list.
 * @param {alist} L
 * @param {Function} fn
 * @return {list}
 */
export = function map(L : cons, fn : (key : any, val: any)=>any) : cons {
    if (L === null){
        return L;
    } else if (cdr(car(L)) === null){
        return cons(fn(car(car(L)), null), null);
    } else {
        return cons(fn(car(car(L)), cdr(car(L))), map(cdr(L), fn));
    }
}