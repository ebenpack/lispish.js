/// <reference path="../cons.d.ts" />

import cdr from "../cons/cdr";
import reduce from "./reduce";

/**
 * Returns the length of the given list
 * @param  {cons} l list
 * @return {integer}   length of the given list.
 */
export default (L: Cons): number => reduce(L, (curr, acc) => acc + 1, 0);
