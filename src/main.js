// cons
exports.cons = require('./cons/cons.js');
exports.car = require('./cons/car.js');
exports.cdr = require('./cons/cdr.js');
exports.print = require('./cons/print.js');
exports.equal = require('./cons/equal.js');
exports.pair = require('./cons/pair.js');

var compositions = require('./cons/compositions.js');
Object.keys(compositions).forEach(function(key) {
    exports[key] = compositions[key];
});

// helpers
exports.args = require('./helpers/args.js');

// list
exports.list = require('./list/list.js');
exports.length = require('./list/length.js');
exports.range = require('./list/range.js');
exports.map = require('./list/map.js');
exports.reduce = require('./list/reduce.js');
exports.filter = require('./list/filter.js');
exports.peek = require('./list/peek.js');
exports.push = require('./list/push.js');
exports.pop = require('./list/pop.js');
exports.zip = require('./list/zip.js');
exports.reverse = require('./list/reverse.js');
exports.enqueue = require('./list/enqueue.js');
exports.dequeue = require('./list/dequeue.js');
exports.slice = require('./list/slice.js');

// fun
exports.compose = require('./fun/compose.js');
exports.apply = require('./fun/apply.js');
exports.curry = require('./fun/curry.js');

// math