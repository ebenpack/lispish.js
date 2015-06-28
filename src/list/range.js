var cons = require('../cons/cons.js');

/**
 * Returns a range list from n to m.
 * @param  {integer} n If m in not passed, the end of the range (exlusive),
 * otherwise the start of the range (inclusive).
 * @param  {(integer|undefined)} m If passed, the end of the range (exlusive).
 * @param {(integer|undefined)} step steps to take between each item in the range.
 * Defaults to 1.
 * @return {cons}   List from n to m.
 */
function range(m, n, step){
    function rangeHelper(m, n, step){
        if (m === n){
            return null;
        } else if (goodStep(m, n, step)) {
            return cons(m, rangeHelper(m+step, n, step));
        } else {
            return cons(m, null);
        }
    }
    function goodStep(start, stop, step){
        return (abs(stop - start) > abs(stop - (start + step)));
    }
    function stepHelper(m, n, step){
        if (typeof n === 'undefined'){
            if (goodStep(0, m, step)) {
                return rangeHelper(0, m, step);
            } else {
                return null;
            }
        } else {
            if (goodStep(m, n, step)) {
                return rangeHelper(m, n, step);
            } else {
                return null;
            }
        }
    }
    if (typeof step === 'undefined'){
        return stepHelper(m, n, 1);
    } else {
        return stepHelper(m, n, step);
    }
}

function abs(n){
    if (n < 0){
        return -n;
    } else {
        return n;
    }
}

module.exports = range;