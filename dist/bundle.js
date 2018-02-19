/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/// <reference path="../cons.d.ts" />
/**
 * Returns the cdr of a cons
 * @param  {Cons} cons cons to be cdr'd
 * @return {*}      cdr value of the given cons
 */
/* harmony default export */ __webpack_exports__["a"] = (function (cons) { return cons(1); });


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/// <reference path="../cons.d.ts" />
/**
 * Returns the car of a cons
 * @param  {Cons} cons cons to be car'd
 * @return {*}      car value of the given cons
 */
/* harmony default export */ __webpack_exports__["a"] = (function (cons) { return cons(0); });


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />

/**
 * Returns a boolean indicating whether the given parameter
 * is the empty list.
 * @param  {*} c
 * @return {boolean}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (c) { return c === __WEBPACK_IMPORTED_MODULE_0__nil__["a" /* default */]; });


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConsType__ = __webpack_require__(13);
/// <reference path="../cons.d.ts" />

/**
 * Returns an immutable cons pair consisting
 * of a and b
 * @param  {*} car
 * @param  {*} cdr
 * @return {Cons}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (car, cdr) { return function (pick) {
    return pick === 0 ? car : pick === 1 ? cdr : __WEBPACK_IMPORTED_MODULE_0__ConsType__["a" /* default */];
}; });


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (null);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConsType__ = __webpack_require__(13);

/**
 * Returns a boolean indicating whether the given parameter is a cons pair.
 * @param  {*} c
 * @return {boolean}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (c) {
    return typeof c === "function" && c(3) === __WEBPACK_IMPORTED_MODULE_0__ConsType__["a" /* default */];
});


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_equal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />




/**
 * Finds and returns the first key-value pair
 * which has a key matching that passed in.
 * Returns false if no match is found.
 * @param  {*} key
 * @param  {Cons} L
 * @return {Cons}
 */
var get = function (key, L) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(L) ? L : Object(__WEBPACK_IMPORTED_MODULE_2__cons_equal__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L)), key) ? Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L)) : get(key, Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L));
};
/* harmony default export */ __webpack_exports__["a"] = (get);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pair__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car__ = __webpack_require__(1);
/// <reference path="../cons.d.ts" />



/**
 * Returns a boolean indicating whether to two given parameters
 * are equal. If the paramters are cons pairs, equality is determined
 * by the equality of their members.
 * @param  {*} a
 * @param  {*} b
 * @return {boolean}
 */
var equal = function (a, b) {
    // If a is a pair and b is not (or vice versa),
    // these cannot be equal.
    return Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(a) !== Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(b)
        ? false
        : // If car(a) is a pair and car(b) is not (or vice versa),
            // these cannot be equal.
            (Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__car__["a" /* default */])(a))) !== (Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(b) && Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__car__["a" /* default */])(b)))
                ? false
                : // If cdr(a) is a pair and cdr(b) is not (or vice versa),
                    // these cannot be equal.
                    (Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(a) && Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cdr__["a" /* default */])(a))) !== (Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(b) && Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cdr__["a" /* default */])(b)))
                        ? false
                        : // If a is a pair (which, if we have reached this point,
                            // means that b must also be a pair), recurse.
                            // Otherwise, test the equality of a and b directly.
                            Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(a)
                                ? equal(Object(__WEBPACK_IMPORTED_MODULE_2__car__["a" /* default */])(a), Object(__WEBPACK_IMPORTED_MODULE_2__car__["a" /* default */])(b)) && equal(Object(__WEBPACK_IMPORTED_MODULE_1__cdr__["a" /* default */])(a), Object(__WEBPACK_IMPORTED_MODULE_1__cdr__["a" /* default */])(b))
                                : a === b;
};
/* harmony default export */ __webpack_exports__["a"] = (equal);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_args__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />



/**
 * Returns a cons list constructed from the given parameters.
 * @return {Cons}
 */
/* harmony default export */ __webpack_exports__["a"] = (function () {
    var outerArgs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        outerArgs[_i] = arguments[_i];
    }
    var helper = function (args) {
        return args.length === 0
            ? __WEBPACK_IMPORTED_MODULE_2__cons_nil__["a" /* default */]
            : Array.isArray(args[0])
                ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(helper(args[0]), helper(args.slice(1)))
                : Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(args[0], helper(args.slice(1)));
    };
    return outerArgs.length === 1 && Array.isArray(outerArgs[0])
        ? helper(outerArgs[0])
        : helper(Object(__WEBPACK_IMPORTED_MODULE_1__helpers_args__["a" /* default */])(outerArgs));
});


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Given an array-like, returns a real array.
 * @param  {Array-like} args
 * @return {Arrau}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (args) { return Array.prototype.slice.call(args); });


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />




/**
 * Returns a new list that is the result
 * of concatenating L2 onto the end of L1;
 * @param  {Cons} L1
 * @param  {Cons} L2
 * @return {Cons}
 */
