/// <reference path="../cons.d.ts" />

import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Returns the value at the given index, or null if the index exceeds the
 * length of the list.
 * @param  {cons} L
 * @param  {number} idx
 * @return {boolean}
 */
const get = (L: Cons, idx: number): any =>
  L === null ? null : idx === 0 ? car(L) : get(cdr(L), idx - 1);

export default get;
