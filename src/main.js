var cons = require('./cons/cons.js');
var car = require('./cons/car.js');
var cdr = require('./cons/cdr.js');
var print = require('./cons/print.js');

var list = require('./list/list.js');
var map = require('./list/map.js');
var reduce = require('./list/reduce.js');
var filter = require('./list/filter.js');
var peek = require('./list/peek.js');
var push = require('./list/push.js');
var pop = require('./list/pop.js');

exports.cons = cons;
exports.car = car;
exports.cdr = cdr;
exports.print = print;

exports.list = list;
exports.map = map;
exports.reduce = reduce;
exports.filter = filter;
exports.peek = peek;
exports.push = push;
exports.pop = pop;