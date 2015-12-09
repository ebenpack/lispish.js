/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./cons.d.ts" />

import print = require('./cons/print');
import concat = require('./list/concat');
import list = require('./list/list');
import push = require('./list/push');
import cdr = require('./cons/cdr');
import alist = require('./alist/alist');
import car = require('./cons/car');
import get = require('./alist/get');
import put = require('./alist/put');
import flatten = require('./list/flatten');
import map = require('./alist/map');

function addTrieDogfood(T: cons, name: cons, namespace: cons) {
    function stringifyName(name: cons, namespace: cons): string {
        return print(
            concat(
                concat(
                    namespace,
                    list('.')
                ), name
            ),
            { prefix: '', suffix: '', separator: '' }
        );
    }
    function helper(T: cons, name: cons, namespace: cons, fullName: cons): cons {
        if (cdr(name) === null) {
            if (T === null) {
                return alist(
                    car(name),
                    alist(
                        '_value',
                        list(
                            stringifyName(fullName, namespace)
                        )
                    )
                );
            } else {
                if (get(T, car(name)) === null) {
                    return put(
                        T,
                        car(name),
                        alist(
                            '_value',
                            list(
                                stringifyName(fullName, namespace)
                            )
                        )
                    );
                } else {
                    return put(
                        T,
                        car(name),
                        put(
                            get(
                                T,
                                car(name)
                            ),
                            '_value',
                            push(
                                get(
                                    get(
                                        T,
                                        car(name)
                                    ),
                                    '_value'
                                ),
                                stringifyName(fullName, namespace)
                            )
                        )
                    );
                }
            }
        } else {
            if (T === null) {
                if (get(T, car(name)) === null) {
                    return alist(
                        car(name),
                        helper(
                            null,
                            cdr(name),
                            namespace,
                            fullName
                        )
                    );
                } else {
                    return alist(
                        car(name),
                        helper(
                            get(T, car(name)),
                            cdr(name),
                            namespace,
                            fullName
                        )
                    );
                }
            } else {
                if (get(T, car(name)) === null) {
                    return put(
                        T,
                        car(name),
                        helper(
                            null,
                            cdr(name),
                            namespace,
                            fullName
                        )
                    );
                } else {
                    return put(
                        T,
                        car(name),
                        helper(
                            get(T, car(name)),
                            cdr(name),
                            namespace,
                            fullName
                        )
                    );
                }
            }
        }
    }
    return helper(T, name, namespace, name);
}
function getTrieDogfood(T:cons, str:cons) : cons {
    function getLeaves(T:cons, list:cons) : cons {
        if (T === null) {
            return list;
        } else {
            return map(T, function(key, val) {
                if (key === '_value') {
                    return val;
                } else {
                    return getLeaves(val, list);
                }
            });
        }
    }
    function descendToNode(T : cons, word : cons) {
        if (T === null) {
            return null;
        } else if (cdr(word) === null) {
            return get(T, car(word));
        } else {
            return descendToNode(
                get(T, car(word)),
                cdr(word)
            );
        }
    }
    var f = getLeaves(descendToNode(T, str), null);
    return flatten(f);
}