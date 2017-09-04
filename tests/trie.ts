import getTrie from "../src/trie/getTrie";
import putTrie from "../src/trie/putTrie";
import list from "../src/list/list";
import contains from "../src//list/contains";
import { assert } from "chai";
import * as jsc from "jsverify";

suite("trie", () => {
    suite("getTrie", () => {
        test("dequeue", () => {
            assert.equal(getTrie(null, list("foo".split(""), list())), null);
        });
        jsc.property("getTrie", "array string", arr => {
            const T = arr.reduce(
                (acc, val) => putTrie(acc, list(val.split("")), list()),
                null
            );
            return arr.every(word =>
                word
                    .split("")
                    .every(
                        (char, idx, word) =>
                            idx === 0
                                ? getTrie(T, list(word.slice(0, idx))) === null
                                : getTrie(T, list(word.slice(0, idx))) !== null
                    )
            );
        });
        jsc.property("getTrie", "array string", arr => {
            const T = arr.reduce(
                (acc, val) =>
                    val
                        .split("")
                        .reduce(
                            (acc, val, idx, arr) =>
                                putTrie(acc, list(arr.slice(-idx)), list()),
                            acc
                        ),
                null
            );
            return arr.every(word =>
                word
                    .split("")
                    .every(
                        (char, idx, word) =>
                            idx === 0
                                ? getTrie(T, list(word.slice(0, idx))) === null
                                : getTrie(T, list(word.slice(0, idx))) !== null
                    )
            );
        });
    });
});
