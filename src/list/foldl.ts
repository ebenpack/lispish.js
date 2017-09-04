/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Applies the given callback function against an accumulator
 * and each value of the cons list (from left-to-right) in order
 * to reduce it to a single value.
 * @param  {Function} fn
 * @param  {*}   acc
 * @param  {Cons} L
 * @return {Cons}
 */
const foldl = (fn: (acc: any, val: any) => any, acc: any, L: Cons) =>
  L === null
    ? acc
    : cdr(L) === null ? fn(acc, car(L)) : foldl(fn, fn(acc, car(L)), cdr(L));

export default foldl;
