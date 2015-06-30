var cons = require('../src/cons/cons.js');
var car = require('../src/cons/car.js');
var cdr = require('../src/cons/cdr.js');
var print = require('../src/cons/print.js');
var equal = require('../src/cons/equal.js');

var list = require('../src/list/list.js');
var length = require('../src/list/length.js');
var range = require('../src/list/range.js');
var map = require('../src/list/map.js');
var reduce = require('../src/list/reduce.js');
var filter = require('../src/list/filter.js');
var filter = require('../src/list/filter.js');
var peek = require('../src/list/peek.js');
var push = require('../src/list/push.js');
var pop = require('../src/list/pop.js');
var zip = require('../src/list/zip.js');
var some = require('../src/list/some.js');
var every = require('../src/list/every.js');
var reverse = require('../src/list/reverse.js');
var slice = require('../src/list/slice.js');
var concat = require('../src/list/concat.js');
var enqueue = require('../src/list/enqueue.js');
var dequeue = require('../src/list/dequeue.js');
var sort = require('../src/list/sort.js');
var contains = require('../src/list/contains.js');

var assert = require('assert');

suite('list', function(){
    var linkedList, linkedList2, linkedList3, linkedList4, linkedList5,
        filtered, emptyFiltered, addMapped, mulMapped, reduceAdd, reduceMul,
        zipped1, zipped2, linkedListP1, linkedListP2, linkedListE1, linkedListE2,
        consList, filteredCons, emptyFilteredCons, addMappedCons, mulMappedCons,
        zip1, zip2, zip3, enqueue1, enqueue2, dequeue1, dequeue2,
        pushed1, pushed2, popped1, popped2,
        range1, range2, range3, range4, badrange, steprange;
    setup(function(){
        linkedList = list(1,2,3,4,5);
        linkedList2 = list(6,7,8,9,10);
        linkedList3 = list(6,7,8,9,10,11,12,13,14);
        linkedList4 = list(11,22,33,44,55);
        linkedList5 = list(11,22,33,44,55,66,77,88,99);
        range1 = range(1,6);
        range2 = range(6,15);
        range3 = range(1,8);
        range4 = range(30);
        steprange = range(11, 100, 11);
        badrange = range(0, 10, -1);
        zipped1 = list(cons(6,11),cons(7,22),cons(8,33),cons(9,44),cons(10,55));
        zipped2 = list(cons(11,6),cons(22,7),cons(33,8),cons(44,9),cons(55,10),
            cons(66,11),cons(77,12),cons(88,13),cons(99,14));
        linkedListP1 = list(1,2,3,4,5,6);
        linkedListP2 = list(1,2,3,4,5,6,7);
        linkedListE1 = list(8,1,2,3,4,5);
        linkedListE2 = list(9,8,1,2,3,4,5);
        pushed1 = push(linkedList, 6);
        pushed2 = push(pushed1, 7);
        popped1 = pop(pushed2);
        popped2 = pop(popped1);
        enqueue1 = enqueue(linkedList, 8);
        enqueue2 = enqueue(enqueue1, 9);
        dequeue1 = dequeue(enqueue2);
        dequeue2 = dequeue(dequeue1);
        zip1 = zip(linkedList2, linkedList5);
        zip2 = zip(linkedList3, linkedList4);
        zip3 = zip(linkedList5,linkedList3);
        popped1 = pop(pushed2);
        popped2 = pop(popped1);
        filtered = filter(linkedList, function(n){return n % 2 === 0;});
        emptyFiltered = filter(linkedList, function(){return false;});
        addMapped = map(linkedList, function(n){return n + 10;});
        mulMapped = map(linkedList, function(n){return n * 10;});
        reduceAdd = reduce(linkedList, function(a, b){return a + b;}, 0);
        reduceMul = reduce(linkedList, function(a, b){return a * b;}, 1);
        consList = cons(1,
            cons(2,
                cons(3,
                    cons(4,
                        cons(5, null)))));
        addMappedCons = cons(11,
            cons(12,
                cons(13,
                    cons(14,
                        cons(15, null)))));
        mulMappedCons = cons(10,
            cons(20,
                cons(30,
                    cons(40,
                        cons(50, null)))));
        filteredCons = cons(2,
            cons(4, null));
        emptyFilteredCons = cons(null, null);
    });
    suite('list', function(){
        test('list', function(){
            assert.ok(equal(consList, linkedList));
            assert.ok(equal( list([[1],[2],[3]]),
                cons(cons(1,null),cons(cons(2,null),cons(cons(3,null),null))))
            );
        });
        test('length', function(){
            assert.equal(length(linkedList), 5);
            assert.equal(length(linkedList2), 5);
            assert.equal(length(linkedList3), 9);
            assert.equal(length(linkedList4), 5);
            assert.equal(length(linkedList5), 9);
            assert.equal(length(zipped1), 5);
            assert.equal(length(zipped2), 9);
            assert.equal(length(linkedListP1), 6);
            assert.equal(length(linkedListP2), 7);
            assert.equal(length(linkedListE1), 6);
            assert.equal(length(linkedListE2), 7);
        });
        test('range', function(){
            assert.ok(equal(range1, linkedList));
            assert.ok(equal(range2, linkedList3));
            assert.ok(equal(range3, linkedListP2));
            assert.ok(equal(steprange, linkedList5));

            assert.equal(badrange, null);
            assert.equal(length(range1), 5);
            assert.equal(length(range2), 9);
            assert.equal(length(range3), 7);
            assert.equal(length(range4), 30);
            assert.equal(length(steprange), 9);
        });
        test('reverse', function(){
            assert.ok(equal(reverse(linkedList), range(5,0,-1)));
            assert.ok(equal(reverse(linkedList2), range(10,5,-1)));
            assert.ok(equal(reverse(linkedList3), range(14,5,-1)));
            assert.ok(equal(reverse(linkedList4), range(55,10,-11)));
            assert.ok(equal(reverse(linkedList5), range(99,10,-11)));
            assert.ok(equal(reverse(linkedList), list(5,4,3,2,1)));
            assert.ok(equal(reverse(linkedList2), list(10,9,8,7,6)));
            assert.ok(equal(reverse(linkedList3), list(14,13,12,11,10,9,8,7,6)));
            assert.ok(equal(reverse(linkedList4), list(55,44,33,22,11)));
            assert.ok(equal(reverse(linkedList5), list(99,88,77,66,55,44,33,22,11)));

            assert.ok(equal(reverse(zipped1),list(cons(10,55),cons(9,44),cons(8,33),cons(7,22), cons(6,11))));
            assert.ok(equal(reverse(zipped2),list(
                cons(99,14),cons(88,13),cons(77,12),cons(66,11),
                cons(55,10),cons(44,9),cons(33,8),cons(22,7),cons(11,6)
                )
            ));
        });
        test('slice', function(){
            assert.ok(equal(slice(linkedList3, 0, 3), list(6,7,8)));
            assert.ok(equal(slice(linkedList3, 6), list(12,13,14)));
            assert.ok(equal(slice(zipped1, 2, 3), list(cons(8,33))));
            assert.ok(equal(slice(steprange, 8), list(99)));
            assert.ok(equal(slice(linkedList3, 3, 2), null));
        });
        test('concat', function(){
            assert.ok(equal(concat(range(1,3), range(3,6)), linkedList));
            assert.ok(equal(concat(range(6,10), range(10,15)), linkedList3));
            assert.ok(equal(concat(range(11,56,11), null), linkedList4));
            assert.ok(equal(concat(null, range(11,100,11)), linkedList5));
        });
        test('some', function(){
            assert.ok(some(linkedList4, function(curr, idx){return curr % 2 === 0;}));
            assert.ok(!some(null, function(curr, idx){return curr % 2 === 0;}));
            assert.ok(some(range(1,12,2), function(curr, idx){return curr % 2 !== 0;}));
            assert.ok(!some(range(-20,0), function(curr, idx){return curr >= 0;}));
            assert.ok(some(range(-20,1), function(curr, idx){return curr >= 0;}));
        });
        test('every', function(){
            assert.ok(every(range(2,20,2), function(curr, idx){return curr % 2 === 0;}));
            assert.ok(every(null, function(curr, idx){return curr % 2 === 0;}));
            assert.ok(every(range(-20,0), function(curr, idx){return curr < 0;}));
            assert.ok(!every(range(-20,1), function(curr, idx){return curr < 0;}));
        });
        test('map', function(){
            assert.ok(equal(addMapped, addMappedCons));
            assert.ok(equal(mulMapped, mulMappedCons));
            assert.equal(map(list(), function(curr){return curr*2}), null)
        });
        test('filter', function(){
            assert.ok(equal(filtered, filteredCons));
            assert.equal(emptyFiltered, null);
            assert.equal(map(list(), function(curr){return curr % 2 === 0}), null)
        });
        test('reduce', function(){
            assert.equal(reduceAdd, 15);
            assert.equal(reduceMul, 120);
            assert.equal(reduce(list(), function(prev,curr){return a+b}, 0), 0);
        });
        test('peek', function(){
            assert.equal(peek(linkedList), 5);
            assert.equal(peek(linkedListP1), 6);
            assert.equal(peek(linkedListP2), 7);
        });
        test('push', function(){
            assert.ok(equal(linkedListP1, pushed1));
            assert.ok(equal(linkedListP2, pushed2));
        });
        test('pop', function(){
            assert.ok(equal(linkedListP1, popped1));
            assert.ok(equal(linkedList, popped2));
        });
        test('reverse', function(){
            assert.ok(equal(reverse(linkedList), range(5,0,-1)));
            assert.ok(equal(reverse(linkedList2), range(10,5,-1)));
            assert.ok(equal(reverse(linkedList3), range(14,5,-1)));
            assert.ok(equal(reverse(linkedList4), range(55,10,-11)));
            assert.ok(equal(reverse(linkedList5), range(99,10,-11)));
            assert.ok(equal(reverse(linkedList), list(5,4,3,2,1)));
            assert.ok(equal(reverse(linkedList2), list(10,9,8,7,6)));
            assert.ok(equal(reverse(linkedList3), list(14,13,12,11,10,9,8,7,6)));
            assert.ok(equal(reverse(linkedList4), list(55,44,33,22,11)));
            assert.ok(equal(reverse(linkedList5), list(99,88,77,66,55,44,33,22,11)));
        });
        test('enqueue', function(){
            assert.ok(equal(linkedListE1, enqueue1));
            assert.ok(equal(linkedListE2, enqueue2));
        });
        test('dequeue', function(){
            assert.ok(equal(linkedListE1, dequeue1));
            assert.ok(equal(linkedList, dequeue2));
        });
        test('sort', function(){
            assert.ok(equal(sort(list(9,8,7,6,5,4,3)), sort(list(6,8,4,7,5,9,3))));
            assert.ok(equal(sort(list(9,8,7,6,5,4,3)), range(3, 10)));
            assert.ok(equal(sort(list(3,4,5,6,7,8,9), function(a,b){return a > b;}), range(9, 2, -1)));
            assert.ok(equal(sort(list()), null));
        });
        test('contains', function(){
            assert.ok(contains(linkedList, 5));
            assert.ok(!contains(linkedList, 6));
            assert.ok(contains(zipped1, cons(10,55)));
            assert.ok(contains(list(1, 2, 3, list(list(1, 2), 5), 4), list(list(1, 2), 5)));
            assert.ok(!contains(list(1, 2, 3, list(list(1, 2), 5), 4), list(list(1, 3), 5)));
        });
    });
});