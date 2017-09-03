/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";
import get from "./get";

/**
 * Returns a new alist. If the given key
 * pair existed in the original list, the
 * value will be replaced with the one privded. Otherwise
 * the key-value pair will be added.
 * @param  {cons} L
 * @param  {*} key
 * @param  {*} value
 * @return {cons}
 */
export default (L: Cons, key: any, value: any): Cons => {
  const helper = (L: Cons, key: any, value: any): Cons =>
    car(car(L)) === key
      ? cons(cons(key, value), cdr(L))
      : cons(car(L), helper(cdr(L), key, value));
  return get(L, key) === null
    ? cons(cons(key, value), L)
    : helper(L, key, value);
};
