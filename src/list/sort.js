var cons = require('../cons/cons.js');
var car = require('../cons/car.js');
var cdr = require('../cons/cdr.js');

var length = require('../list/length.js');

function sort(L, fn){
    function merge(L1, L2, fn){
        if (L1 === null){
            return L2;
        } else if (L2 === null){
            return L1;
        } else if (fn(car(L1), car(L2))){
            return cons(car(L1), merge(cdr(L1), L2, fn));
        } else {
            return cons(car(L2), merge(L1, cdr(L2), fn));
        }
    }
    function split(L, lo, hi){
        function splitHelper(L, lo, hi, curr){
            if (curr < lo){
                return splitHelper(cdr(L), lo, hi, curr+1);
            } else if (curr === hi){
                return null;
            } else {
                return cons(car(L), splitHelper(cdr(L), lo, hi, curr+1));
            }
        }
        if (lo < hi && lo >= 0 && hi <= length(L)){
            return splitHelper(L, lo, hi, 0);
        } else {
            return null;
        }
    }
    function msort(L, fn, len){
        if (L === null || cdr(L) === null){
            return L;
        } else {
            return merge(
                msort(split(L, 0, Math.floor(len/2)), fn, Math.floor(len/2)),
                msort(split(L, Math.floor(len/2), len), fn, len - Math.floor(len/2)),
                fn
            );
        }
    }
    if (typeof fn === 'undefined'){
        return msort(L, function(a,b){return a < b;}, length(L));
    } else {
        return msort(L, fn, length(L));
    }
}

module.exports = sort;