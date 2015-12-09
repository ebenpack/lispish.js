/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');

/**
 * Returns the value of the last item in a cons list.
 * @param  {cons} L
 * @return {*}
 */
export = function peek(L : cons) : any{
    if (L === null){
        return L;
    } if (cdr(L) === null){
        return car(L);
    } else {
        return peek(cdr(L));
    }
}