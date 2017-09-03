/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the front of the list.
 * @param  {cons} L
 * @param  {*} val
 * @return {cons}
 */
export default (L: Cons, val: any): Cons => cons(val, L);
