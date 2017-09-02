
/// <reference path="../cons.d.ts" />

import pair from './pair';
import cdr from './cdr';
import car from './car';

interface Options {
    prefix?: string;
    suffix?: string;
    separator?: string;
}

/**
 * Returns a string representation of a cons.
 * cons prefix, suffix, and separator can all
 * optionally be defined by the user.
 * @param  {cons} c    cons to be printed
 * @param  {(Object|undefined)} options Optional options object
 * @return {string}      String representation of the given cons
 */
// TODO: Make more functional

function print(c: Cons, options?: Options): string {
    var opts = options || {};
    var prefix = typeof opts.prefix !== 'undefined' ? opts.prefix : '(';
    var suffix = typeof opts.suffix !== 'undefined' ? opts.suffix : ')';
    var separator = typeof opts.separator !== 'undefined' ? opts.separator : ',';

    function printHelper(c : Cons, separator : string) : string {
        var cdrResult = '';
        var carResult = '';
        if (pair(c)) {
            var cdrL = cdr(c);
            var carL = car(c);

            if (pair(carL)) {
                carResult = printHelper(carL, separator);
            } else if (carL !== null) {
                carResult = carL.toString();
            }
            if (pair(cdrL)) {
                cdrResult = printHelper(cdrL, separator);
            } else if (cdrL !== null) {
                cdrResult = cdrL.toString();
            }
            if (carResult === '' || cdrResult === '') {
                separator = '';
            }
        }
        return prefix + carResult + separator + cdrResult + suffix;
    }
    return printHelper(c, separator);
}

export default print;