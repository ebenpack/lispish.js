/// <reference path="../cons.d.ts" />

import car from "../cons/car";
import cdr from "../cons/cdr";
import pair from "../cons/pair";

/**
 * Returns a string representation of the
 * given association list. Currently, some
 * assumptions are made about the given list.
 * Namely, that the values are either primitives or
 * nested association lists.
 * @param  {cons} L
 * @return {string}
 */
export default (L: Cons): string => {
  const getIndent = (n: number): string => Array(n * 4).join(" ");

  const helperOne = (L: Cons, indent: number): string =>
    "{\n" + helper(L, "", indent + 1) + "\n" + getIndent(indent) + "}";

  const helper = (L: Cons, spacer: string, indent: number): string =>
    L === null
      ? ""
      : pair(cdr(car(L)))
        ? spacer +
          getIndent(indent) +
          car(car(L)) +
          ": " +
          helperOne(cdr(car(L)), indent) +
          helper(cdr(L), ",\n", indent)
        : spacer +
          getIndent(indent) +
          car(car(L)) +
          ": " +
          cdr(car(L)) +
          helper(cdr(L), ",\n", indent);

  return helperOne(L, 0);
};
