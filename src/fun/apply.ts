/// <reference path="../cons.d.ts" />

import car from "../cons/car";
import cdr from "../cons/cdr";

/**
 * Call the given function with the list of arguments supplied.
 * @param  {Function} fn
 * @param  {Cons}   args
 * @return {*}
 */
// TODO: Remove bind?
const apply = (fn: (a: any) => any, args: Cons): any => {
  const helper = (fn, args) =>
    cdr(args) === null
      ? fn(car(args))
      : apply(fn.bind(null, car(args)), cdr(args));
  return helper(fn, args);
};

export default apply;
