var cons = require('../cons/cons.js');

function list(){
    var args = new Array(arguments.length);
    for(var i = 0, len = args.length; i < len; ++i) {
        args[i] = arguments[i];
    }
    function helper(args){
        if (args.length === 0){
            return null;
        } else {
            return cons(args[0], helper(args.slice(1)));
        }
    }
    return helper(args);
}

module.exports = list;