var concat = function (L1, L2) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(L1) ? L2 : Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L1), concat(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L1), L2));
};
/* harmony default export */ __webpack_exports__["a"] = (concat);


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__foldl__ = __webpack_require__(18);
/// <reference path="../cons.d.ts" />

/**
 * Returns the length of the given list
 * @param  {Cons} L list
 * @return {integer}   length of the given list.
 */
/* harmony default export */ __webpack_exports__["a"] = (function (L) { return Object(__WEBPACK_IMPORTED_MODULE_0__foldl__["a" /* default */])(function (acc, curr) { return acc + 1; }, 0, L); });


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />



/**
 * Call the given function with the list of arguments supplied.
 * @param  {Function} fn
 * @param  {Cons}   args
 * @return {*}
 */
// TODO: Remove bind?
var apply = function (fn, args) {
    var helper = function (fn, args) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(args))
            ? fn(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(args))
            : apply(fn.bind(null, Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(args)), Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(args));
    };
    return helper(fn, args);
};
/* harmony default export */ __webpack_exports__["a"] = (apply);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (Symbol("Cons"));


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pair__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />




/**
 * Returns a string representation of a cons.
 * cons prefix, suffix, and separator can all
 * optionally be defined by the user.
 * @param  {Cons} c    cons to be printed
 * @param  {(Object|undefined)} options Optional options object
 * @return {string}      String representation of the given cons
 */
var print = function (c, options) {
    var opts = options || {};
    var printHelper = function (c, separator, nil) {
        var carResult = Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(c)
            ? Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__car__["a" /* default */])(c))
                ? printHelper(Object(__WEBPACK_IMPORTED_MODULE_2__car__["a" /* default */])(c), separator, nil)
                : !Object(__WEBPACK_IMPORTED_MODULE_3__isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__car__["a" /* default */])(c)) ? Object(__WEBPACK_IMPORTED_MODULE_2__car__["a" /* default */])(c).toString() : nil
            : "";
        var cdrResult = Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(c)
            ? Object(__WEBPACK_IMPORTED_MODULE_0__pair__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cdr__["a" /* default */])(c))
                ? printHelper(Object(__WEBPACK_IMPORTED_MODULE_1__cdr__["a" /* default */])(c), separator, nil)
                : !Object(__WEBPACK_IMPORTED_MODULE_3__isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cdr__["a" /* default */])(c)) ? Object(__WEBPACK_IMPORTED_MODULE_1__cdr__["a" /* default */])(c).toString() : nil
            : "";
        var newSeparator = carResult === "" || cdrResult === "" ? "" : separator;
        return ((typeof opts.prefix !== "undefined" ? opts.prefix : "(") +
            carResult +
            newSeparator +
            cdrResult +
            (typeof opts.suffix !== "undefined" ? opts.suffix : ")"));
    };
    return printHelper(c, typeof opts.separator !== "undefined" ? opts.separator : " . ", typeof opts.nil !== "undefined" ? opts.nil : "()");
};
/* harmony default export */ __webpack_exports__["a"] = (print);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Compose functions a and b
 * @param  {Function} a Outer function
 * @param  {Function} b Inner function
 * @return {Function}   Composed function
 */
/* harmony default export */ __webpack_exports__["a"] = (function (a, b) { return function (c) { return a(b(c)); }; });


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />



/**
 * Returns true if every element in the list passes the
 * test implemented by the provided callback function.
 * The callback function is passed the current value
 * and the current index in the list.
 * @param  {Function} fn
 * @param  {Cons} L
 * @return {boolean}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (fn, L) {
    var helper = function (fn, idx, L) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__cons_isempty__["a" /* default */])(L)
            ? true
            : !fn(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L), idx) ? false : helper(fn, idx + 1, Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L));
    };
    return helper(fn, 0, L);
});


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_pair__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />






/**
 * Flatten a list.
 * @return {Cons}
 */
var flatten = function (L) {
    return Object(__WEBPACK_IMPORTED_MODULE_5__cons_isempty__["a" /* default */])(L)
        ? L
        : !Object(__WEBPACK_IMPORTED_MODULE_3__cons_pair__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L))
            ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L), flatten(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L)))
            : Object(__WEBPACK_IMPORTED_MODULE_4__concat__["a" /* default */])(flatten(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L)), flatten(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L)));
};
/* harmony default export */ __webpack_exports__["a"] = (flatten);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />



/**
 * Applies the given callback function against an accumulator
 * and each value of the cons list (from left-to-right) in order
 * to reduce it to a single value.
 * @param  {Function} fn
 * @param  {*}   acc
 * @param  {Cons} L
 * @return {Cons}
 */
var foldl = function (fn, acc, L) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__cons_isempty__["a" /* default */])(L)
        ? acc
        : Object(__WEBPACK_IMPORTED_MODULE_2__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L))
            ? fn(acc, Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L))
            : foldl(fn, fn(acc, Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L)), Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L));
};
/* harmony default export */ __webpack_exports__["a"] = (foldl);


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />





