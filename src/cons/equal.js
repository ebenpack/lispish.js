var cons = require('./cons.js');
var pair = require('./pair.js');
var cdr = require('./cdr.js');
var car = require('./car.js');

function equal(a, b){
    if (pair(a) !== pair(b)){
        return false;
    }
    if (pair(a) && pair(car(a)) !== pair(b) && pair(car(b))){
        return false;
    }
    if (pair(a) && pair(cdr(a)) !== pair(b) && pair(cdr(b))){
        return false;
    }

    if (pair(a)){
        return equal(car(a), car(b)) && equal(cdr(a), cdr(b));
    } else {
        return a === b;
    }
}

module.exports = equal;