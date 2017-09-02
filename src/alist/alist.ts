
/// <reference path="../cons.d.ts" />

import list  from '../list/list';
import cons from '../cons/cons';

/**
 * Returns an association list with a single key-value pair.
 * @param {*} key
 * @param {*} value
 * @return {cons}
 */
export default function alist(key : any, value : any) : Cons {
    return list(cons(key, value));
}