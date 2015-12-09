/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');
import pair = require('../cons/pair');
import concat = require('./concat');

/**
 * Flatten a list.
 * @return {cons}
 */
export = function flatten(L : cons) : cons {
    if (L === null) {
        return null;
    } else if (!pair(car(L))) {
        return cons(car(L), flatten(cdr(L)));
    } else {
        return concat(flatten(car(L)), flatten(cdr(L)));
    }
}