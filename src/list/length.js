var cdr = require('../cons/cdr.js');

/**
 * Returns the length of the given list
 * @param  {cons} l list
 * @return {integer}   length of the given list.
 */
function length(l){
    function lengthHelper(l, len){
        if (l === null){
            return len;
        } else {
            return lengthHelper(cdr(l), len + 1);
        }
    }
    return lengthHelper(l, 0);
}

module.exports = length;