/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";
import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Returns the value of the last item in a cons list.
 * @param  {Cons} L
 * @return {*}
 */
const peek = (L: Cons): any =>
  L === null ? L : cdr(L) === null ? car(L) : peek(cdr(L));

export default peek;
