/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cdr = require('../cons/cdr');
import reduce = require('./reduce');

/**
 * Returns the length of the given list
 * @param  {cons} l list
 * @return {integer}   length of the given list.
 */
export = function length(L : cons) : number {
    return reduce(L, function(curr, acc){return acc + 1;}, 0);
}