var cons = require('./cons.js');

function pair(c){
    return c.hasOwnProperty('car') && c.hasOwnProperty('cdr');
}

module.exports = pair;