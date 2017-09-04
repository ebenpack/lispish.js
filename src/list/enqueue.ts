/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the front of the list.
 * @param  {*} val
 * @param  {cons} L
 * @return {cons}
 */
export default (val: any, L: Cons): Cons => cons(val, L);
