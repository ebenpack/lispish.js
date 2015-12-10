/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import cons = require('../cons/cons');
import car = require('../cons/car');
import cdr = require('../cons/cdr');
import length = require('./length');

/**
 * Given a list, returns a new, sorted list.
 * Optionally, a custom comparison function can be passed.
 * By default, ascending sort if performed.
 * @param  {cons}   L
 * @param  {Function} fn
 * @return {cons}
 */
export = function sort(L: cons, fn?: (a: any, b: any) => boolean): cons {
    function merge(L1: cons, L2: cons, fn: (a: any, b: any) => boolean): cons {
        if (L1 === null) {
            return L2;
        } else if (L2 === null) {
            return L1;
        } else if (fn(car(L1), car(L2))) {
            return cons(car(L1), merge(cdr(L1), L2, fn));
        } else {
            return cons(car(L2), merge(L1, cdr(L2), fn));
        }
    }
    function split(L: cons, lo: number, hi: number): cons {
        function splitHelper(L: cons, lo: number, hi: number, curr: number): cons {
            if (curr < lo) {
                return splitHelper(cdr(L), lo, hi, curr + 1);
            } else if (curr === hi) {
                return null;
            } else {
                return cons(car(L), splitHelper(cdr(L), lo, hi, curr + 1));
            }
        }
        if (lo < hi && lo >= 0 && hi <= length(L)) {
            return splitHelper(L, lo, hi, 0);
        } else {
            return null;
        }
    }
    function msort(L: cons, fn: (a: any, b: any) => boolean, len: number) : cons {
        if (L === null || cdr(L) === null) {
            return L;
        } else {
            return merge(
                msort(split(L, 0, Math.floor(len / 2)), fn, Math.floor(len / 2)),
                msort(split(L, Math.floor(len / 2), len), fn, len - Math.floor(len / 2)),
                fn
            );
        }
    }
    if (typeof fn === 'undefined') {
        return msort(L, function(a, b) { return a < b; }, length(L));
    } else {
        return msort(L, fn, length(L));
    }
}