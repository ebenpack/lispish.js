/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Map over an association list.
 * @param {alist} L
 * @param {Function} fn
 * @return {list}
 */
const map = (L: Cons, fn: (key: any, val: any) => any): Cons =>
  L === null
    ? L
    : cdr(car(L)) === null
      ? cons(fn(car(car(L)), null), null)
      : cons(fn(car(car(L)), cdr(car(L))), map(cdr(L), fn));

export default map;