/**
 * Returns a new cons list with the results of calling the provided
 * function on every element.
 * @param  {Function} fn callback function
 * @param  {Cons} L  cons list to be mapped
 * @return {Cons}
 */
var map = function (fn, L) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(L)
        ? L
        : Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L))
            ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(fn(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L)), __WEBPACK_IMPORTED_MODULE_4__cons_nil__["a" /* default */])
            : Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(fn(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L)), map(fn, Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L)));
};
/* harmony default export */ __webpack_exports__["a"] = (map);


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />





/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the end.
 * @param  {*} val
 * @param  {Cons} L
 * @return {Cons}
 */
var push = function (val, L) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(L)
        ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(val, __WEBPACK_IMPORTED_MODULE_4__cons_nil__["a" /* default */])
        : Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L))
            ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L), Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(val, __WEBPACK_IMPORTED_MODULE_4__cons_nil__["a" /* default */]))
            : Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L), push(val, Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L)));
};
/* harmony default export */ __webpack_exports__["a"] = (push);


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list_list__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_cons__ = __webpack_require__(3);
/// <reference path="../cons.d.ts" />


/**
 * Returns an association list with a single key-value pair.
 * @param  {*} key
 * @param  {*} value
 * @return {Cons}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (key, value) { return Object(__WEBPACK_IMPORTED_MODULE_0__list_list__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_cons__["a" /* default */])(key, value)); });


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_map__ = __webpack_require__(19);
/// <reference path="../cons.d.ts" />




/**
 * Map over an association list.
 * @param  {Function} fn
 * @param  {alist} L
 * @return {list}
 */
var map = function (fn, L) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__list_map__["a" /* default */])(function (v) { return Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(v), fn(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(v), Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(v))); }, L);
};
/* harmony default export */ __webpack_exports__["a"] = (map);


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__get__ = __webpack_require__(6);
/// <reference path="../cons.d.ts" />





