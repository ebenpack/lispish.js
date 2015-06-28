var cdr = require('./cdr.js');
var car = require('./car.js');
var range = require('../list/range.js');
var compose = require('../fun/compose.js');

function permute(S) {

    function swap(s, x, y) {
        var min = Math.min(x, y);
        var max = Math.max(x, y);
        return s.slice(0, min) + s[max] + s.slice(min + 1, max) + s[min] + s.slice(max + 1);
    }

    // TODO: Make more funcctional
    function generate(n, S) {
        var result = [];
        if (n === 1) {
            return S;
        } else {
            for (var i = 0; i < n; i += 1) {
                result = result.concat(generate(n - 1, S));
                if (n % 2 === 0) {
                    S = swap(S, i, n - 1);
                } else {
                    S = swap(S, 0, n - 1);
                }
            }
        }
        return result;
    }
    return generate(S.length, S);
}

// In order to provide car/cdr composition shorthand
// (e.g. caaar, cadadr, etc.), we define properties
// on the cons prototype for many of these permutions.
// This is a bit of a hack, as default getters aren't
// supported in ES5. Proxies would allow us to achieve
// this much more elegantly, but unfortunately they are
// not well supported.
// TODO: Make more functional
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        var Ds = (new Array(i + 1).join('d'));
        var As = (new Array(j + 1).join('a'));
        var permutations = permute(As + Ds);
        for (var p = 0, len = permutations.length; p < len; p++) {
            var perm = permutations[p];
            if (perm !== 'a' && perm !== 'd' && perm.length < 5 && !exports.hasOwnProperty('c' + perm + 'r')) {
                exports[('c' + perm + 'r')] = (function(perm) {
                    function helper(perm) {
                        if (perm.length === 0) {
                            return function(i){return i;};
                        } else {
                            if (perm[0] === 'a') {
                                return compose(helper(perm.slice(1)), car);
                            } else if (perm[0] === 'd') {
                                return compose(helper(perm.slice(1)), cdr);
                            }
                        }
                    }
                    return helper(perm);
                })(perm);
            }
        }
    }
}