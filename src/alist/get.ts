/// <reference path="../cons.d.ts" />

import car from "../cons/car";
import cdr from "../cons/cdr";
import equal from "../cons/equal";

/**
 * Finds and returns the first key-value pair
 * which has a key matching that passed in.
 * Returns false if no match is found.
 * @param  {cons} L
 * @param  {*} key
 * @return {cons}
 */
const get = (L: Cons, key: any): any =>
  L === null ? null : equal(car(car(L)), key) ? cdr(car(L)) : get(cdr(L), key);

export default get;
