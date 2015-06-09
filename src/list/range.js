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
function range(n, m, step){
    function rangeHelper(n, m, step){
        if (n === m){
            return null;
        } else if (goodStep(n, m, step)) {
            return cons(n, rangeHelper(n+step, m, step));
        } else {
            return cons(n, null);
        }
    }
    function goodStep(start, stop, step){
        return (abs(stop - start) > abs(stop - (start + step)))
    }
    function stepHelper(n, m, step){
        if (typeof m === 'undefined'){
            if (goodStep(0, n, step)) {
                return rangeHelper(0, n, step);
            } else {
                return null;
            }
        } else {
            if (goodStep(n, m, step)) {
                return rangeHelper(n, m, step);
            } else {
                return null;
            }
        }
    }
    if (typeof step === 'undefined'){
        return stepHelper(n, m, 1);
    } else {
        return stepHelper(n, m, step);
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