/// <reference path="../cons.d.ts" />

import cdr from "../cons/cdr";
import foldl from "./foldl";

/**
 * Returns the length of the given list
 * @param  {cons} l list
 * @return {integer}   length of the given list.
 */
export default (L: Cons): number => foldl(L, (acc, curr) => acc + 1, 0);
