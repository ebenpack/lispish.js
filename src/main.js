// cons
exports.cons = Object.create(null);
exports.cons.cons = require('./cons/cons.js');
exports.cons.car = require('./cons/car.js');
exports.cons.cdr = require('./cons/cdr.js');
exports.cons.print = require('./cons/print.js');
exports.cons.equal = require('./cons/equal.js');
exports.cons.pair = require('./cons/pair.js');

var compositions = require('./cons/compositions.js');
Object.keys(compositions).forEach(function(key) {
    exports.cons[key] = compositions[key];
});

// helpers
exports.helpers = Object.create(null);
exports.helpers.args = require('./helpers/args.js');

// list
exports.list = Object.create(null);
exports.list.list = require('./list/list.js');
exports.list.length = require('./list/length.js');
exports.list.range = require('./list/range.js');
exports.list.map = require('./list/map.js');
exports.list.reduce = require('./list/reduce.js');
exports.list.filter = require('./list/filter.js');
exports.list.peek = require('./list/peek.js');
exports.list.push = require('./list/push.js');
exports.list.pop = require('./list/pop.js');
exports.list.zip = require('./list/zip.js');
exports.list.some = require('./list/some.js');
exports.list.every = require('./list/every.js');
exports.list.reverse = require('./list/reverse.js');
exports.list.concat = require('./list/concat.js');
exports.list.enqueue = require('./list/enqueue.js');
exports.list.dequeue = require('./list/dequeue.js');
exports.list.slice = require('./list/slice.js');
exports.list.sort = require('./list/sort.js');

// fun
exports.fun = Object.create(null);
exports.fun.compose = require('./fun/compose.js');
exports.fun.apply = require('./fun/apply.js');
exports.fun.curry = require('./fun/curry.js');

// math