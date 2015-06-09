/**
 * Returns an immutable cons pair consisting
 * of a, b
 * @param  {*} a car value
 * @param  {*} b cdr value
 * @return {cons}
 */
function cons(a, b) {
    if (!(this instanceof cons)) {
        return new cons(a, b);
    }
    this.car = a;
    this.cdr = b;
    Object.freeze(this);
}

module.exports = cons;