"use strict";
exports.__esModule = true;
/// <r
var main_1 = require("../src/cons/main");
var chai_1 = require("chai");
suite('cons', function () {
    var simpleCons, doubleCons, linkedList, tree;
    setup(function () {
        simpleCons = main_1.cons(1, 2);
        doubleCons = main_1.cons(main_1.cons(1, 2), main_1.cons(3, 4));
        linkedList = main_1.cons(1, main_1.cons(2, main_1.cons(3, main_1.cons(4, main_1.cons(5, null)))));
        tree = main_1.cons(main_1.cons(main_1.cons(1, null), main_1.cons(2, null)), main_1.cons(main_1.cons(3, null), main_1.cons(4, null)));
    });
    suite('cons', function () {
        test('cons', function () {
            chai_1.assert.ok(main_1.pair(simpleCons));
            chai_1.assert.ok(main_1.pair(doubleCons));
            chai_1.assert.equal(main_1.car(simpleCons), 1);
            chai_1.assert.equal(main_1.cdr(simpleCons), 2);
            chai_1.assert.ok(main_1.pair(main_1.car(doubleCons)));
            chai_1.assert.ok(main_1.pair(main_1.cdr(doubleCons)));
            chai_1.assert.equal(main_1.car(main_1.car(doubleCons)), 1);
            chai_1.assert.equal(main_1.cdr(main_1.car(doubleCons)), 2);
            chai_1.assert.equal(main_1.car(main_1.cdr(doubleCons)), 3);
            chai_1.assert.equal(main_1.cdr(main_1.cdr(doubleCons)), 4);
        });
    });
    suite('pair', function () {
        test('pair', function () {
            chai_1.assert.ok(main_1.pair(simpleCons));
            chai_1.assert.ok(main_1.pair(doubleCons));
            chai_1.assert.ok(main_1.pair(main_1.car(doubleCons)));
            chai_1.assert.ok(main_1.pair(main_1.cdr(doubleCons)));
            chai_1.assert.ok(main_1.pair(linkedList));
            chai_1.assert.ok(main_1.pair(tree));
            chai_1.assert.ok(!main_1.pair(1));
            chai_1.assert.ok(!main_1.pair('foo'));
            chai_1.assert.ok(!main_1.pair(main_1.car(simpleCons)));
        });
    });
    test('equal', function () {
        chai_1.assert.ok(main_1.equal(simpleCons, main_1.cons(1, 2)));
        chai_1.assert.ok(main_1.equal(doubleCons, main_1.cons(main_1.cons(1, 2), main_1.cons(3, 4))));
    });
    suite('car/cdr', function () {
        test('car/cdr', function () {
            chai_1.assert.equal(main_1.car(linkedList), 1);
            chai_1.assert.equal(main_1.cdar(linkedList), 2);
            chai_1.assert.equal(main_1.cddar(linkedList), 3);
            chai_1.assert.equal(main_1.cdddar(linkedList), 4);
            chai_1.assert.ok(main_1.pair(main_1.cdr(linkedList)));
            chai_1.assert.equal(main_1.caaar(tree), 1);
            chai_1.assert.equal(main_1.cadar(tree), 2);
            chai_1.assert.equal(main_1.cdaar(tree), 3);
            chai_1.assert.equal(main_1.cddar(tree), 4);
            chai_1.assert.equal(main_1.caaar(tree), main_1.car(main_1.car(main_1.car(tree))));
            chai_1.assert.equal(main_1.cadar(tree), main_1.car(main_1.cdr(main_1.car(tree))));
            chai_1.assert.equal(main_1.cdaar(tree), main_1.car(main_1.car(main_1.cdr(tree))));
            chai_1.assert.equal(main_1.cddar(tree), main_1.car(main_1.cdr(main_1.cdr(tree))));
        });
    });
    suite('print', function () {
        test('print', function () {
            chai_1.assert.equal('<1!2>', main_1.print(simpleCons, { separator: '!', prefix: '<', suffix: '>' }));
            chai_1.assert.equal('[[1~2]~[3~4]]', main_1.print(doubleCons, { separator: '~', prefix: '[', suffix: ']' }));
            chai_1.assert.equal('1.2.3.4.5', main_1.print(linkedList, { separator: '.', prefix: '', suffix: '' }));
            chai_1.assert.equal('(1,(2,(3,(4,(5)))))', main_1.print(linkedList));
            chai_1.assert.equal('(((1),(2)),((3),(4)))', main_1.print(tree));
        });
    });
});
