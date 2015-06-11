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
    return helper(argsHelper(arguments));
}

module.exports = list;