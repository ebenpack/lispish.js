/**
 * Given an array-like, returns a real array.
 * @param  {Array-like} args
 * @return {Arrau}
 */
function args(args){
    return Array.prototype.slice.call(args);;
}

module.exports = args;