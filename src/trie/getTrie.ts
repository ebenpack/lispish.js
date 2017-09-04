/// <reference path="../cons.d.ts" />

import car from "../cons/car";
import cdr from "../cons/cdr";
import flatten from "../list/flatten";
import get from "../alist/get";
import map from "../alist/map";

export default (T: Cons, str: Cons): Cons => {
    const getLeaves = (T: Cons, list: Cons): Cons =>
        T === null
            ? list
            : map(
                  (key, val) => (key === "_value" ? val : getLeaves(val, list)),
                  T
              );

    const descendToNode = (T: Cons, word: Cons) =>
        T === null
            ? null
            : word === null
              ? null
              : cdr(word) === null
                ? get(car(word), T)
                : descendToNode(get(car(word), T), cdr(word));

    return flatten(getLeaves(descendToNode(T, str), null));
};
