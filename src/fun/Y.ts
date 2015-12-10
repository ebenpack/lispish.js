/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../cons.d.ts" />

import apply = require('./apply');
import args = require('../helpers/args');
import list = require('../list/list');

export = function Y(f: (h: any)=>any) : any  {
    return f(
        (function(h) {
            return function(...rest: any[]) {
                return apply(f(h(h)), list(args(rest)));
            };
        })(function(h) {
            return function(...rest: any[]) {
                return apply(f(h(h)), list(args(rest)));
            };
        })
    );
}