var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

function peek(L){
    if (cdr(L) === null){
        return car(L);
    } else {
        return peek(cdr(L));
    }
}

module.exports = peek;