/**
 * Returns a new alist. If the given key
 * pair existed in the original list, the
 * value will be replaced with the one privded. Otherwise
 * the key-value pair will be added.
 * @param  {*} key
 * @param  {*} value
 * @param  {Cons} L
 * @return {Cons}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (key, value, L) {
    var helper = function (L, key, value) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L)) === key
            ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(key, value), Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L))
            : Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L), helper(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L), key, value));
    };
    return Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__get__["a" /* default */])(key, L))
        ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(key, value), L)
        : helper(L, key, value);
});


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cons", function() { return cons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helpers", function() { return helpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "list", function() { return list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alist", function() { return alist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fun", function() { return fun; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trie", function() { return trie; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_main__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_args__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_contains__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__list_dequeue__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__list_enqueue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__list_every__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_filter__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_flatten__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_foldl__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_foldr__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__list_get__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__list_length__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__list_map__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__list_peek__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__list_pop__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__list_push__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__list_range__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__list_reverse__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__list_slice__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__list_some__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__list_sort__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__list_zip__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__alist_alist__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__alist_equal__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__alist_get__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__alist_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__alist_print__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__alist_put__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__fun_apply__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__fun_compose__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__fun_curry__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__fun_Y__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__trie_getTrie__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__trie_putTrie__ = __webpack_require__(45);

var cons = __WEBPACK_IMPORTED_MODULE_0__cons_main__;
// helpers

var helpers = { args: __WEBPACK_IMPORTED_MODULE_1__helpers_args__["a" /* default */] };
// list






















var list = {
    concat: __WEBPACK_IMPORTED_MODULE_3__list_concat__["a" /* default */],
    contains: __WEBPACK_IMPORTED_MODULE_4__list_contains__["a" /* default */],
    dequeue: __WEBPACK_IMPORTED_MODULE_5__list_dequeue__["a" /* default */],
    enqueue: __WEBPACK_IMPORTED_MODULE_6__list_enqueue__["a" /* default */],
    every: __WEBPACK_IMPORTED_MODULE_7__list_every__["a" /* default */],
    filter: __WEBPACK_IMPORTED_MODULE_8__list_filter__["a" /* default */],
    flatten: __WEBPACK_IMPORTED_MODULE_9__list_flatten__["a" /* default */],
    foldl: __WEBPACK_IMPORTED_MODULE_10__list_foldl__["a" /* default */],
    foldr: __WEBPACK_IMPORTED_MODULE_11__list_foldr__["a" /* default */],
    get: __WEBPACK_IMPORTED_MODULE_12__list_get__["a" /* default */],
    length: __WEBPACK_IMPORTED_MODULE_13__list_length__["a" /* default */],
    list: __WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* default */],
    map: __WEBPACK_IMPORTED_MODULE_14__list_map__["a" /* default */],
    peek: __WEBPACK_IMPORTED_MODULE_15__list_peek__["a" /* default */],
    pop: __WEBPACK_IMPORTED_MODULE_16__list_pop__["a" /* default */],
    push: __WEBPACK_IMPORTED_MODULE_17__list_push__["a" /* default */],
    range: __WEBPACK_IMPORTED_MODULE_18__list_range__["a" /* default */],
    reverse: __WEBPACK_IMPORTED_MODULE_19__list_reverse__["a" /* default */],
    slice: __WEBPACK_IMPORTED_MODULE_20__list_slice__["a" /* default */],
    some: __WEBPACK_IMPORTED_MODULE_21__list_some__["a" /* default */],
    sort: __WEBPACK_IMPORTED_MODULE_22__list_sort__["a" /* default */],
    zip: __WEBPACK_IMPORTED_MODULE_23__list_zip__["a" /* default */]
};
// alist






var alist = {
    alist: __WEBPACK_IMPORTED_MODULE_24__alist_alist__["a" /* default */],
    alistMap: __WEBPACK_IMPORTED_MODULE_27__alist_map__["a" /* default */],
    alistPrint: __WEBPACK_IMPORTED_MODULE_28__alist_print__["a" /* default */],
    equal: __WEBPACK_IMPORTED_MODULE_25__alist_equal__["a" /* default */],
    get: __WEBPACK_IMPORTED_MODULE_26__alist_get__["a" /* default */],
    put: __WEBPACK_IMPORTED_MODULE_29__alist_put__["a" /* default */]
};
// fun




var fun = {
    apply: __WEBPACK_IMPORTED_MODULE_30__fun_apply__["a" /* default */],
    compose: __WEBPACK_IMPORTED_MODULE_31__fun_compose__["a" /* default */],
    curry: __WEBPACK_IMPORTED_MODULE_32__fun_curry__["a" /* default */],
    Y: __WEBPACK_IMPORTED_MODULE_33__fun_Y__["a" /* default */]
};


var trie = {
    getTrie: __WEBPACK_IMPORTED_MODULE_34__trie_getTrie__["a" /* default */],
    putTrie: __WEBPACK_IMPORTED_MODULE_35__trie_putTrie__["a" /* default */]
};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cons", function() { return cons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "car", function() { return car; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdr", function() { return cdr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caar", function() { return caar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cadr", function() { return cadr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdar", function() { return cdar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cddr", function() { return cddr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caaar", function() { return caaar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caadr", function() { return caadr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cadar", function() { return cadar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caddr", function() { return caddr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdaar", function() { return cdaar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdadr", function() { return cdadr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cddar", function() { return cddar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdddr", function() { return cdddr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caaaar", function() { return caaaar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caaadr", function() { return caaadr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caadar", function() { return caadar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caaddr", function() { return caaddr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cadaar", function() { return cadaar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cadadr", function() { return cadadr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caddar", function() { return caddar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cadddr", function() { return cadddr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdaaar", function() { return cdaaar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdaadr", function() { return cdaadr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdadar", function() { return cdadar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdaddr", function() { return cdaddr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cddaar", function() { return cddaar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cddadr", function() { return cddadr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdddar", function() { return cdddar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cddddr", function() { return cddddr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "print", function() { return print; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equal", function() { return equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nil", function() { return nil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__print__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__equal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pair__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nil__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fun_compose__ = __webpack_require__(15);









var cons = __WEBPACK_IMPORTED_MODULE_0__cons__["a" /* default */];
var car = __WEBPACK_IMPORTED_MODULE_1__car__["a" /* default */];
var cdr = __WEBPACK_IMPORTED_MODULE_2__cdr__["a" /* default */];
var caar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, car);
var cadr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, cdr);
var cdar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, car);
var cddr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, cdr);
var caaar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, car));
var caadr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, cdr));
var cadar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, car));
var caddr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, cdr));
var cdaar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, car));
var cdadr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, cdr));
var cddar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, car));
var cdddr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, cdr));
var caaaar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, car)));
var caaadr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, cdr)));
var caadar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, car)));
var caaddr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, cdr)));
var cadaar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, car)));
var cadadr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, cdr)));
var caddar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, car)));
var cadddr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, cdr)));
var cdaaar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, car)));
var cdaadr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, cdr)));
var cdadar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, car)));
var cdaddr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, cdr)));
var cddaar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, car)));
var cddadr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(car, cdr)));
var cdddar = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, car)));
var cddddr = Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, Object(__WEBPACK_IMPORTED_MODULE_8__fun_compose__["a" /* default */])(cdr, cdr)));
var print = __WEBPACK_IMPORTED_MODULE_3__print__["a" /* default */];
var equal = __WEBPACK_IMPORTED_MODULE_4__equal__["a" /* default */];
var pair = __WEBPACK_IMPORTED_MODULE_5__pair__["a" /* default */];
var isEmpty = __WEBPACK_IMPORTED_MODULE_6__isempty__["a" /* default */];
var nil = __WEBPACK_IMPORTED_MODULE_7__nil__["a" /* default */];


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_equal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />




