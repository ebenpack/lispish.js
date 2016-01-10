/// <reference path="./typings/node/node.d.ts" />

import cons = require('./cons/cons');
import car = require('./cons/car');
import cdr = require('./cons/cdr');
import print = require('./cons/print');
import equal = require('./cons/equal');
import pair = require('./cons/pair');

exports.cons = Object.create(null);
exports.cons.cons = cons;
exports.cons.car = car;
exports.cons.cdr = cdr;
exports.cons.print = print;
exports.cons.equal = equal;
exports.cons.pair = pair;

// compositions (caar caadr, etc.)
import compositions = require('./cons/compositions');
Object.keys(compositions).forEach(function(key) {
    exports.cons[key] = compositions[key];
});


// helpers
import args = require('./helpers/args');
exports.helpers = Object.create(null);
exports.helpers.args = args;

// list
import list = require('./list/list');
import length = require('./list/length');
import range = require('./list/range');
import map = require('./list/map');
import reduce = require('./list/reduce');
import filter = require('./list/filter');
import peek = require('./list/peek');
import push = require('./list/push');
import pop = require('./list/pop');
import zip = require('./list/zip');
import some = require('./list/some');
import every = require('./list/every');
import reverse = require('./list/reverse');
import concat = require('./list/concat');
import enqueue = require('./list/enqueue');
import dequeue = require('./list/dequeue');
import slice = require('./list/slice');
import sort = require('./list/sort');
import contains = require('./list/contains');
import flatten = require('./list/flatten');

exports.list = Object.create(null);
exports.list.list = list;
exports.list.length = length;
exports.list.range = range;
exports.list.map = map;
exports.list.reduce = reduce;
exports.list.filter = filter;
exports.list.peek = peek;
exports.list.push = push;
exports.list.pop = pop;
exports.list.zip = zip;
exports.list.some = some;
exports.list.every = every;
exports.list.reverse = reverse;
exports.list.concat = concat;
exports.list.enqueue = enqueue;
exports.list.dequeue = dequeue;
exports.list.slice = slice;
exports.list.sort = sort;
exports.list.contains = contains;
exports.list.flatten = flatten;

// alist
import alist = require('./alist/alist');
import put = require('./alist/put');
import get = require('./alist/get');
import alistPrint = require('./alist/print');
import alistMap = require('./alist/map');

exports.alist = Object.create(null);
exports.alist.alist = alist;
exports.alist.put = put;
exports.alist.get = get;
exports.alist.print = alistPrint;
exports.alist.map = alistMap;

// fun
import compose = require('./fun/compose');
import apply = require('./fun/apply');
import curry = require('./fun/curry');
import Y = require('./fun/Y');

exports.fun = Object.create(null);
exports.fun.compose = compose;
exports.fun.apply = apply;
exports.fun.curry = curry;
exports.fun.Y = Y;
