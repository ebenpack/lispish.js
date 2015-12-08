/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />
/**
 * Returns an immutable cons pair consisting
 * of a and b
 * @param  {*} car
 * @param  {*} cdr
 * @return {cons}
 */
export = function cons (car: any, cdr: any) : cons {
    return Object.freeze(
        Object.defineProperty(
            Object.defineProperty(
                Object.create(null), 'car', {
                    value: car
                }
            ), 'cdr', {
                value: cdr
            }
        )
    );
}