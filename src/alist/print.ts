
/// <reference path="../cons.d.ts" />

import car from '../cons/car';
import cdr from '../cons/cdr';
import pair from '../cons/pair';

/**
 * Returns a string representation of the
 * given association list. Currently, some
 * assumptions are made about the given list.
 * Namely, that the values are either primitives or
 * nested association lists.
 * @param  {cons} L
 * @return {string}
 */
export default function print(L : Cons) : string {
    function getIndent(n : number) : string {
        return Array(n * 4).join(' ');
    }
    function helperOne(L : Cons, indent : number) : string{
        return '{\n' + helper(L, '', indent + 1) + '\n' + getIndent(indent) + '}';
    }
    function helper(L : Cons, spacer : string, indent : number) : string{
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