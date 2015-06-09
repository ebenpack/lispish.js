var cons = require('./cons.js');

function pair(c){
    return typeof c !== 'undefined' &&
        c !== null &&
        Object.hasOwnProperty.call(c, 'car') &&
        Object.hasOwnProperty.call(c, 'cdr');
}

module.exports = pair;