/**
 * Returns true if the specified value is equal to at least one element of the given list.
 * @param  {*} a
 * @param  {Cons} L
 * @return {Boolean}
 */
var contains = function (a, L) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(L) ? false : Object(__WEBPACK_IMPORTED_MODULE_0__cons_equal__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L), a) ? true : contains(a, Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L));
};
/* harmony default export */ __webpack_exports__["a"] = (contains);


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />


/**
 * Given a cons list, returns a new cons list
 * with the first item removed
 * @param  {Cons} L
 * @return {Cons}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (L) { return (Object(__WEBPACK_IMPORTED_MODULE_1__cons_isempty__["a" /* default */])(L) ? L : Object(__WEBPACK_IMPORTED_MODULE_0__cons_cdr__["a" /* default */])(L)); });


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/// <reference path="../cons.d.ts" />

/**
 * Given a cons list and a value, returns a new cons list
 * with the value appended to the front of the list.
 * @param  {*} val
 * @param  {Cons} L
 * @return {Cons}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (val, L) { return Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(val, L); });


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />





/**
 * Returns a new cons list consisting of the values
 * of the given cons list for which the the callback function,
 * called passing the value of each item in the list in turn,
 * evaluated to true.
 * @param  {Function} fn
 * @param  {Cons} L
 * @return {Cons}
 */
var filter = function (fn, L) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(L)
        ? L
        : Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L))
            ? fn(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L)) ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L), __WEBPACK_IMPORTED_MODULE_4__cons_nil__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_4__cons_nil__["a" /* default */]
            : fn(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L)) ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L), filter(fn, Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L))) : filter(fn, Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L));
};
/* harmony default export */ __webpack_exports__["a"] = (filter);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />



/**
 * Applies the given callback function against an accumulator
 * and each value of the cons list (from right-to-left) in order
 * to reduce it to a single value.
 * @param  {Function} fn
 * @param  {*}   acc
 * @param  {Cons} L
 * @return {Cons}
 */
// TODO: make foldl and folr
var foldr = function (fn, acc, L) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__cons_isempty__["a" /* default */])(L)
        ? acc
        : Object(__WEBPACK_IMPORTED_MODULE_2__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L))
            ? fn(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L), acc)
            : fn(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L), foldr(fn, acc, Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L)));
};
/* harmony default export */ __webpack_exports__["a"] = (foldr);


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />



/**
 * Returns the value at the given index, or nil if the index exceeds the
 * length of the list.
 * @param  {number} idx
 * @param  {Cons} L
 * @return {boolean}
 */
var get = function (idx, L) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__cons_isempty__["a" /* default */])(L) ? L : idx === 0 ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L) : get(idx - 1, Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L));
};
/* harmony default export */ __webpack_exports__["a"] = (get);


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />



/**
 * Returns the value of the last item in a cons list.
 * @param  {Cons} L
 * @return {*}
 */
var peek = function (L) {
    return Object(__WEBPACK_IMPORTED_MODULE_2__cons_isempty__["a" /* default */])(L) ? L : Object(__WEBPACK_IMPORTED_MODULE_2__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L)) ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L) : peek(Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L));
};
/* harmony default export */ __webpack_exports__["a"] = (peek);


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />





/**
 * Given a cons list, returns a new list with the last item removed.
 * @param  {Cons} L
 * @return {Cons}
 */
var pop = function (L) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(L) || Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L)) ? __WEBPACK_IMPORTED_MODULE_4__cons_nil__["a" /* default */] : Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L), pop(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L)));
};
/* harmony default export */ __webpack_exports__["a"] = (pop);


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />


/**
 * Returns a range list from n to m.
 * @param  {integer} n If m in not passed, the end of the range (exlusive),
 * otherwise the start of the range (inclusive).
 * @param  {integer} m If passed, the end of the range (exlusive).
 * @param  {(integer|undefined)} step steps to take between each item in the range. Defaults to 1.
 * @return {Cons} List from n to m.
 */
/* harmony default export */ __webpack_exports__["a"] = (function (m, n, step) {
    var abs = function (n) { return (n < 0 ? -n : n); };
    var rangeHelper = function (m, n, step) {
        return m === n
            ? __WEBPACK_IMPORTED_MODULE_1__cons_nil__["a" /* default */]
            : goodStep(m, n, step)
                ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(m, rangeHelper(m + step, n, step))
                : Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(m, __WEBPACK_IMPORTED_MODULE_1__cons_nil__["a" /* default */]);
    };
    var goodStep = function (start, stop, step) {
        return abs(stop - start) > abs(stop - (start + step));
    };
    var stepHelper = function (m, step, n) {
        return typeof n === "undefined"
            ? goodStep(0, m, step) ? rangeHelper(0, m, step) : __WEBPACK_IMPORTED_MODULE_1__cons_nil__["a" /* default */]
            : goodStep(m, n, step) ? rangeHelper(m, n, step) : __WEBPACK_IMPORTED_MODULE_1__cons_nil__["a" /* default */];
    };
    return typeof step === "undefined"
        ? stepHelper(m, 1, n)
        : stepHelper(m, step, n);
});


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />





