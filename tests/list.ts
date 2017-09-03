import cons from "../src/cons/cons";
import car from "../src/cons/car";
import cdr from "../src/cons/cdr";
import print from "../src/cons/print";
import equal from "../src/cons/equal";
import list from "../src/list/list";
import length from "../src/list/length";
import range from "../src/list/range";
import map from "../src/list/map";
import reduce from "../src/list/reduce";
import filter from "../src/list/filter";
import peek from "../src/list/peek";
import push from "../src/list/push";
import pop from "../src/list/pop";
import zip from "../src/list/zip";
import get from "../src/list/get";
import some from "../src/list/some";
import every from "../src/list/every";
import reverse from "../src/list/reverse";
import slice from "../src/list/slice";
import concat from "../src/list/concat";
import enqueue from "../src/list/enqueue";
import dequeue from "../src/list/dequeue";
import sort from "../src/list/sort";
import flatten from "../src/list/flatten";
import contains from "../src/list/contains";
import { assert } from "chai";
import * as jsc from "jsverify";

suite("list", () => {
  var linkedList,
    linkedList2,
    linkedList3,
    linkedList4,
    linkedList5,
    filtered,
    emptyFiltered,
    addMapped,
    mulMapped,
    reduceAdd,
    reduceMul,
    zipped1,
    zipped2,
    linkedListP1,
    linkedListP2,
    linkedListE1,
    linkedListE2,
    consList,
    filteredCons,
    emptyFilteredCons,
    addMappedCons,
    mulMappedCons,
    zip1,
    zip2,
    zip3,
    enqueue1,
    enqueue2,
    dequeue1,
    dequeue2,
    pushed1,
    pushed2,
    popped1,
    popped2,
    range1,
    range2,
    range3,
    range4,
    badrange,
    steprange;
  setup(() => {
    linkedList = list(1, 2, 3, 4, 5);
    linkedList2 = list(6, 7, 8, 9, 10);
    linkedList3 = list(6, 7, 8, 9, 10, 11, 12, 13, 14);
    linkedList4 = list(11, 22, 33, 44, 55);
    linkedList5 = list(11, 22, 33, 44, 55, 66, 77, 88, 99);
    range1 = range(1, 6);
    range2 = range(6, 15);
    range3 = range(1, 8);
    range4 = range(30);
    steprange = range(11, 100, 11);
    badrange = range(0, 10, -1);
    zipped1 = list(
      cons(6, 11),
      cons(7, 22),
      cons(8, 33),
      cons(9, 44),
      cons(10, 55)
    );
    zipped2 = list(
      cons(11, 6),
      cons(22, 7),
      cons(33, 8),
      cons(44, 9),
      cons(55, 10),
      cons(66, 11),
      cons(77, 12),
      cons(88, 13),
      cons(99, 14)
    );
    linkedListP1 = list(1, 2, 3, 4, 5, 6);
    linkedListP2 = list(1, 2, 3, 4, 5, 6, 7);
    linkedListE1 = list(8, 1, 2, 3, 4, 5);
    linkedListE2 = list(9, 8, 1, 2, 3, 4, 5);
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
    zip3 = zip(linkedList5, linkedList3);
    popped1 = pop(pushed2);
    popped2 = pop(popped1);
    filtered = filter(linkedList, n => n % 2 === 0);
    emptyFiltered = filter(linkedList, () => {
      return false;
    });
    addMapped = map(linkedList, n => n + 10);
    mulMapped = map(linkedList, n => n * 10);
    reduceAdd = reduce(linkedList, (a, b) => a + b, 0);
    reduceMul = reduce(linkedList, (a, b) => a * b, 1);
    consList = cons(1, cons(2, cons(3, cons(4, cons(5, null)))));
    addMappedCons = cons(11, cons(12, cons(13, cons(14, cons(15, null)))));
    mulMappedCons = cons(10, cons(20, cons(30, cons(40, cons(50, null)))));
    filteredCons = cons(2, cons(4, null));
    emptyFilteredCons = cons(null, null);
  });
  suite("list", () => {
    test("list", () => {
      assert.ok(equal(consList, linkedList));
      assert.ok(
        equal(
          list([[1], [2], [3]]),
          cons(cons(1, null), cons(cons(2, null), cons(cons(3, null), null)))
        )
      );
    });
    jsc.property("list", "array nat", arr => {
      let consList = list(arr);
      return arr.every(val => {
        let head = car(consList);
        consList = cdr(consList);
        return val === head;
      });
    });
    test("length", () => {
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
    jsc.property("length", "array nat", arr => {
      let consList = list(arr);
      return length(consList) === arr.length;
    });
    test("range", () => {
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
    jsc.property("range", "nat", n => {
      let r = range(n);
      return length(r) === n;
    });
    jsc.property("range", "nat & nat", n => {
      let [n1, n2] = n;
      let r = range(n1, n2);
      return n2 > n1 ? length(r) === n2 - n1 : length(r) === 0;
    });
    jsc.property("range", "nat & nat & nat", n => {
      let [n1, n2, n3] = n;
      let r = range(n1, n2, n3);
      return every(r, v => (v - n1) % n3 === 0);
    });
    test("reverse", () => {
      assert.ok(equal(reverse(linkedList), range(5, 0, -1)));
      assert.ok(equal(reverse(linkedList2), range(10, 5, -1)));
      assert.ok(equal(reverse(linkedList3), range(14, 5, -1)));
      assert.ok(equal(reverse(linkedList4), range(55, 10, -11)));
      assert.ok(equal(reverse(linkedList5), range(99, 10, -11)));
      assert.ok(equal(reverse(linkedList), list(5, 4, 3, 2, 1)));
      assert.ok(equal(reverse(linkedList2), list(10, 9, 8, 7, 6)));
      assert.ok(
        equal(reverse(linkedList3), list(14, 13, 12, 11, 10, 9, 8, 7, 6))
      );
      assert.ok(equal(reverse(linkedList4), list(55, 44, 33, 22, 11)));
      assert.ok(
        equal(reverse(linkedList5), list(99, 88, 77, 66, 55, 44, 33, 22, 11))
      );

      assert.ok(
        equal(
          reverse(zipped1),
          list(cons(10, 55), cons(9, 44), cons(8, 33), cons(7, 22), cons(6, 11))
        )
      );
      assert.ok(
        equal(
          reverse(zipped2),
          list(
            cons(99, 14),
            cons(88, 13),
            cons(77, 12),
            cons(66, 11),
            cons(55, 10),
            cons(44, 9),
            cons(33, 8),
            cons(22, 7),
            cons(11, 6)
          )
        )
      );
    });
    jsc.property("reverse", "array nat", arr => {
      return equal(reverse(list(arr)), list(arr.reverse()));
    });
    test("slice", () => {
      assert.ok(equal(slice(linkedList3, 0, 3), list(6, 7, 8)));
      assert.ok(equal(slice(linkedList3, 6), list(12, 13, 14)));
      assert.ok(equal(slice(zipped1, 2, 3), list(cons(8, 33))));
      assert.ok(equal(slice(steprange, 8), list(99)));
      assert.ok(equal(slice(linkedList3, 3, 2), null));
    });
    jsc.property("slice", "array nat", arr => {
      const [n1, n2] = [jsc.random(0, arr.length), jsc.random(0, arr.length)];
      const [n3, n4] = [
        jsc.random(arr.length, arr.length * 2),
        jsc.random(arr.length, arr.length * 2)
      ];
      const consSlice1 = slice(list(arr), n1, n2);
      const consSlice2 = slice(list(arr), n3, n4);
      return (
        (n2 > n1 ? length(consSlice1) === n2 - n1 : length(consSlice1) === 0) &&
        length(consSlice2) === 0
      );
    });
    test("concat", () => {
      assert.ok(equal(concat(range(1, 3), range(3, 6)), linkedList));
      assert.ok(equal(concat(range(6, 10), range(10, 15)), linkedList3));
      assert.ok(equal(concat(range(11, 56, 11), null), linkedList4));
      assert.ok(equal(concat(null, range(11, 100, 11)), linkedList5));
    });
    jsc.property("concat", "array nat & array nat", args => {
      const [a1, a2] = args;
      return equal(concat(list(a1), list(a2)), list(a1.concat(a2)));
    });
    test("some", () => {
      assert.ok(some(linkedList4, (curr, idx) => curr % 2 === 0));
      assert.ok(!some(null, (curr, idx) => curr % 2 === 0));
      assert.ok(some(range(1, 12, 2), (curr, idx) => curr % 2 !== 0));
      assert.ok(!some(range(-20, 0), (curr, idx) => curr >= 0));
      assert.ok(some(range(-20, 1), (curr, idx) => curr >= 0));
    });
    jsc.property("some", "array nat", arr => {
      return (
        some(list(arr), a => a >= 30) === arr.some(a => a >= 30) &&
        some(list(arr), a => a < 30) === arr.some(a => a < 30)
      );
    });
    test("every", () => {
      assert.ok(every(range(2, 20, 2), (curr, idx) => curr % 2 === 0));
      assert.ok(every(null, (curr, idx) => curr % 2 === 0));
      assert.ok(every(range(-20, 0), (curr, idx) => curr < 0));
      assert.ok(!every(range(-20, 1), (curr, idx) => curr < 0));
    });
    jsc.property("every", "array nat", arr => {
      return (
        every(list(arr), a => a <= 40) === arr.every(a => a <= 40) &&
        every(list(arr), a => a > 40) === arr.every(a => a > 40)
      );
    });
    test("map", () => {
      assert.ok(equal(addMapped, addMappedCons));
      assert.ok(equal(mulMapped, mulMappedCons));
      assert.equal(map(list(), curr => curr * 2), null);
    });
    jsc.property("map", "array nat", arr => {
      return equal(map(list(arr), a => a * 2), list(arr.map(a => a * 2)));
    });
    test("filter", () => {
      assert.ok(equal(filtered, filteredCons));
      assert.equal(emptyFiltered, null);
      assert.equal(map(list(), curr => curr % 2 === 0), null);
    });
    jsc.property("filter", "array nat", arr => {
      return equal(
        filter(list(arr), a => a % 2 === 0),
        list(arr.filter(a => a % 2 === 0))
      );
    });
    test("reduce", () => {
      assert.equal(reduceAdd, 15);
      assert.equal(reduceMul, 120);
      assert.equal(reduce(list(), (prev, curr) => prev + curr, 0), 0);
    });
    jsc.property("reduce", "array nat", arr => {
      return (
        reduce(list(arr), (curr, acc) => acc + curr, 0) ===
        arr.reduce((curr, acc) => acc + curr, 0)
      );
    });
    test("peek", () => {
      assert.equal(peek(linkedList), 5);
      assert.equal(peek(linkedListP1), 6);
      assert.equal(peek(linkedListP2), 7);
    });
    jsc.property("peek", "array nat", arr => {
      const L = list(arr);
      return length(L) > 0 ? peek(L) == arr[arr.length - 1] : peek(L) === null;
    });
    test("push", () => {
      assert.ok(equal(linkedListP1, pushed1));
      assert.ok(equal(linkedListP2, pushed2));
    });
    jsc.property("push", "array nat & nat", args => {
      const [arr, n] = args;
      const L = list(arr);
      return peek(push(L, n)) === n;
    });
    test("pop", () => {
      assert.ok(equal(linkedListP1, popped1));
      assert.ok(equal(linkedList, popped2));
    });
    jsc.property("pop", "array nat", arr => {
      return equal(pop(list(arr)), list(arr.slice(0, arr.length - 1)));
    });
    test("enqueue", () => {
      assert.ok(equal(linkedListE1, enqueue1));
      assert.ok(equal(linkedListE2, enqueue2));
    });
    jsc.property("enqueue", "array nat & nat", args => {
      const [arr, n] = args;
      return equal(enqueue(list(arr), n), list([n].concat(arr)));
    });
    test("dequeue", () => {
      assert.ok(equal(linkedListE1, dequeue1));
      assert.ok(equal(linkedList, dequeue2));
    });
    jsc.property("dequeue", "array nat", arr => {
      return equal(dequeue(list(arr)), list(arr.slice(1)));
    });
    test("sort", () => {
      assert.ok(
        equal(sort(list(9, 8, 7, 6, 5, 4, 3)), sort(list(6, 8, 4, 7, 5, 9, 3)))
      );
      assert.ok(equal(sort(list(9, 8, 7, 6, 5, 4, 3)), range(3, 10)));
      assert.ok(
        equal(sort(list(3, 4, 5, 6, 7, 8, 9), (a, b) => a > b), range(9, 2, -1))
      );
      assert.ok(equal(sort(list()), null));
    });
    jsc.property("sort", "array nat", arr => {
      return equal(
        sort(list(arr)),
        list(arr.sort((a, b) => (a < b ? -1 : a === b ? 0 : 1)))
      );
    });
    test("contains", () => {
      assert.ok(contains(linkedList, 5));
      assert.ok(!contains(linkedList, 6));
      assert.ok(contains(zipped1, cons(10, 55)));
      assert.ok(
        contains(list(1, 2, 3, list(list(1, 2), 5), 4), list(list(1, 2), 5))
      );
      assert.ok(
        !contains(list(1, 2, 3, list(list(1, 2), 5), 4), list(list(1, 3), 5))
      );
    });
    jsc.property("contains", "array nat", arr => {
      const val = arr[jsc.random(0, arr.length)];
      return (
        contains(list(arr), "f") === (arr.indexOf("f") !== -1) &&
        contains(list(arr), val) === (arr.indexOf(val) !== -1)
      );
    });
    jsc.property("zip", "array nat & array nat", args => {
      const [a1, a2] = args;
      const [L1, L2] = [list(a1), list(a2)];
      const zipped = zip(L1, L2);
      return (
        length(zipped) === Math.min(length(L1), length(L2)) &&
        every(zipped, (val, idx) =>
          equal(val, cons(get(L1, idx), get(L2, idx)))
        )
      );
    });
  });
});
