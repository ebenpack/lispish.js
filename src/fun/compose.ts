/**
 * Compose functions a and b
 * @param  {Function} a Outer function
 * @param  {Function} b Inner function
 * @return {Function}   Composed function
 */
export = function compose(
    a : (input : any)=>any,
    b : (input : any)=>any) : (c: any)=>any {
    return function(c) {
        return a(b(c));
    };
}