/**
 * Returns a new list, which is a
 * reversed copy of the list passed in.
 * @param  {Cons} L
 * @return {Cons}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (L) {
    var helper = function (L, rev) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(L) ? rev : helper(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L), Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L), rev));
    };
    return helper(L, __WEBPACK_IMPORTED_MODULE_4__cons_nil__["a" /* default */]);
});


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__length__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cons_isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />






/**
 * Given a list, returns a new list 'slice'.
 * If n is not passed in, the slice will be from m to
 * the end of the original list. If n is passed in,
 * then the slice will be from m to n. Invalid slices
 * (e.g. where m is larger than n) will return nil.
 * @param  {Cons} L
 * @param  {integer} m
 * @param  {(integer|undefined)} n
 * @return {Cons}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (L, m, n) {
    var sliceHelper = function (L, m, n, current) {
        return current === n || m >= n
            ? __WEBPACK_IMPORTED_MODULE_5__cons_nil__["a" /* default */]
            : Object(__WEBPACK_IMPORTED_MODULE_4__cons_isempty__["a" /* default */])(L)
                ? L
                : current >= m
                    ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L), sliceHelper(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L), m, n, current + 1))
                    : sliceHelper(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L), m, n, current + 1);
    };
    return typeof n === "undefined"
        ? sliceHelper(L, m, Object(__WEBPACK_IMPORTED_MODULE_3__length__["a" /* default */])(L), 0)
        : sliceHelper(L, m, n, 0);
});


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />



/**
 * Returns true if some element in the list passes the
 * test implemented by the provided callback function.
 * The callback function is passed the current value
 * and the current index in the list.
 * @param  {Function} fn
 * @param  {Cons} L
 * @return {boolean}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (fn, L) {
    var someHelper = function (fn, idx, L) {
        return Object(__WEBPACK_IMPORTED_MODULE_2__cons_isempty__["a" /* default */])(L)
            ? false
            : fn(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L), idx) ? true : someHelper(fn, idx + 1, Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L));
    };
    return someHelper(fn, 0, L);
});


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__length__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cons_isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />






/**
 * Given a list, returns a new, sorted list.
 * Optionally, a custom comparison function can be passed.
 * By default, ascending sort if performed.
 * @param  {Function} fn
 * @param  {Cons} L
 * @return {Cons}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (fn, L) {
    var merge = function (L1, L2, fn) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__cons_isempty__["a" /* default */])(L1)
            ? L2
            : Object(__WEBPACK_IMPORTED_MODULE_4__cons_isempty__["a" /* default */])(L2)
                ? L1
                : fn(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L1), Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L2))
                    ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L1), merge(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L1), L2, fn))
                    : Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L2), merge(L1, Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L2), fn));
    };
    var split = function (L, lo, hi) {
        var splitHelper = function (L, lo, hi, curr) {
            return curr < lo
                ? splitHelper(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L), lo, hi, curr + 1)
                : curr === hi
                    ? __WEBPACK_IMPORTED_MODULE_5__cons_nil__["a" /* default */]
                    : Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L), splitHelper(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L), lo, hi, curr + 1));
        };
        return splitHelper(L, lo, hi, 0);
    };
    var msort = function (L, fn, len) {
        return Object(__WEBPACK_IMPORTED_MODULE_4__cons_isempty__["a" /* default */])(L) || Object(__WEBPACK_IMPORTED_MODULE_4__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L))
            ? L
            : merge(msort(split(L, 0, Math.floor(len / 2)), fn, Math.floor(len / 2)), msort(split(L, Math.floor(len / 2), len), fn, len - Math.floor(len / 2)), fn);
    };
    return msort(L, fn, Object(__WEBPACK_IMPORTED_MODULE_3__length__["a" /* default */])(L));
});


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />





/**
 * Given two cons lists, returns a new cons list composed of
 * cons pairs consisting of positionally determined elements
 * from each of the given lists. The resulting list will only contain
 * as many elements as contained in the shorter of the two lists.
 * @param  {Cons} L1
 * @param  {Cons} L2
 * @return {Cons}
 */
var zip = function (L1, L2) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(L1) || Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(L2)
        ? __WEBPACK_IMPORTED_MODULE_4__cons_nil__["a" /* default */]
        : Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L1)) || Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L2))
            ? Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L1), Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L2)), __WEBPACK_IMPORTED_MODULE_4__cons_nil__["a" /* default */])
            : Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L1), Object(__WEBPACK_IMPORTED_MODULE_1__cons_car__["a" /* default */])(L2)), zip(Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L1), Object(__WEBPACK_IMPORTED_MODULE_2__cons_cdr__["a" /* default */])(L2)));
};
/* harmony default export */ __webpack_exports__["a"] = (zip);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_pair__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_equal__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__list_every__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__get__ = __webpack_require__(6);
/// <reference path="../cons.d.ts" />






