var cons = require('./cons.js');
var car = require('./car.js');
var cdr = require('./cdr.js');

/**
 * Returns a string representation of a cons.
 * cons prefix, suffix, and separator can all
 * optionally be defined by the user.
 * @param  {cons} c    cons to be printed
 * @param  {(Object|undefined)} options Optional options object
 * @return {string}      String representation of the given cons
 */
function print(c, options) {
    var opts = options || {};
    prefix = typeof opts.prefix !== 'undefined' ? opts.prefix : '(';
    suffix = typeof opts.suffix !== 'undefined' ? opts.suffix : ')';
    separator = typeof opts.separator !== 'undefined' ? opts.separator : ',';

    function printHelper(c, separator) {
        var cdrL = cdr(c);
        var carL = car(c);
        var cdrResult = '';
        var carResult = '';
        if (carL instanceof cons) {
            carResult = printHelper(carL, separator);
        } else if (carL !== null) {
            carResult = carL.toString();
        }
        if (cdrL instanceof cons) {
            cdrResult = printHelper(cdrL, separator);
        } else if (cdrL !== null) {
            cdrResult = cdrL.toString();
        }
        if (carResult === '' || cdrResult === '') {
            separator = '';
        }
        return prefix + carResult + separator + cdrResult + suffix;
    }
    return printHelper(c, separator);
}

module.exports = print;