/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";
import list from "../list/list";

/**
 * Given two cons lists, returns a new cons list composed of
 * cons pairs consisting of positionally determined elements
 * from each of the given lists. The resulting list will only contain
 * as many elements as contained in the shorter of the two lists.
 * @param  {cons} L1
 * @param  {cons} L2
 * @return {cons}
 */
const zip = (L1: Cons, L2: Cons): Cons =>
  L1 === null || L2 === null
    ? null
    : cdr(L1) === null || cdr(L2) === null
      ? cons(cons(car(L1), car(L2)), null)
      : cons(cons(car(L1), car(L2)), zip(cdr(L1), cdr(L2)));

export default zip;