/**
 * Compares two association lists for equality. Two association
 * lists are considered equal if all the key-value-pairs from the
 * first list are in the second, and vice-versa. The ordering and
 * relative positions of these KVPs are irrelevant for these purposes.
 * @param  {Cons} L1
 * @param  {Cons} L2
 * @return {Cons}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (L1, L2) {
    return Object(__WEBPACK_IMPORTED_MODULE_4__list_every__["a" /* default */])(function (val) { return Object(__WEBPACK_IMPORTED_MODULE_0__cons_pair__["a" /* default */])(val) && Object(__WEBPACK_IMPORTED_MODULE_1__cons_equal__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__get__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__cons_car__["a" /* default */])(val), L2), Object(__WEBPACK_IMPORTED_MODULE_3__cons_cdr__["a" /* default */])(val)); }, L1) &&
        Object(__WEBPACK_IMPORTED_MODULE_4__list_every__["a" /* default */])(function (val) { return Object(__WEBPACK_IMPORTED_MODULE_0__cons_pair__["a" /* default */])(val) && Object(__WEBPACK_IMPORTED_MODULE_1__cons_equal__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__get__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__cons_car__["a" /* default */])(val), L1), Object(__WEBPACK_IMPORTED_MODULE_3__cons_cdr__["a" /* default */])(val)); }, L2);
});


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_pair__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_isempty__ = __webpack_require__(2);
/// <reference path="../cons.d.ts" />




/**
 * Returns a string representation of the
 * given association list. Currently, some
 * assumptions are made about the given list.
 * Namely, that the values are either primitives or
 * nested association lists.
 * @param  {Cons} L
 * @return {string}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (L) {
    var getIndent = function (n) { return Array(n * 4).join(" "); };
    var outerWrap = function (L, indent) {
        return "{\n" + helper(L, "", indent + 1) + "\n" + getIndent(indent) + "}";
    };
    var helper = function (L, spacer, indent) {
        return Object(__WEBPACK_IMPORTED_MODULE_3__cons_isempty__["a" /* default */])(L)
            ? ""
            : Object(__WEBPACK_IMPORTED_MODULE_2__cons_pair__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L)))
                ? spacer +
                    getIndent(indent) +
                    Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L)) +
                    ": " +
                    outerWrap(Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L)), indent) +
                    helper(Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L), ",\n", indent)
                : spacer +
                    getIndent(indent) +
                    Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L)) +
                    ": " +
                    Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(L)) +
                    helper(Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(L), ",\n", indent);
    };
    return outerWrap(L, 0);
});


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_cons__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__apply__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />



/**
 * Curry the given function. If the number of expected parameters
 * is passed explicitly, this will be used. Otherwise, the arity of the
 * function passed in will be used.
 * @param  {Function} fn
 * @param  {integer}  arity
 * @return {Function}
 */
/* harmony default export */ __webpack_exports__["a"] = (function (fn, arity) {
    var helper = function (fn, arity, args) {
        return arity === 0
            ? Object(__WEBPACK_IMPORTED_MODULE_1__apply__["a" /* default */])(fn, args)
            : function (arg) { return helper(fn, arity - 1, Object(__WEBPACK_IMPORTED_MODULE_0__cons_cons__["a" /* default */])(arg, args)); };
    };
    return typeof arity === "undefined"
        ? helper(fn, fn.length, __WEBPACK_IMPORTED_MODULE_2__cons_nil__["a" /* default */])
        : helper(fn, arity, __WEBPACK_IMPORTED_MODULE_2__cons_nil__["a" /* default */]);
});


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__apply__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_args__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(8);
/// <reference path="../cons.d.ts" />



/* harmony default export */ __webpack_exports__["a"] = (function (f) {
    return f((function (h) { return function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0__apply__["a" /* default */])(f(h(h)), Object(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__helpers_args__["a" /* default */])(rest)));
    }; })(function (h) { return function () {
        var rest = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rest[_i] = arguments[_i];
        }
        return Object(__WEBPACK_IMPORTED_MODULE_0__apply__["a" /* default */])(f(h(h)), Object(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__helpers_args__["a" /* default */])(rest)));
    }; }));
});


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_flatten__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__alist_get__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alist_map__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cons_isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />







