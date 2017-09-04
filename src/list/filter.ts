/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Returns a new cons list consisting of the values
 * of the given cons list for which the the callback function,
 * called passing the value of each item in the list in turn,
 * evaluated to true.
 * @param  {Function} fn
 * @param  {Cons} L
 * @return {Cons}
 */
const filter = (fn: (currentValue: any) => boolean, L: Cons): Cons =>
    L === null
        ? L
        : cdr(L) === null
          ? fn(car(L)) ? cons(car(L), null) : null
          : fn(car(L)) ? cons(car(L), filter(fn, cdr(L))) : filter(fn, cdr(L));

export default filter;
