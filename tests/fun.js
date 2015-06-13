var cons = require('../src/cons/cons.js');
var car = require('../src/cons/car.js');
var cdr = require('../src/cons/cdr.js');
var print = require('../src/cons/print.js');
var equal = require('../src/cons/equal.js');

var list = require('../src/list/list.js');
var range = require('../src/list/range.js');
var reduce = require('../src/list/reduce.js');

var compose = require('../src/fun/compose.js');
var apply = require('../src/fun/apply.js');
var curry = require('../src/fun/curry.js');

var argsHelper = require('../src/helpers/args.js');

var assert = require('assert');

suite('fun', function(){
    var fiveAdd, sixAdd, fourMul, sixMin, variadicAdd;
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

    });
});