/* harmony default export */ __webpack_exports__["a"] = (function (T, str) {
    var getLeaves = function (T, list) {
        return Object(__WEBPACK_IMPORTED_MODULE_5__cons_isempty__["a" /* default */])(T)
            ? list
            : Object(__WEBPACK_IMPORTED_MODULE_4__alist_map__["a" /* default */])(function (key, val) { return (key === "_value" ? val : getLeaves(val, list)); }, T);
    };
    var descendToNode = function (T, word) {
        return Object(__WEBPACK_IMPORTED_MODULE_5__cons_isempty__["a" /* default */])(T)
            ? __WEBPACK_IMPORTED_MODULE_6__cons_nil__["a" /* default */]
            : Object(__WEBPACK_IMPORTED_MODULE_5__cons_isempty__["a" /* default */])(word)
                ? __WEBPACK_IMPORTED_MODULE_6__cons_nil__["a" /* default */]
                : Object(__WEBPACK_IMPORTED_MODULE_5__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(word))
                    ? Object(__WEBPACK_IMPORTED_MODULE_3__alist_get__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(word), T)
                    : descendToNode(Object(__WEBPACK_IMPORTED_MODULE_3__alist_get__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__cons_car__["a" /* default */])(word), T), Object(__WEBPACK_IMPORTED_MODULE_1__cons_cdr__["a" /* default */])(word));
    };
    return Object(__WEBPACK_IMPORTED_MODULE_2__list_flatten__["a" /* default */])(getLeaves(descendToNode(T, str), __WEBPACK_IMPORTED_MODULE_6__cons_nil__["a" /* default */]));
});


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cons_print__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_concat__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cons_cdr__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__alist_alist__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cons_car__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alist_get__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alist_put__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__list_push__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cons_isempty__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cons_nil__ = __webpack_require__(4);
/// <reference path="../cons.d.ts" />











/* harmony default export */ __webpack_exports__["a"] = (function (T, name, namespace) {
    var stringifyName = function (name, namespace) {
        return Object(__WEBPACK_IMPORTED_MODULE_0__cons_print__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__list_concat__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1__list_concat__["a" /* default */])(namespace, Object(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* default */])(".")), name), {
            prefix: "",
            suffix: "",
            separator: ""
        });
    };
    var helper = function (T, name, namespace, fullName) {
        return Object(__WEBPACK_IMPORTED_MODULE_9__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_3__cons_cdr__["a" /* default */])(name))
            ? Object(__WEBPACK_IMPORTED_MODULE_9__cons_isempty__["a" /* default */])(T)
                ? Object(__WEBPACK_IMPORTED_MODULE_4__alist_alist__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__cons_car__["a" /* default */])(name), Object(__WEBPACK_IMPORTED_MODULE_4__alist_alist__["a" /* default */])("_value", Object(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* default */])(stringifyName(fullName, namespace))))
                : Object(__WEBPACK_IMPORTED_MODULE_9__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6__alist_get__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__cons_car__["a" /* default */])(name), T))
                    ? Object(__WEBPACK_IMPORTED_MODULE_7__alist_put__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__cons_car__["a" /* default */])(name), Object(__WEBPACK_IMPORTED_MODULE_4__alist_alist__["a" /* default */])("_value", Object(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* default */])(stringifyName(fullName, namespace))), T)
                    : Object(__WEBPACK_IMPORTED_MODULE_7__alist_put__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__cons_car__["a" /* default */])(name), Object(__WEBPACK_IMPORTED_MODULE_7__alist_put__["a" /* default */])("_value", Object(__WEBPACK_IMPORTED_MODULE_8__list_push__["a" /* default */])(stringifyName(fullName, namespace), Object(__WEBPACK_IMPORTED_MODULE_6__alist_get__["a" /* default */])("_value", Object(__WEBPACK_IMPORTED_MODULE_6__alist_get__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__cons_car__["a" /* default */])(name), T))), Object(__WEBPACK_IMPORTED_MODULE_6__alist_get__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__cons_car__["a" /* default */])(name), T)), T)
            : Object(__WEBPACK_IMPORTED_MODULE_9__cons_isempty__["a" /* default */])(T)
                ? Object(__WEBPACK_IMPORTED_MODULE_4__alist_alist__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__cons_car__["a" /* default */])(name), helper(__WEBPACK_IMPORTED_MODULE_10__cons_nil__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__cons_cdr__["a" /* default */])(name), namespace, fullName))
                : Object(__WEBPACK_IMPORTED_MODULE_9__cons_isempty__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_6__alist_get__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__cons_car__["a" /* default */])(name), T))
                    ? Object(__WEBPACK_IMPORTED_MODULE_7__alist_put__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__cons_car__["a" /* default */])(name), helper(__WEBPACK_IMPORTED_MODULE_10__cons_nil__["a" /* default */], Object(__WEBPACK_IMPORTED_MODULE_3__cons_cdr__["a" /* default */])(name), namespace, fullName), T)
                    : Object(__WEBPACK_IMPORTED_MODULE_7__alist_put__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__cons_car__["a" /* default */])(name), helper(Object(__WEBPACK_IMPORTED_MODULE_6__alist_get__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__cons_car__["a" /* default */])(name), T), Object(__WEBPACK_IMPORTED_MODULE_3__cons_cdr__["a" /* default */])(name), namespace, fullName), T);
    };
    return Object(__WEBPACK_IMPORTED_MODULE_9__cons_isempty__["a" /* default */])(name) ? T : helper(T, name, namespace, name);
});


/***/ })
/******/ ]);