// cons
exports.cons = Object.create(null);
exports.cons.cons = require('./cons/cons');
exports.cons.car = require('./cons/car');
exports.cons.cdr = require('./cons/cdr');
exports.cons.print = require('./cons/print');
exports.cons.equal = require('./cons/equal');
exports.cons.pair = require('./cons/pair');

var compositions = require('./cons/compositions');
Object.keys(compositions).forEach(function(key) {
    exports.cons[key] = compositions[key];
});

// helpers
exports.helpers = Object.create(null);
exports.helpers.args = require('./helpers/args');

// list
exports.list = Object.create(null);
exports.list.list = require('./list/list');
exports.list.length = require('./list/length');
exports.list.range = require('./list/range');
exports.list.map = require('./list/map');
exports.list.reduce = require('./list/reduce');
exports.list.filter = require('./list/filter');
exports.list.peek = require('./list/peek');
exports.list.push = require('./list/push');
exports.list.pop = require('./list/pop');
exports.list.zip = require('./list/zip');
exports.list.some = require('./list/some');
exports.list.every = require('./list/every');
exports.list.reverse = require('./list/reverse');
exports.list.concat = require('./list/concat');
exports.list.enqueue = require('./list/enqueue');
exports.list.dequeue = require('./list/dequeue');
exports.list.slice = require('./list/slice');
exports.list.sort = require('./list/sort');
exports.list.contains = require('./list/contains');

// fun
exports.fun = Object.create(null);
exports.fun.compose = require('./fun/compose');
exports.fun.apply = require('./fun/apply');
exports.fun.curry = require('./fun/curry');
exports.fun.Y = require('./fun/Y');