"use strict";
exports.__esModule = true;
var list_1 = require("../src/list/list");
var range_1 = require("../src/list/range");
var reduce_1 = require("../src/list/reduce");
var compose_1 = require("../src/fun/compose");
var apply_1 = require("../src/fun/apply");
var curry_1 = require("../src/fun/curry");
var Y_1 = require("../src/fun/Y");
var args_1 = require("../src/helpers/args");
var chai_1 = require("chai");
suite('fun', function () {
    var addOne = function (a) {
        return a + 1;
    };
    var mulTwo = function (a) {
        return a * 2;
    };
    fiveAdd = function (a, b, c, d, e) {
        return a + b + c + d + e;
    };
    var fiveAdd, sixAdd, fourMul, sixMin, variadicAdd, fact, fib;
    setup(function () {
        variadicAdd = function () {
            var args = Array.prototype.slice.call(arguments);
            return reduce_1["default"](list_1["default"](args_1["default"](args)), function (a, b) { return a + b; }, 0);
        };
        fact = Y_1["default"](function (fac) {
            return function (n) {
                return n <= 2 ? n : n * fac(n - 1);
            };
        });
        fib = Y_1["default"](function (fibo) {
            return function (n) {
                return n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
            };
        });
    });
    suite('fun', function () {
        test('curry', function () {
            var c1 = curry_1["default"](fiveAdd);
            var c12 = c1(1)(2)(3)(4);
            var c5 = curry_1["default"](variadicAdd, 4);
            var c52 = c5(1)(2)(3);
            chai_1.assert.equal(c12(5), 15);
            chai_1.assert.equal(c12(10), 20);
            chai_1.assert.equal(c12(20), 30);
            chai_1.assert.equal(c52(4), 10);
            chai_1.assert.equal(c52(14), 20);
            chai_1.assert.equal(c52(29), 35);
        });
        test('compose', function () {
            var c = compose_1["default"](addOne, mulTwo);
            chai_1.assert.equal(c(2), 5);
            chai_1.assert.equal(c(3), 7);
            chai_1.assert.equal(c(4), 9);
        });
        test('apply', function () {
            chai_1.assert.equal(apply_1["default"](variadicAdd, range_1["default"](6)), 15);
            chai_1.assert.equal(apply_1["default"](variadicAdd, range_1["default"](-10, 11)), 0);
            chai_1.assert.equal(apply_1["default"](variadicAdd, range_1["default"](0, 21, 2)), 110);
        });
        test('Y', function () {
            chai_1.assert.equal(fact(5), 120);
            chai_1.assert.equal(fact(4), 24);
            chai_1.assert.equal(fact(3), 6);
            chai_1.assert.equal(fib(4), 3);
            chai_1.assert.equal(fib(5), 5);
            chai_1.assert.equal(fib(6), 8);
            chai_1.assert.equal(fib(7), 13);
            chai_1.assert.equal(fib(8), 21);
            chai_1.assert.equal(fib(9), 34);
        });
    });
});
