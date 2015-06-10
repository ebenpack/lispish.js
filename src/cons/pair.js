/**
 * Returns a boolean indicating whether the given parameter is a cons pair.
 * @param  {*} c
 * @return {boolean}
 */
function pair(c){
    return c !== null && typeof c === 'object' && 'car' in c && 'cdr' in c;
}

module.exports = pair;
