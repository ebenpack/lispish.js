var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

function dequeue (L) {
    return cdr(L);
}

module.exports = dequeue;