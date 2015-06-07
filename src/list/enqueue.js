var cons = require('../cons/cons.js');

function enqueue (L, val) {
    return cons(val, L);
}

module.exports = enqueue;