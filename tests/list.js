var cons = require('../src/cons/cons.js');
var car = require('../src/cons/car.js');
var cdr = require('../src/cons/cdr.js');
var print = require('../src/cons/print.js');

var list = require('../src/list/list.js');
var map = require('../src/list/map.js');
var reduce = require('../src/list/reduce.js');
var filter = require('../src/list/filter.js');
var peek = require('../src/list/peek.js');
var push = require('../src/list/push.js');
var pop = require('../src/list/pop.js');
var enqueue = require('../src/list/enqueue.js');
var dequeue = require('../src/list/dequeue.js');

var assert = require('assert');

function equalList(a, b){
    if (a === b){
        return true;
    }
    if (a===null && b!==null || b===null && a!==null){
        return false;
    }
    else if (car(a) !== car(b)){
        return false;
    } else if (cdr(a) instanceof cons && cdr(b) instanceof cons){
        return equalList(cdr(a), cdr(b));
    } else {
        return cdr(b) === cdr(b);
    }
}

suite('list', function(){
    var linkedList, filtered, emptyFiltered, addMapped, mulMapped, reduceAdd, reduceMul,
        consList, filteredCons, emptyFilteredCons, addMappedCons, mulMappedCons,
        pushed, popped;
    setup(function(){
        linkedList = list(1,2,3,4,5);
        linkedListP1 = list(1,2,3,4,5,6);
        linkedListP2 = list(1,2,3,4,5,6,7);
        linkedListE1 = list(8,1,2,3,4,5,6);
        linkedListE2 = list(9,8,1,2,3,4,5,6,7);
        pushed1 = push(linkedList, 6);
        pushed2 = push(pushed1, 7);
        popped1 = pop(pushed2);
        popped2 = pop(popped1);
        enqueue1 = enqueue(linkedList, 8);
        enqueue2 = enqueue(enqueue1, 9);
        dequeue1 = dequeue(enqueue2);
        dequeue2 = dequeue(dequeue1);
        popped1 = pop(pushed2);
        popped2 = pop(popped1);
        filtered = filter(linkedList, function(n){return n % 2 === 0;});
        emptyFiltered = filter(linkedList, function(n){return false;});
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
            assert.ok(equalList(consList, linkedList));
        });
        test('map', function(){
            assert.ok(equalList(addMapped, addMappedCons));
            assert.ok(equalList(mulMapped, mulMappedCons));
        });
        test('filter', function(){
            assert.ok(equalList(filtered, filteredCons));
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
            assert.ok(equalList(linkedListP1, pushed1));
            assert.ok(equalList(linkedListP2, pushed2));
        });
        test('pop', function(){
            assert.ok(equalList(linkedListP1, popped1));
            assert.ok(equalList(linkedList, popped2));
        });
        test('enqueue', function(){
            assert.ok(equalList(linkedListE1, enqueue1));
            assert.ok(equalList(linkedListE2, enqueue2));
        });
        test('dequeue', function(){
            assert.ok(equalList(linkedListE1, dequeue1));
            assert.ok(equalList(linkedList, dequeue2));
        });
    });
});