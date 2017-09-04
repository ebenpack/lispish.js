/// <reference path="../cons.d.ts" />

import pair from "./pair";
import cdr from "./cdr";
import car from "./car";

interface Options {
  prefix?: string;
  suffix?: string;
  separator?: string;
  nil?: string;
}

/**
 * Returns a string representation of a cons.
 * cons prefix, suffix, and separator can all
 * optionally be defined by the user.
 * @param  {cons} c    cons to be printed
 * @param  {(Object|undefined)} options Optional options object
 * @return {string}      String representation of the given cons
 */

const print = (c: Cons, options?: Options): string => {
  const opts = options || {};

  const printHelper = (c: Cons, separator: string, nil: string): string => {
    const carResult = pair(c)
      ? pair(car(c))
        ? printHelper(car(c), separator, nil)
        : car(c) !== null ? car(c).toString() : nil
      : "";
    const cdrResult = pair(c)
      ? pair(cdr(c))
        ? printHelper(cdr(c), separator, nil)
        : cdr(c) !== null ? cdr(c).toString() : nil
      : "";
    const newSeparator = carResult === "" || cdrResult === "" ? "" : separator;
    return (
      (typeof opts.prefix !== "undefined" ? opts.prefix : "(") +
      carResult +
      newSeparator +
      cdrResult +
      (typeof opts.suffix !== "undefined" ? opts.suffix : ")")
    );
  };
  return printHelper(
    c,
    typeof opts.separator !== "undefined" ? opts.separator : " . ",
    typeof opts.nil !== "undefined" ? opts.nil : "()"
  );
};

export default print;
