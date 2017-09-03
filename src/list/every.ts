/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Returns true if every element in the list passes the
 * test implemented by the provided callback function.
 * The callback function is passed the current value
 * and the current index in the list.
 * @param  {cons} L
 * @param  {Function} fn
 * @return {boolean}
 */
export default (
  L: Cons,
  fn: (currentValue: any, idx?: number) => boolean
): boolean => {
  const helper = (
    L: Cons,
    fn: (currentValue: any, idx?: number) => boolean,
    idx: number
  ): boolean =>
    L === null ? true : !fn(car(L), idx) ? false : helper(cdr(L), fn, idx + 1);
  return helper(L, fn, 0);
};
