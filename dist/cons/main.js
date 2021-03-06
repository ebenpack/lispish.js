"use strict";
exports.__esModule = true;
var cons_1 = require("./cons");
var car_1 = require("./car");
var cdr_1 = require("./cdr");
var print_1 = require("./print");
var equal_1 = require("./equal");
var pair_1 = require("./pair");
var isempty_1 = require("./isempty");
var nil_1 = require("./nil");
var compose_1 = require("../fun/compose");
exports.cons = cons_1["default"];
exports.car = car_1["default"];
exports.cdr = cdr_1["default"];
exports.caar = compose_1["default"](exports.car, exports.car);
exports.cadr = compose_1["default"](exports.car, exports.cdr);
exports.cdar = compose_1["default"](exports.cdr, exports.car);
exports.cddr = compose_1["default"](exports.cdr, exports.cdr);
exports.caaar = compose_1["default"](exports.car, compose_1["default"](exports.car, exports.car));
exports.caadr = compose_1["default"](exports.car, compose_1["default"](exports.car, exports.cdr));
exports.cadar = compose_1["default"](exports.car, compose_1["default"](exports.cdr, exports.car));
exports.caddr = compose_1["default"](exports.car, compose_1["default"](exports.cdr, exports.cdr));
exports.cdaar = compose_1["default"](exports.cdr, compose_1["default"](exports.car, exports.car));
exports.cdadr = compose_1["default"](exports.cdr, compose_1["default"](exports.car, exports.cdr));
exports.cddar = compose_1["default"](exports.cdr, compose_1["default"](exports.cdr, exports.car));
exports.cdddr = compose_1["default"](exports.cdr, compose_1["default"](exports.cdr, exports.cdr));
exports.caaaar = compose_1["default"](exports.car, compose_1["default"](exports.car, compose_1["default"](exports.car, exports.car)));
exports.caaadr = compose_1["default"](exports.car, compose_1["default"](exports.car, compose_1["default"](exports.car, exports.cdr)));
exports.caadar = compose_1["default"](exports.car, compose_1["default"](exports.car, compose_1["default"](exports.cdr, exports.car)));
exports.caaddr = compose_1["default"](exports.car, compose_1["default"](exports.car, compose_1["default"](exports.cdr, exports.cdr)));
exports.cadaar = compose_1["default"](exports.car, compose_1["default"](exports.cdr, compose_1["default"](exports.car, exports.car)));
exports.cadadr = compose_1["default"](exports.car, compose_1["default"](exports.cdr, compose_1["default"](exports.car, exports.cdr)));
exports.caddar = compose_1["default"](exports.car, compose_1["default"](exports.cdr, compose_1["default"](exports.cdr, exports.car)));
exports.cadddr = compose_1["default"](exports.car, compose_1["default"](exports.cdr, compose_1["default"](exports.cdr, exports.cdr)));
exports.cdaaar = compose_1["default"](exports.cdr, compose_1["default"](exports.car, compose_1["default"](exports.car, exports.car)));
exports.cdaadr = compose_1["default"](exports.cdr, compose_1["default"](exports.car, compose_1["default"](exports.car, exports.cdr)));
exports.cdadar = compose_1["default"](exports.cdr, compose_1["default"](exports.car, compose_1["default"](exports.cdr, exports.car)));
exports.cdaddr = compose_1["default"](exports.cdr, compose_1["default"](exports.car, compose_1["default"](exports.cdr, exports.cdr)));
exports.cddaar = compose_1["default"](exports.cdr, compose_1["default"](exports.cdr, compose_1["default"](exports.car, exports.car)));
exports.cddadr = compose_1["default"](exports.cdr, compose_1["default"](exports.cdr, compose_1["default"](exports.car, exports.cdr)));
exports.cdddar = compose_1["default"](exports.cdr, compose_1["default"](exports.cdr, compose_1["default"](exports.cdr, exports.car)));
exports.cddddr = compose_1["default"](exports.cdr, compose_1["default"](exports.cdr, compose_1["default"](exports.cdr, exports.cdr)));
exports.print = print_1["default"];
exports.equal = equal_1["default"];
exports.pair = pair_1["default"];
exports.isEmpty = isempty_1["default"];
exports.nil = nil_1["default"];
