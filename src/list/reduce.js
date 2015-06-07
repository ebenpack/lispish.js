var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

function reduce(L, fn, acc){
    function reduceHelper(L, fn, acc){
        if (cdr(L) === null){
            return fn(car(L), acc);
        } else {
            return reduce(cdr(L), fn, fn(car(L), acc));
        }
    }
    if (typeof acc === 'undefined'){
        return reduceHelper(L, fn, 0);
    } else {
        return reduceHelper(L, fn, acc);
    }
}

module.exports = reduce;