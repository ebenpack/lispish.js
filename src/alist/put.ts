/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');
import get = require('./get');


/**
 * Returns a new alist. If the given key
 * pair existed in the original list, the
 * value will be replaced with the one privded. Otherwise
 * the key-value pair will be added.
 * @param  {cons} L
 * @param  {*} key
 * @param  {*} value
 * @return {cons}
 */
export = function put(L : cons, key : any, value : any) : cons{
    function helper(L: cons, key: any, value: any) : cons {
        if (car(car(L)) === key){
            return cons(cons(key, value), cdr(L));
        } else {
            return cons(car(L), helper(cdr(L), key, value));
        }
    }
    if (get(L, key) === null){
        return cons(cons(key, value), L);
    } else {
        return helper(L, key, value);
    }
}