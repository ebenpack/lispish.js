var cons = require('../cons/cons');
var car = require('../cons/car');
var cdr = require('../cons/cdr');
var pair = require('../cons/pair');
var concat = require('../list/concat');

/**
 * Flatten a list.
 * @return {cons}
 */
function flatten(L){
    if (L === null) {
        return null;
    } else if (!pair(car(L))) {
        return cons(car(L), flatten(cdr(L)));
    } else {
        return concat(flatten(car(L)), flatten(cdr(L)));
    }
}

module.exports = flatten;