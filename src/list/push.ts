/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";
import list from "./list";

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the end.
 * @param  {*} val
 * @param  {cons} L
 * @return {cons}
 */
const push = (val: any, L: Cons): Cons =>
  L === null
    ? cons(val, null)
    : cdr(L) === null
      ? cons(car(L), cons(val, null))
      : cons(car(L), push(val, cdr(L)));

export default push;
