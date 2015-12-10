/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import car = require('../cons/car');
import cdr = require('../cons/cdr');
import pair = require('../cons/pair');

/**
 * Returns a string representation of the
 * given association list. Currently, some
 * assumptions are made about the given list.
 * Namely, that the values are either primitives or
 * nested association lists.
 * @param  {cons} L
 * @return {string}
 */
export = function print(L : cons) : string {
    function getIndent(n : number) : string {
        return Array(n * 4).join(' ');
    }
    function helperOne(L : cons, indent : number) : string{
        return '{\n' + helper(L, '', indent + 1) + '\n' + getIndent(indent) + '}';
    }
    function helper(L : cons, spacer : string, indent : number) : string{
        if (L === null){
            return '';
        } else {
            if (pair(cdr(car(L)))){
                return spacer +
                    getIndent(indent) +
                    car(car(L)) +
                    ': ' +
                    helperOne(cdr(car(L)), indent) +
                    helper(cdr(L), ',\n', indent);
            } else {
                return spacer +
                    getIndent(indent) +
                    car(car(L)) +
                    ': ' +
                    cdr(car(L)) +
                    helper(cdr(L), ',\n', indent);
            }
        }
    }
    return helperOne(L, 0);
}