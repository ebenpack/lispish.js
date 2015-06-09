/**
 * Returns an immutable cons pair consisting
 * of a, b
 * @param  {*} a car value
 * @param  {*} b cdr value
 * @return {cons}
 */
function cons(a, b) {
    return Object.freeze(
        Object.defineProperty(
            Object.defineProperty(
                Object.create(null), 'car', {
                    value: a
                }
            ), 'cdr', {
                value: b
            }
        )
    );
}

module.exports = cons;