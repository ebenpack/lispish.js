var cons = require('./cons.js');
var pair = require('./pair.js');
var cdr = require('./cdr.js');
var car = require('./car.js');

/**
 * Returns a boolean indicating whether to two given parameters
 * are equal. If the paramters are cons pairs, equality is determined
 * by the equality of their members.
 * @param  {*} a
 * @param  {*} b
 * @return {boolean}
 */
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