/**
 * Given an array-like, returns a real array.
 * @param  {Array-like} args
 * @return {Arrau}
 */
function argsHelper(args){
    var newArgs = new Array(args.length);
    for(var i = 0, len = newArgs.length; i < len; ++i) {
        newArgs[i] = args[i];
    }
    return newArgs;
}

module.exports = argsHelper;