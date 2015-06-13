var cons = require('../cons/cons.js');
var argsHelper = require('../helpers/args.js');

/**
 * Returns a cons list constructed from the given parameters.
 * @return {cons}
 */
function list(){
    function helper(args){
        if (args.length === 0){
            return null;
        } else {
            return cons(args[0], helper(args.slice(1)));
        }
    }
    if (arguments.length === 1 && Array.isArray(arguments[0])){
        return helper(arguments[0]);
    } else {
        return helper(argsHelper(arguments));
    }
    
}

module.exports = list;