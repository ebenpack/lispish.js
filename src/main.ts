/// <reference path="./typings/node/node.d.ts" />

import cons = require('./cons/cons');
import car = require('./cons/car');
import cdr = require('./cons/cdr');
import print = require('./cons/print');
import equal = require('./cons/equal');
import pair = require('./cons/pair');

exports.cons = Object.create(null);
exports.cons = cons;
exports.car = car;
exports.cdr = cdr;
exports.print = print;
exports.equal = equal;
exports.pair = pair;

var compositions = require('./cons/compositions');
Object.keys(compositions).forEach(function(key) {
    exports.cons[key] = compositions[key];
});

// // helpers
// exports.helpers = Object.create(null);
// exports.helpers.args = require('./helpers/args');

// // list
// exports.list = Object.create(null);
// exports.list.list = require('./list/list');
// exports.list.length = require('./list/length');
// exports.list.range = require('./list/range');
// exports.list.map = require('./list/map');
// exports.list.reduce = require('./list/reduce');
// exports.list.filter = require('./list/filter');
// exports.list.peek = require('./list/peek');
// exports.list.push = require('./list/push');
// exports.list.pop = require('./list/pop');
// exports.list.zip = require('./list/zip');
// exports.list.some = require('./list/some');
// exports.list.every = require('./list/every');
// exports.list.reverse = require('./list/reverse');
// exports.list.concat = require('./list/concat');
// exports.list.enqueue = require('./list/enqueue');
// exports.list.dequeue = require('./list/dequeue');
// exports.list.slice = require('./list/slice');
// exports.list.sort = require('./list/sort');
// exports.list.contains = require('./list/contains');
// exports.list.flatten = require('./list/flatten');

// // alist
// exports.alist = Object.create(null);
// exports.alist.alist = require('./alist/alist');
// exports.alist.put = require('./alist/put');
// exports.alist.get = require('./alist/get');
// exports.alist.print = require('./alist/print');
// exports.alist.map = require('./alist/map');

// // fun
// exports.fun = Object.create(null);
// exports.fun.compose = require('./fun/compose');
// exports.fun.apply = require('./fun/apply');
// exports.fun.curry = require('./fun/curry');
// exports.fun.Y = require('./fun/Y');