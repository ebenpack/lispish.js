var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

function zip(L1, L2){
    if (cdr(L1) === null || cdr(L2) === null){
        return null;
    } else {
        return cons(cons(car(L1), car(L2)), zip(cdr(L1), cdr(L2)));
    }
}

module.exports = zip;
