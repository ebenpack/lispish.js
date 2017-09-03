import {
  cons,
  car,
  cdr,
  caar,
  cadr,
  cdar,
  cddr,
  caaar,
  caadr,
  cadar,
  caddr,
  cdaar,
  cdadr,
  cddar,
  cdddr,
  caaaar,
  caaadr,
  caadar,
  caaddr,
  cadaar,
  cadadr,
  caddar,
  cadddr,
  cdaaar,
  cdaadr,
  cdadar,
  cdaddr,
  cddaar,
  cddadr,
  cdddar,
  cddddr,
  print,
  equal,
  pair
} from "../src/cons/main";
import { assert } from "chai";

suite("cons", () => {
  var simpleCons, doubleCons, linkedList, tree;
  setup(() => {
    simpleCons = cons(1, 2);
    doubleCons = cons(cons(1, 2), cons(3, 4));
    linkedList = cons(1, cons(2, cons(3, cons(4, cons(5, null)))));
    tree = cons(
      cons(cons(1, null), cons(2, null)),
      cons(cons(3, null), cons(4, null))
    );
  });
  suite("cons", () => {
    test("cons", () => {
      assert.ok(pair(simpleCons));
      assert.ok(pair(doubleCons));
      assert.equal(car(simpleCons), 1);
      assert.equal(cdr(simpleCons), 2);
      assert.ok(pair(car(doubleCons)));
      assert.ok(pair(cdr(doubleCons)));
      assert.equal(car(car(doubleCons)), 1);
      assert.equal(cdr(car(doubleCons)), 2);
      assert.equal(car(cdr(doubleCons)), 3);
      assert.equal(cdr(cdr(doubleCons)), 4);
    });
  });
  suite("pair", () => {
    test("pair", () => {
      assert.ok(pair(simpleCons));
      assert.ok(pair(doubleCons));
      assert.ok(pair(car(doubleCons)));
      assert.ok(pair(cdr(doubleCons)));
      assert.ok(pair(linkedList));
      assert.ok(pair(tree));
      assert.ok(!pair(1));
      assert.ok(!pair("foo"));
      assert.ok(!pair(car(simpleCons)));
    });
  });
  suite("equal", () => {
    test("equal", () => {
      assert.ok(equal(simpleCons, cons(1, 2)));
      assert.ok(equal(doubleCons, cons(cons(1, 2), cons(3, 4))));
    });
  });
  suite("car/cdr", () => {
    test("car/cdr", () => {
      assert.equal(car(linkedList), 1);
      assert.equal(cdar(linkedList), 2);
      assert.equal(cddar(linkedList), 3);
      assert.equal(cdddar(linkedList), 4);
      assert.ok(pair(cdr(linkedList)));

      assert.equal(caaar(tree), 1);
      assert.equal(cadar(tree), 2);
      assert.equal(cdaar(tree), 3);
      assert.equal(cddar(tree), 4);

      assert.equal(caaar(tree), car(car(car(tree))));
      assert.equal(cadar(tree), car(cdr(car(tree))));
      assert.equal(cdaar(tree), car(car(cdr(tree))));
      assert.equal(cddar(tree), car(cdr(cdr(tree))));
    });
  });
  suite("print", () => {
    test("print", () => {
      assert.equal(
        "<1!2>",
        print(simpleCons, { separator: "!", prefix: "<", suffix: ">" })
      );
      assert.equal(
        "[[1~2]~[3~4]]",
        print(doubleCons, { separator: "~", prefix: "[", suffix: "]" })
      );
      assert.equal(
        "1.2.3.4.5",
        print(linkedList, { separator: ".", prefix: "", suffix: "" })
      );
      assert.equal("(1,(2,(3,(4,(5)))))", print(linkedList));
      assert.equal("(((1),(2)),((3),(4)))", print(tree));
    });
  });
});
