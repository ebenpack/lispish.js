/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Applies the given callback function against an accumulator
 * and each value of the cons list (from right-to-left) in order
 * to reduce it to a single value.
 * @param  {cons} L
 * @param  {Function} fn
 * @param  {*}   acc
 * @return {cons}
 */
// TODO: make foldl and folr
const foldr = (L: Cons, fn: (val: any, acc: any) => any, acc: any) =>
  L === null
    ? acc
    : cdr(L) === null ? fn(car(L), acc) : fn(car(L), foldr(cdr(L), fn, acc));

export default foldr;
