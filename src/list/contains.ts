/// <reference path="../cons.d.ts" />

import equal from "../cons/equal";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Returns true if the specified value is equal to at least one element of the given list.
 * @param  {cons} L
 * @param  {*} a
 * @return {Boolean}
 */
const contains = (L: Cons, a: any): boolean =>
  L === null ? false : equal(car(L), a) ? true : contains(cdr(L), a);

export default contains;
