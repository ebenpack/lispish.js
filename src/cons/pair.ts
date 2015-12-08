/// <reference path="../typings/node/node.d.ts" />

/**
 * Returns a boolean indicating whether the given parameter is a cons pair.
 * @param  {*} c
 * @return {boolean}
 */

export = function pair(c: any) : boolean {
    return c !== null && typeof c === 'object' && 'car' in c && 'cdr' in c;
}