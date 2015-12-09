/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import list = require('../list/list');
import cons = require('../cons/cons');

/**
 * Returns an association list with a single key-value pair.
 * @param {*} key
 * @param {*} value
 * @return {cons}
 */
export = function alist(key : any, value : any) : cons {
    return list(cons(key, value));
}