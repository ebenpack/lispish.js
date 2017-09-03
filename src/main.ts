import * as _cons from "./cons/main";
import car from "./cons/car";
import cdr from "./cons/cdr";
import print from "./cons/print";
import equal from "./cons/equal";
import pair from "./cons/pair";

export const cons = _cons;

// helpers
import args from "./helpers/args";
export const helpers = { args };

// list
import _list from "./list/list";
import length from "./list/length";
import range from "./list/range";
import map from "./list/map";
import reduce from "./list/reduce";
import filter from "./list/filter";
import peek from "./list/peek";
import push from "./list/push";
import pop from "./list/pop";
import zip from "./list/zip";
import some from "./list/some";
import every from "./list/every";
import reverse from "./list/reverse";
import concat from "./list/concat";
import enqueue from "./list/enqueue";
import dequeue from "./list/dequeue";
import slice from "./list/slice";
import sort from "./list/sort";
import contains from "./list/contains";
import flatten from "./list/flatten";

export const list = {
  list: _list,
  length,
  range,
  map,
  reduce,
  filter,
  peek,
  push,
  pop,
  zip,
  some,
  every,
  reverse,
  concat,
  enqueue,
  dequeue,
  slice,
  sort,
  contains,
  flatten
};
// alist
import _alist from "./alist/alist";
import put from "./alist/put";
import get from "./alist/get";
import alistPrint from "./alist/print";
import alistMap from "./alist/map";

export const alist = {
  alist: _alist,
  put,
  get,
  alistPrint,
  alistMap
};

// fun
import compose from "./fun/compose";
import apply from "./fun/apply";
import curry from "./fun/curry";
import Y from "./fun/Y";

export const fun = {
  compose,
  apply,
  curry,
  Y
};
