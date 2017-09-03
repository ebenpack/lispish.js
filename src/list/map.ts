/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Returns a new cons list with the results of calling the provided
 * function on every element.
 * @param  {cons} L  cons list to be mapped
 * @param  {Function} fn callback function
 * @return {cons}
 */
const map = (L: Cons, fn: (currentValue: any) => any): Cons =>
  L === null
    ? L
    : cdr(L) === null
      ? cons(fn(car(L)), null)
      : cons(fn(car(L)), map(cdr(L), fn));

export default map;
