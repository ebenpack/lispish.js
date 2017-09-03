/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";
import list from "./list";

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the end.
 * @param  {cons} L
 * @param  {*} val
 * @return {cons}
 */
const push = (L: Cons, val: any): Cons =>
  L === null
    ? cons(val, null)
    : cdr(L) === null
      ? cons(car(L), cons(val, null))
      : cons(car(L), push(cdr(L), val));

export default push;
