var cons = require('../src/cons/cons.js');
var car = require('../src/cons/car.js');
var cdr = require('../src/cons/cdr.js');
var pair = require('../src/cons/pair.js');
var print = require('../src/cons/print.js');
var equal = require('../src/cons/equal.js');
var assert = require('assert');

suite('cons', function(){
    var linkedList, tree, simpleCons, doubleCons;
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
            assert.ok(simpleCons instanceof cons);
            assert.ok(doubleCons instanceof cons);
            assert.equal(simpleCons.car, 1);
            assert.equal(simpleCons.cdr, 2);
            assert.ok(doubleCons.car instanceof cons);
            assert.ok(doubleCons.cdr instanceof cons);
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
            assert.equal(linkedList.car, 1);
            assert.equal(linkedList.cdar, 2);
            assert.equal(linkedList.cddar, 3);
            assert.equal(linkedList.cdddar, 4);
            assert.ok(linkedList.cdr instanceof cons);

            assert.equal(tree.caaar, 1);
            assert.equal(tree.cadar, 2);
            assert.equal(tree.cdaar, 3);
            assert.equal(tree.cddar, 4);

            assert.equal(tree.caaar, car(car(car(tree))));
            assert.equal(tree.cadar, car(cdr(car(tree))));
            assert.equal(tree.cdaar, car(car(cdr(tree))));
            assert.equal(tree.cddar, car(cdr(cdr(tree))));
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