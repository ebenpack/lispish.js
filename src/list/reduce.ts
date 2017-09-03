/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Applies the given callback function against an accumulator
 * and each value of the cons list (from left-to-right) in order
 * to reduce it to a single value.
 * @param  {cons} L
 * @param  {Function} fn
 * @param  {*}   acc
 * @return {cons}
 */
// TODO: make foldl and folr
export default (L: Cons, fn: (current: any, prev: any) => any, acc: any) => {
  const reduceHelper = (
    L: Cons,
    fn: (current: any, prev: any) => any,
    acc: any
  ) =>
    L === null
      ? acc
      : cdr(L) === null
        ? fn(car(L), acc)
        : reduceHelper(cdr(L), fn, fn(car(L), acc));
  return typeof acc === "undefined"
    ? reduceHelper(L, fn, 0)
    : reduceHelper(L, fn, acc);
};
