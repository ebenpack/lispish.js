/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Applies the given callback function against an accumulator
 * and each value of the cons list (from right-to-left) in order
 * to reduce it to a single value.
 * @param  {Function} fn
 * @param  {*}   acc
 * @param  {Cons} L
 * @return {Cons}
 */
// TODO: make foldl and folr
const foldr = (fn: (val: any, acc: any) => any, acc: any, L: Cons) =>
  L === null
    ? acc
    : cdr(L) === null ? fn(car(L), acc) : fn(car(L), foldr(fn, acc, cdr(L)));

export default foldr;
