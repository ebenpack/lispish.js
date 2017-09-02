"use strict";
exports.__esModule = true;
var cons_1 = require("../src/cons/cons");
var equal_1 = require("../src/cons/equal");
var list_1 = require("../src/list/list");
var length_1 = require("../src/list/length");
var range_1 = require("../src/list/range");
var map_1 = require("../src/list/map");
var reduce_1 = require("../src/list/reduce");
var filter_1 = require("../src/list/filter");
var peek_1 = require("../src/list/peek");
var push_1 = require("../src/list/push");
var pop_1 = require("../src/list/pop");
var zip_1 = require("../src/list/zip");
var some_1 = require("../src/list/some");
var every_1 = require("../src/list/every");
var reverse_1 = require("../src/list/reverse");
var slice_1 = require("../src/list/slice");
var concat_1 = require("../src/list/concat");
var enqueue_1 = require("../src/list/enqueue");
var dequeue_1 = require("../src/list/dequeue");
var sort_1 = require("../src/list/sort");
var contains_1 = require("../src/list/contains");
var chai_1 = require("chai");
suite('list', function () {
    var linkedList, linkedList2, linkedList3, linkedList4, linkedList5, filtered, emptyFiltered, addMapped, mulMapped, reduceAdd, reduceMul, zipped1, zipped2, linkedListP1, linkedListP2, linkedListE1, linkedListE2, consList, filteredCons, emptyFilteredCons, addMappedCons, mulMappedCons, zip1, zip2, zip3, enqueue1, enqueue2, dequeue1, dequeue2, pushed1, pushed2, popped1, popped2, range1, range2, range3, range4, badrange, steprange;
    setup(function () {
        linkedList = list_1["default"](1, 2, 3, 4, 5);
        linkedList2 = list_1["default"](6, 7, 8, 9, 10);
        linkedList3 = list_1["default"](6, 7, 8, 9, 10, 11, 12, 13, 14);
        linkedList4 = list_1["default"](11, 22, 33, 44, 55);
        linkedList5 = list_1["default"](11, 22, 33, 44, 55, 66, 77, 88, 99);
        range1 = range_1["default"](1, 6);
        range2 = range_1["default"](6, 15);
        range3 = range_1["default"](1, 8);
        range4 = range_1["default"](30);
        steprange = range_1["default"](11, 100, 11);
        badrange = range_1["default"](0, 10, -1);
        zipped1 = list_1["default"](cons_1["default"](6, 11), cons_1["default"](7, 22), cons_1["default"](8, 33), cons_1["default"](9, 44), cons_1["default"](10, 55));
        zipped2 = list_1["default"](cons_1["default"](11, 6), cons_1["default"](22, 7), cons_1["default"](33, 8), cons_1["default"](44, 9), cons_1["default"](55, 10), cons_1["default"](66, 11), cons_1["default"](77, 12), cons_1["default"](88, 13), cons_1["default"](99, 14));
        linkedListP1 = list_1["default"](1, 2, 3, 4, 5, 6);
        linkedListP2 = list_1["default"](1, 2, 3, 4, 5, 6, 7);
        linkedListE1 = list_1["default"](8, 1, 2, 3, 4, 5);
        linkedListE2 = list_1["default"](9, 8, 1, 2, 3, 4, 5);
        pushed1 = push_1["default"](linkedList, 6);
        pushed2 = push_1["default"](pushed1, 7);
        popped1 = pop_1["default"](pushed2);
        popped2 = pop_1["default"](popped1);
        enqueue1 = enqueue_1["default"](linkedList, 8);
        enqueue2 = enqueue_1["default"](enqueue1, 9);
        dequeue1 = dequeue_1["default"](enqueue2);
        dequeue2 = dequeue_1["default"](dequeue1);
        zip1 = zip_1["default"](linkedList2, linkedList5);
        zip2 = zip_1["default"](linkedList3, linkedList4);
        zip3 = zip_1["default"](linkedList5, linkedList3);
        popped1 = pop_1["default"](pushed2);
        popped2 = pop_1["default"](popped1);
        filtered = filter_1["default"](linkedList, function (n) { return n % 2 === 0; });
        emptyFiltered = filter_1["default"](linkedList, function () { return false; });
        addMapped = map_1["default"](linkedList, function (n) { return n + 10; });
        mulMapped = map_1["default"](linkedList, function (n) { return n * 10; });
        reduceAdd = reduce_1["default"](linkedList, function (a, b) { return a + b; }, 0);
        reduceMul = reduce_1["default"](linkedList, function (a, b) { return a * b; }, 1);
        consList = cons_1["default"](1, cons_1["default"](2, cons_1["default"](3, cons_1["default"](4, cons_1["default"](5, null)))));
        addMappedCons = cons_1["default"](11, cons_1["default"](12, cons_1["default"](13, cons_1["default"](14, cons_1["default"](15, null)))));
        mulMappedCons = cons_1["default"](10, cons_1["default"](20, cons_1["default"](30, cons_1["default"](40, cons_1["default"](50, null)))));
        filteredCons = cons_1["default"](2, cons_1["default"](4, null));
        emptyFilteredCons = cons_1["default"](null, null);
    });
    suite('list', function () {
        test('list', function () {
            chai_1.assert.ok(equal_1["default"](consList, linkedList));
            chai_1.assert.ok(equal_1["default"](list_1["default"]([[1], [2], [3]]), cons_1["default"](cons_1["default"](1, null), cons_1["default"](cons_1["default"](2, null), cons_1["default"](cons_1["default"](3, null), null)))));
        });
        test('length', function () {
            chai_1.assert.equal(length_1["default"](linkedList), 5);
            chai_1.assert.equal(length_1["default"](linkedList2), 5);
            chai_1.assert.equal(length_1["default"](linkedList3), 9);
            chai_1.assert.equal(length_1["default"](linkedList4), 5);
            chai_1.assert.equal(length_1["default"](linkedList5), 9);
            chai_1.assert.equal(length_1["default"](zipped1), 5);
            chai_1.assert.equal(length_1["default"](zipped2), 9);
            chai_1.assert.equal(length_1["default"](linkedListP1), 6);
            chai_1.assert.equal(length_1["default"](linkedListP2), 7);
            chai_1.assert.equal(length_1["default"](linkedListE1), 6);
            chai_1.assert.equal(length_1["default"](linkedListE2), 7);
        });
        test('range', function () {
            chai_1.assert.ok(equal_1["default"](range1, linkedList));
            chai_1.assert.ok(equal_1["default"](range2, linkedList3));
            chai_1.assert.ok(equal_1["default"](range3, linkedListP2));
            chai_1.assert.ok(equal_1["default"](steprange, linkedList5));
            chai_1.assert.equal(badrange, null);
            chai_1.assert.equal(length_1["default"](range1), 5);
            chai_1.assert.equal(length_1["default"](range2), 9);
            chai_1.assert.equal(length_1["default"](range3), 7);
            chai_1.assert.equal(length_1["default"](range4), 30);
            chai_1.assert.equal(length_1["default"](steprange), 9);
        });
        test('reverse', function () {
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList), range_1["default"](5, 0, -1)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList2), range_1["default"](10, 5, -1)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList3), range_1["default"](14, 5, -1)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList4), range_1["default"](55, 10, -11)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList5), range_1["default"](99, 10, -11)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList), list_1["default"](5, 4, 3, 2, 1)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList2), list_1["default"](10, 9, 8, 7, 6)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList3), list_1["default"](14, 13, 12, 11, 10, 9, 8, 7, 6)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList4), list_1["default"](55, 44, 33, 22, 11)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList5), list_1["default"](99, 88, 77, 66, 55, 44, 33, 22, 11)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](zipped1), list_1["default"](cons_1["default"](10, 55), cons_1["default"](9, 44), cons_1["default"](8, 33), cons_1["default"](7, 22), cons_1["default"](6, 11))));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](zipped2), list_1["default"](cons_1["default"](99, 14), cons_1["default"](88, 13), cons_1["default"](77, 12), cons_1["default"](66, 11), cons_1["default"](55, 10), cons_1["default"](44, 9), cons_1["default"](33, 8), cons_1["default"](22, 7), cons_1["default"](11, 6))));
        });
        test('slice', function () {
            chai_1.assert.ok(equal_1["default"](slice_1["default"](linkedList3, 0, 3), list_1["default"](6, 7, 8)));
            chai_1.assert.ok(equal_1["default"](slice_1["default"](linkedList3, 6), list_1["default"](12, 13, 14)));
            chai_1.assert.ok(equal_1["default"](slice_1["default"](zipped1, 2, 3), list_1["default"](cons_1["default"](8, 33))));
            chai_1.assert.ok(equal_1["default"](slice_1["default"](steprange, 8), list_1["default"](99)));
            chai_1.assert.ok(equal_1["default"](slice_1["default"](linkedList3, 3, 2), null));
        });
        test('concat', function () {
            chai_1.assert.ok(equal_1["default"](concat_1["default"](range_1["default"](1, 3), range_1["default"](3, 6)), linkedList));
            chai_1.assert.ok(equal_1["default"](concat_1["default"](range_1["default"](6, 10), range_1["default"](10, 15)), linkedList3));
            chai_1.assert.ok(equal_1["default"](concat_1["default"](range_1["default"](11, 56, 11), null), linkedList4));
            chai_1.assert.ok(equal_1["default"](concat_1["default"](null, range_1["default"](11, 100, 11)), linkedList5));
        });
        test('some', function () {
            chai_1.assert.ok(some_1["default"](linkedList4, function (curr, idx) { return curr % 2 === 0; }));
            chai_1.assert.ok(!some_1["default"](null, function (curr, idx) { return curr % 2 === 0; }));
            chai_1.assert.ok(some_1["default"](range_1["default"](1, 12, 2), function (curr, idx) { return curr % 2 !== 0; }));
            chai_1.assert.ok(!some_1["default"](range_1["default"](-20, 0), function (curr, idx) { return curr >= 0; }));
            chai_1.assert.ok(some_1["default"](range_1["default"](-20, 1), function (curr, idx) { return curr >= 0; }));
        });
        test('every', function () {
            chai_1.assert.ok(every_1["default"](range_1["default"](2, 20, 2), function (curr, idx) { return curr % 2 === 0; }));
            chai_1.assert.ok(every_1["default"](null, function (curr, idx) { return curr % 2 === 0; }));
            chai_1.assert.ok(every_1["default"](range_1["default"](-20, 0), function (curr, idx) { return curr < 0; }));
            chai_1.assert.ok(!every_1["default"](range_1["default"](-20, 1), function (curr, idx) { return curr < 0; }));
        });
        test('map', function () {
            chai_1.assert.ok(equal_1["default"](addMapped, addMappedCons));
            chai_1.assert.ok(equal_1["default"](mulMapped, mulMappedCons));
            chai_1.assert.equal(map_1["default"](list_1["default"](), function (curr) { return curr * 2; }), null);
        });
        test('filter', function () {
            chai_1.assert.ok(equal_1["default"](filtered, filteredCons));
            chai_1.assert.equal(emptyFiltered, null);
            chai_1.assert.equal(map_1["default"](list_1["default"](), function (curr) { return curr % 2 === 0; }), null);
        });
        test('reduce', function () {
            chai_1.assert.equal(reduceAdd, 15);
            chai_1.assert.equal(reduceMul, 120);
            chai_1.assert.equal(reduce_1["default"](list_1["default"](), function (prev, curr) { return prev + curr; }, 0), 0);
        });
        test('peek', function () {
            chai_1.assert.equal(peek_1["default"](linkedList), 5);
            chai_1.assert.equal(peek_1["default"](linkedListP1), 6);
            chai_1.assert.equal(peek_1["default"](linkedListP2), 7);
        });
        test('push', function () {
            chai_1.assert.ok(equal_1["default"](linkedListP1, pushed1));
            chai_1.assert.ok(equal_1["default"](linkedListP2, pushed2));
        });
        test('pop', function () {
            chai_1.assert.ok(equal_1["default"](linkedListP1, popped1));
            chai_1.assert.ok(equal_1["default"](linkedList, popped2));
        });
        test('reverse', function () {
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList), range_1["default"](5, 0, -1)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList2), range_1["default"](10, 5, -1)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList3), range_1["default"](14, 5, -1)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList4), range_1["default"](55, 10, -11)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList5), range_1["default"](99, 10, -11)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList), list_1["default"](5, 4, 3, 2, 1)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList2), list_1["default"](10, 9, 8, 7, 6)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList3), list_1["default"](14, 13, 12, 11, 10, 9, 8, 7, 6)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList4), list_1["default"](55, 44, 33, 22, 11)));
            chai_1.assert.ok(equal_1["default"](reverse_1["default"](linkedList5), list_1["default"](99, 88, 77, 66, 55, 44, 33, 22, 11)));
        });
        test('enqueue', function () {
            chai_1.assert.ok(equal_1["default"](linkedListE1, enqueue1));
            chai_1.assert.ok(equal_1["default"](linkedListE2, enqueue2));
        });
        test('dequeue', function () {
            chai_1.assert.ok(equal_1["default"](linkedListE1, dequeue1));
            chai_1.assert.ok(equal_1["default"](linkedList, dequeue2));
        });
        test('sort', function () {
            chai_1.assert.ok(equal_1["default"](sort_1["default"](list_1["default"](9, 8, 7, 6, 5, 4, 3)), sort_1["default"](list_1["default"](6, 8, 4, 7, 5, 9, 3))));
            chai_1.assert.ok(equal_1["default"](sort_1["default"](list_1["default"](9, 8, 7, 6, 5, 4, 3)), range_1["default"](3, 10)));
            chai_1.assert.ok(equal_1["default"](sort_1["default"](list_1["default"](3, 4, 5, 6, 7, 8, 9), function (a, b) { return a > b; }), range_1["default"](9, 2, -1)));
            chai_1.assert.ok(equal_1["default"](sort_1["default"](list_1["default"]()), null));
        });
        test('contains', function () {
            chai_1.assert.ok(contains_1["default"](linkedList, 5));
            chai_1.assert.ok(!contains_1["default"](linkedList, 6));
            chai_1.assert.ok(contains_1["default"](zipped1, cons_1["default"](10, 55)));
            chai_1.assert.ok(contains_1["default"](list_1["default"](1, 2, 3, list_1["default"](list_1["default"](1, 2), 5), 4), list_1["default"](list_1["default"](1, 2), 5)));
            chai_1.assert.ok(!contains_1["default"](list_1["default"](1, 2, 3, list_1["default"](list_1["default"](1, 2), 5), 4), list_1["default"](list_1["default"](1, 3), 5)));
        });
    });
});
