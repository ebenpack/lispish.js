/// <reference path="../cons.d.ts" />

import cons from "../cons/cons";

/**
 * Returns a range list from n to m.
 * @param  {integer} n If m in not passed, the end of the range (exlusive),
 * otherwise the start of the range (inclusive).
 * @param  {(integer|undefined)} m If passed, the end of the range (exlusive).
 * @param {(integer|undefined)} step steps to take between each item in the range.
 * Defaults to 1.
 * @return {cons} List from n to m.
 */
export default (m: number, n?: number, step?: number) => {
  const abs = (n: number): number => (n < 0 ? -n : n);
  const rangeHelper = (m: number, n: number, step: number) =>
    m === n
      ? null
      : goodStep(m, n, step)
        ? cons(m, rangeHelper(m + step, n, step))
        : cons(m, null);

  const goodStep = (start: number, stop: number, step: number) =>
    abs(stop - start) > abs(stop - (start + step));

  const stepHelper = (m: number, step: number, n?: number) =>
    typeof n === "undefined"
      ? goodStep(0, m, step) ? rangeHelper(0, m, step) : null
      : goodStep(m, n, step) ? rangeHelper(m, n, step) : null;

  return typeof step === "undefined"
    ? stepHelper(m, 1, n)
    : stepHelper(m, step, n);
};
