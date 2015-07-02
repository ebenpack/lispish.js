var list = require('../list/list');
var cons = require('../cons/cons');

/**
 * Returns an association list with a single key-value pair.
 * @param {*} key
 * @param {*} value
 * @return {cons}
 */
function alist(key, value){
    return list(cons(key, value));
}

module.exports = alist;