/// <reference path="../cons.d.ts" />

import pair from "../cons/pair";
import consEqual from "../cons/equal";
import car from "../cons/car";
import cdr from "../cons/cdr";
import every from "../list/every";
import get from "./get";

/**
 * Returns an association list with a single key-value pair.
 * @param {Cons} L1
 * @param {Cons} L2
 * @return {cons}
 */
export default (L1: Cons, L2: Cons): boolean =>
  every(L1, val => pair(val) && consEqual(get(L2, car(val)), cdr(val))) &&
  every(L2, val => pair(val) && consEqual(get(L1, car(val)), cdr(val)));
