/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the front of the list.
 * @param  {cons} L
 * @param  {*} val
 * @return {cons}
 */
export = function enqueue (L : cons, val : any) : cons {
    return cons(val, L);
}