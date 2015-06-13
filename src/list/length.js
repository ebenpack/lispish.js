var cdr = require('../cons/cdr.js');
var reduce = require('./reduce.js');

/**
 * Returns the length of the given list
 * @param  {cons} l list
 * @return {integer}   length of the given list.
 */
function length(l){
    return reduce(l, function(curr, acc){return acc + 1;}, 0);
}

module.exports = length;