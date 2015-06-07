var cons = require('./cons.js');

function pair(c){
    return c instanceof cons;
}

module.exports = pair;