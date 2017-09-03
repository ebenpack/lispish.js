/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Returns true if some element in the list passes the
 * test implemented by the provided callback function.
 * The callback function is passed the current value
 * and the current index in the list.
 * @param  {cons} L
 * @param  {Function} fn
 * @return {boolean}
 */
export default (
  L: Cons,
  fn: (currentValue: any, idx: number) => boolean
): boolean => {
  const someHelper = (
    L: Cons,
    fn: (currentValue: any, idx: number) => boolean,
    idx: number
  ): boolean =>
    L === null
      ? false
      : fn(car(L), idx) ? true : someHelper(cdr(L), fn, idx + 1);

  return someHelper(L, fn, 0);
};
