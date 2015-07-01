var cons = require('../src/cons/cons');
var car = require('../src/cons/car');
var cdr = require('../src/cons/cdr');
var print = require('../src/cons/print');
var equal = require('../src/cons/equal');

var list = require('../src/list/list');
var range = require('../src/list/range');
var reduce = require('../src/list/reduce');

var compose = require('../src/fun/compose');
var apply = require('../src/fun/apply');
var curry = require('../src/fun/curry');
var Y = require('../src/fun/Y');

var argsHelper = require('../src/helpers/args');

var assert = require('assert');

suite('fun', function(){
    var fiveAdd, sixAdd, fourMul, sixMin, variadicAdd, fact, fib;
    setup(function(){
        addOne = function(a){
            return a+1;
        };
        mulTwo = function(a){
            return a*2;
        };
        fiveAdd = function(a,b,c,d,e){
            return a+b+c+d+e;
        };
        variadicAdd = function(){
            return reduce(
                list(argsHelper(arguments)),
                function(a,b){return a + b;},
                0
            );
        };
        fact = Y(function (fac) {
            return function (n) {
                return n <= 2 ? n : n * fac(n - 1);
            };
        });
        fib = Y(function(fibo){
            return function(n){
                return n <= 1 ? n : fibo(n-1) + fibo(n-2);
            };
        });
    });
    suite('fun', function(){
        test('curry', function(){
            var c1 = curry(fiveAdd);
            var c12 = c1(1)(2)(3)(4);
            var c5 = curry(variadicAdd, 4);
            var c52 = c5(1)(2)(3);

            assert.equal(c12(5), 15);
            assert.equal(c12(10), 20);
            assert.equal(c12(20), 30);

            assert.equal(c52(4), 10);
            assert.equal(c52(14), 20);
            assert.equal(c52(29), 35);
        });
        test('compose', function(){
            var c = compose(addOne,mulTwo);
            assert.equal(c(2), 5);
            assert.equal(c(3), 7);
            assert.equal(c(4), 9);
        });
        test('apply', function(){
            assert.equal(apply(variadicAdd, range(6)), 15);
            assert.equal(apply(variadicAdd, range(-10, 11)), 0);
            assert.equal(apply(variadicAdd, range(0,21,2)), 110);
        });
        test('Y', function(){
            assert.equal(fact(5), 120);
            assert.equal(fact(4), 24);
            assert.equal(fact(3), 6);
            assert.equal(fib(4), 3);
            assert.equal(fib(5), 5);
            assert.equal(fib(6), 8);
            assert.equal(fib(7), 13);
            assert.equal(fib(8), 21);
            assert.equal(fib(9), 34);
        });
    });
});