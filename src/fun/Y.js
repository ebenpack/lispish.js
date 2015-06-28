var apply = require('./apply.js');
var args = require('../helpers/args.js');

function Y(f) {
    return f((function(h) {
        return function() {
            return apply(f(h(h)), list(args(arguments)));
        }
    })(function(h) {
        return function() {
            return apply(f(h(h)), list(args(arguments)));
        }
    }));
}

module.exports = Y;