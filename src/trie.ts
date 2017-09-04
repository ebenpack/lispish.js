/// <reference path="./cons.d.ts" />

import print from "./cons/print";
import concat from "./list/concat";
import list from "./list/list";
import push from "./list/push";
import cdr from "./cons/cdr";
import alist from "./alist/alist";
import car from "./cons/car";
import get from "./alist/get";
import put from "./alist/put";
import flatten from "./list/flatten";
import map from "./alist/map";

// TODO: Make more functional
function addTrieDogfood(T: Cons, name: Cons, namespace: Cons) {
  function stringifyName(name: Cons, namespace: Cons): string {
    return print(concat(concat(namespace, list(".")), name), {
      prefix: "",
      suffix: "",
      separator: ""
    });
  }
  function helper(T: Cons, name: Cons, namespace: Cons, fullName: Cons): Cons {
    if (cdr(name) === null) {
      if (T === null) {
        return alist(
          car(name),
          alist("_value", list(stringifyName(fullName, namespace)))
        );
      } else {
        if (get(car(name), T) === null) {
          return put(
            car(name),
            alist("_value", list(stringifyName(fullName, namespace))),
            T
          );
        } else {
          return put(
            car(name),
            put(
              "_value",
              push(
                stringifyName(fullName, namespace),
                get("_value", get(car(name), T))
              ),
              get(car(name), T)
            ),
            T
          );
        }
      }
    } else {
      if (T === null) {
        if (get(car(name), T) === null) {
          return alist(car(name), helper(null, cdr(name), namespace, fullName));
        } else {
          return alist(
            car(name),
            helper(get(car(name), T), cdr(name), namespace, fullName)
          );
        }
      } else {
        if (get(car(name), T) === null) {
          return put(
            car(name),
            helper(null, cdr(name), namespace, fullName),
            T
          );
        } else {
          return put(
            car(name),
            helper(get(car(name), T), cdr(name), namespace, fullName),
            T
          );
        }
      }
    }
  }
  return helper(T, name, namespace, name);
}
function getTrieDogfood(T: Cons, str: Cons): Cons {
  function getLeaves(T: Cons, list: Cons): Cons {
    if (T === null) {
      return list;
    } else {
      return map(function(key, val) {
        if (key === "_value") {
          return val;
        } else {
          return getLeaves(val, list);
        }
      }, T);
    }
  }
  function descendToNode(T: Cons, word: Cons) {
    if (T === null) {
      return null;
    } else if (cdr(word) === null) {
      return get(T, car(word));
    } else {
      return descendToNode(get(T, car(word)), cdr(word));
    }
  }
  var f = getLeaves(descendToNode(T, str), null);
  return flatten(f);
}
