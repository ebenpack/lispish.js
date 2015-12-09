var cons = require('../build/cons/cons');
var car = require('../build/cons/car');
var cdr = require('../build/cons/cdr');
var c = require('../build/cons/compositions');
var pair = require('../build/cons/pair');
var print = require('../build/cons/print');
var equal = require('../build/cons/equal');
var assert = require('assert');

suite('cons', function(){
    var simpleCons, doubleCons, linkedList, tree;
    setup(function(){
        simpleCons = cons(1, 2);
        doubleCons = cons(cons(1, 2), cons(3, 4));
        linkedList = cons(1,
            cons(2,
                cons(3,
                    cons(4,
                        cons(5, null)))));
        tree = cons(
            cons(
                cons(1, null),
                cons(2, null)
            ),
            cons(
                cons(3, null),
                cons(4, null)
            )
        );
    });
    suite('cons', function(){
        test('cons', function(){
            assert.ok(pair(simpleCons));
            assert.ok(pair(doubleCons));
            assert.equal(simpleCons.car, 1);
            assert.equal(simpleCons.cdr, 2);
            assert.ok(pair(doubleCons.car));
            assert.ok(pair(doubleCons.cdr));
            assert.equal(doubleCons.car.car, 1);
            assert.equal(doubleCons.car.cdr, 2);
            assert.equal(doubleCons.cdr.car, 3);
            assert.equal(doubleCons.cdr.cdr, 4);
        });
    });
    suite('pair', function(){
        test('pair', function(){
            assert.ok(pair(simpleCons));
            assert.ok(pair(doubleCons));
            assert.ok(pair(car(doubleCons)));
            assert.ok(pair(cdr(doubleCons)));
            assert.ok(pair(linkedList));
            assert.ok(pair(tree));
            assert.ok(!pair(1));
            assert.ok(!pair('foo'));
            assert.ok(!pair(car(simpleCons)));
        });
    });
    test('equal', function(){
        assert.ok(equal(simpleCons, cons(1, 2)));
        assert.ok(equal(doubleCons, cons(cons(1, 2), cons(3, 4))));
    });
    suite('car/cdr', function(){
        test('car/cdr', function(){
            assert.equal(car(linkedList), 1);
            assert.equal(c.cdar(linkedList), 2);
            assert.equal(c.cddar(linkedList), 3);
            assert.equal(c.cdddar(linkedList), 4);
            assert.ok(pair(linkedList.cdr));

            assert.equal(c.caaar(tree), 1);
            assert.equal(c.cadar(tree), 2);
            assert.equal(c.cdaar(tree), 3);
            assert.equal(c.cddar(tree), 4);

            assert.equal(c.caaar(tree), car(car(car(tree))));
            assert.equal(c.cadar(tree), car(cdr(car(tree))));
            assert.equal(c.cdaar(tree), car(car(cdr(tree))));
            assert.equal(c.cddar(tree), car(cdr(cdr(tree))));
        });
    });
    suite('print', function(){
        test('print', function(){
            assert.equal('<1!2>', print(simpleCons, {separator:'!', prefix:'<', suffix:'>'}));
            assert.equal('[[1~2]~[3~4]]', print(doubleCons, {separator:'~', prefix:'[', suffix:']'}));
            assert.equal('1.2.3.4.5', print(linkedList, {separator:'.', prefix:'', suffix:''}));
            assert.equal('(1,(2,(3,(4,(5)))))', print(linkedList));
            assert.equal('(((1),(2)),((3),(4)))', print(tree));
        });
    });
});