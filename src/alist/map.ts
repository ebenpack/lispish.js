/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";
import listMap from "../list/map";

/**
 * Map over an association list.
 * @param {alist} L
 * @param {Function} fn
 * @return {list}
 */
const map = (L: Cons, fn: (key: any, val: any) => any): Cons =>
  listMap(L, v => cons(car(v), fn(car(v), cdr(v))));

export default map;
