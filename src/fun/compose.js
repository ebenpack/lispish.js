/**
 * Compose functions a and b
 * @param  {Function} a Outer function
 * @param  {Function} b Inner function
 * @return {Function}   Composed function
 */
function compose(a, b) {
    return function(c) {
        return a(b(c));
    };
}

module.exports = compose;