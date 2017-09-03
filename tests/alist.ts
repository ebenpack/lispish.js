import alist from "../src/alist/alist";
import get from "../src/alist/get";
import map from "../src/alist/map";
import print from "../src/alist/print";
import put from "../src/alist/put";
import cons from "../src/cons/cons";
import consEqual from "../src/cons/equal";
import equal from "../src/alist/equal";
import consPrint from "../src/cons/print";
import { assert } from "chai";
import * as jsc from "jsverify";

suite("alist", () => {
  let testAList, testAListUpper;
  setup(() => {
    const KVPs = [
      ["foo", "bar"],
      ["baz", "qux"],
      ["quux", "quuz"],
      ["corge", "grault"],
      ["waldo", "fred"],
      ["plugh", "xyzzy"],
      ["ping", "pong"]
    ];
    testAList = KVPs.reduce(
      (acc, val) => put(acc, val[0], val[1]),
      alist("thunk", "thud")
    );
    testAListUpper = KVPs.reduce(
      (acc, val) => put(acc, val[0], val[1].toUpperCase()),
      alist("thunk", "THUD")
    );
  });
  suite("get", () => {
    test("get", () => {
      assert.ok(get(alist("foo", "bar"), "foo") === "bar");
      assert.ok(get(put(alist("foo", "bar"), "foo", "baz"), "foo") === "baz");
      assert.ok(get(put(alist("foo", "bar"), "baz", "qux"), "foo") === "bar");
      assert.ok(get(put(alist("foo", "bar"), "baz", "qux"), "baz") === "qux");
      assert.ok(get(put(alist("foo", "bar"), "baz", "qux"), "quux") === null);
    });
  });
  suite("put", () => {
    test("put", () => {
      assert.ok(
        get(put(testAList, "waldo", "jeffries"), "waldo") === "jeffries"
      );
    });
  });
  suite("map", () => {
    test("map", () => {
      assert.ok(
        consEqual(map(testAList, (k, v) => v.toUpperCase()), testAListUpper)
      );
      assert.ok(
        equal(map(testAList, (k, v) => v.toUpperCase()), testAListUpper)
      );
    });
  });
});
