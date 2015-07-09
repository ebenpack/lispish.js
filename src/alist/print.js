var car = require('../cons/car');
var cdr = require('../cons/cdr');
var pair = require('../cons/pair');

/**
 * Returns a string representation of the
 * given association list. Currently, some
 * assumptions are made about the given list.
 * Namely, that the values are either primitives or
 * nested association lists.
 * @param  {cons} L
 * @return {string}
 */
function print(L){
    function getIndent(n){
        return Array(n * 4).join(' ');
    }
    function helperOne(L, indent){
        return '{\n' + helper(L, '', indent + 1) + '\n' + getIndent(indent) + '}';
    }
    function helper(L, spacer, indent){
        if (L === null){
            return '';
        } else {
            if (pair(cdr(car(L)))){
                return spacer +
                    getIndent(indent) +
                    car(car(L)) +
                    ': ' +
                    helperOne(cdr(car(L)), indent) +
                    helper(cdr(L), ',\n', indent);
            } else {
                return spacer +
                    getIndent(indent) +
                    car(car(L)) +
                    ': ' +
                    cdr(car(L)) +
                    helper(cdr(L), ',\n', indent);
            }
        }
    }
    return helperOne(L, 0);
}

module.exports = print;