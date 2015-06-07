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

function permute(S){
    function swap(s, x, y){
        var min = Math.min(x,y);
        var max = Math.max(x,y);
        return s.slice(0, min) + s[max] + s.slice(min+1, max) + s[min] + s.slice(max+1);
    }
    function generate(n, S){
        var result = [];
        if (n === 1){
            return S;
        } else {
            for (var i = 0; i < n; i += 1){
                result = result.concat(generate(n - 1, S));
                if (n % 2 === 0){
                    S = swap(S,i, n-1);
                }
                else{
                    S = swap(S, 0, n-1);
                }
            }
        }
        return result;
    }
    return generate(S.length, S);
}

// In order to provide car/cdr composition shorthand
// (e.g. caaar, cadadadr, etc.), we define properties
// on the cons prototype for many of these permutions.
// This is a bit of a hack, as default getters aren't
// supported in ES5. Proxies would allow us to achieve
// this much more elegantly, but unfortunately they are
// not well supported.
for (var i=0; i<5; i++){
    for (var j=0; j<5; j++){
        var Ds = (new Array(i+1).join('d'));
        var As = (new Array(j+1).join('a'));
        var permutations = permute(As + Ds);
        for (var p=0, len=permutations.length; p <len; p++){
            var perm = permutations[p];
            if (perm !== 'a' && perm !== 'd' && !cons.prototype.hasOwnProperty('c' + perm + 'r')){
                Object.defineProperty(cons.prototype, 'c' + perm + 'r', {
                    get: (function(perm){
                        return function(){
                            function helper(that, perm){
                                if (perm.length===0){
                                    return that;
                                } else{
                                    if (perm[0] === 'a'){
                                        return helper(that.car, perm.slice(1));
                                    } else if (perm[0] === 'd'){
                                        return helper(that.cdr, perm.slice(1));
                                    }
                                }
                            }
                            return helper(this, perm);
                        };
                    })(perm)
                });
            }
        }
    }
}

module.exports = cons;