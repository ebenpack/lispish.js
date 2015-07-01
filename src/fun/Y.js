var apply = require('./apply');
var args = require('../helpers/args');
var list = require('../list/list');

function Y(f) {
    return f((function(h) {
        return function() {
            return apply(f(h(h)), list(args(arguments)));
        };
    })(function(h) {
        return function() {
            return apply(f(h(h)), list(args(arguments)));
        };
    }));
}

module.exports = Y;