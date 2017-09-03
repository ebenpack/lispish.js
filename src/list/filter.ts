/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Returns a new cons list consisting of the values
 * of the given cons list for which the the callback function,
 * called passing the value of each item in the list in turn,
 * evaluated to true.
 * @param  {cons} L
 * @param  {Function} fn
 * @return {cons}
 */
const filter = (L: Cons, fn: (currentValue: any) => boolean): Cons =>
  L === null
    ? L
    : cdr(L) === null
      ? fn(car(L)) ? cons(car(L), null) : null
      : fn(car(L)) ? cons(car(L), filter(cdr(L), fn)) : filter(cdr(L), fn);

export default filter;
