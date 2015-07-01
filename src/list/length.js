var cdr = require('../cons/cdr');
var reduce = require('./reduce');

/**
 * Returns the length of the given list
 * @param  {cons} l list
 * @return {integer}   length of the given list.
 */
function length(L){
    return reduce(L, function(curr, acc){return acc + 1;}, 0);
}

module.exports = length;