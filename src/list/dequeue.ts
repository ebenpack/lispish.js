/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Given a cons list, returns a new cons list
 * with the first item removed
 * @param  {cons} L
 * @return {cons}
 */
export = function dequeue(L : cons) : cons {
    return cdr(L);
}