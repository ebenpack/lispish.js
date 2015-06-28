var cons = require('../cons/cons.js');
var args = require('../helpers/args.js');

/**
 * Returns a cons list constructed from the given parameters.
 * @return {cons}
 */
function list(){
    function helper(args){
        if (args.length === 0){
            return null;
        } else {
            if (Array.isArray(args[0])){
                return cons(helper(args[0]), helper(args.slice(1)));
            } else {
                return cons(args[0], helper(args.slice(1)));
            }
        }
    }
    if (arguments.length === 1 && Array.isArray(arguments[0])){
        return helper(arguments[0]);
    } else {
        return helper(args(arguments));
    }
    
}

module.exports = list;