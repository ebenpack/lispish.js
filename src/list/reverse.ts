/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Returns a new list, which is a
 * reversed copy of the list passed in.
 * @param  {cons} L
 * @return {cons}
 */
export default (L: Cons): Cons => {
  const helper = (L: Cons, rev: Cons): Cons =>
    L === null ? rev : helper(cdr(L), cons(car(L), rev));

  return helper(L, null);
};
