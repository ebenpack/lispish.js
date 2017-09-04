/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";
import length from "./length";

/**
 * Given a list, returns a new, sorted list.
 * Optionally, a custom comparison function can be passed.
 * By default, ascending sort if performed.
 * @param  {Function} fn
 * @param  {cons} L
 * @return {cons}
 */
export default (fn: (a: any, b: any) => boolean, L: Cons): Cons => {
  const merge = (L1: Cons, L2: Cons, fn: (a: any, b: any) => boolean): Cons =>
    L1 === null
      ? L2
      : L2 === null
        ? L1
        : fn(car(L1), car(L2))
          ? cons(car(L1), merge(cdr(L1), L2, fn))
          : cons(car(L2), merge(L1, cdr(L2), fn));

  const split = (L: Cons, lo: number, hi: number): Cons => {
    const splitHelper = (L: Cons, lo: number, hi: number, curr: number): Cons =>
      curr < lo
        ? splitHelper(cdr(L), lo, hi, curr + 1)
        : curr === hi
          ? null
          : cons(car(L), splitHelper(cdr(L), lo, hi, curr + 1));
    return splitHelper(L, lo, hi, 0);
  };
  const msort = (L: Cons, fn: (a: any, b: any) => boolean, len: number): Cons =>
    L === null || cdr(L) === null
      ? L
      : merge(
          msort(split(L, 0, Math.floor(len / 2)), fn, Math.floor(len / 2)),
          msort(
            split(L, Math.floor(len / 2), len),
            fn,
            len - Math.floor(len / 2)
          ),
          fn
        );
  return msort(L, fn, length(L));
};
