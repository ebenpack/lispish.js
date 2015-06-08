var cons = require('../src/cons/cons.js');
var car = require('../src/cons/car.js');
var cdr = require('../src/cons/cdr.js');
var print = require('../src/cons/print.js');
var equal = require('../src/cons/equal.js');

var list = require('../src/list/list.js');
var map = require('../src/list/map.js');
var reduce = require('../src/list/reduce.js');
var filter = require('../src/list/filter.js');
var filter = require('../src/list/filter.js');
var peek = require('../src/list/peek.js');
var push = require('../src/list/push.js');
var pop = require('../src/list/pop.js');
var zip = require('../src/list/zip.js');
var enqueue = require('../src/list/enqueue.js');
var dequeue = require('../src/list/dequeue.js');

var assert = require('assert');

suite('list', function(){
    var linkedList, linkedList2, linkedList3, linkedList4, linkedList5,
        filtered, emptyFiltered, addMapped, mulMapped, reduceAdd, reduceMul,
        zipped1, zipped2, linkedListP1, linkedListP2, linkedListE1, linkedListE2,
        consList, filteredCons, emptyFilteredCons, addMappedCons, mulMappedCons,
        zip1, zip2, zip3, enqueue1, enqueue2, dequeue1, dequeue2,
        pushed1, pushed2, popped1, popped2;
    setup(function(){
        linkedList = list(1,2,3,4,5);
        linkedList2 = list(6,7,8,9,10);
        linkedList3 = list(6,7,8,9,10,11,12,13,14);
        linkedList4 = list(11,22,33,44,55);
        linkedList5 = list(11,22,33,44,55,66,77,88,99);
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
        });
        test('map', function(){
            assert.ok(equal(addMapped, addMappedCons));
            assert.ok(equal(mulMapped, mulMappedCons));
        });
        test('filter', function(){
            assert.ok(equal(filtered, filteredCons));
            assert.equal(emptyFiltered, null);
        });
        test('reduce', function(){
            assert.equal(reduceAdd, 15);
            assert.equal(reduceMul, 120);
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
        test('enqueue', function(){
            assert.ok(equal(linkedListE1, enqueue1));
            assert.ok(equal(linkedListE2, enqueue2));
        });
        test('dequeue', function(){
            assert.ok(equal(linkedListE1, dequeue1));
            assert.ok(equal(linkedList, dequeue2));
        });
    });
});