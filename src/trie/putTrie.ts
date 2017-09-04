/// <reference path="../cons.d.ts" />

import print from "../cons/print";
import concat from "../list/concat";
import list from "../list/list";
import cdr from "../cons/cdr";
import alist from "../alist/alist";
import car from "../cons/car";
import get from "../alist/get";
import put from "../alist/put";
import push from "../list/push";

export default (T: Cons, name: Cons, namespace: Cons) => {
  const stringifyName = (name: Cons, namespace: Cons): string =>
    print(concat(concat(namespace, list(".")), name), {
      prefix: "",
      suffix: "",
      separator: ""
    });
  const helper = (
    T: Cons,
    name: Cons,
    namespace: Cons,
    fullName: Cons
  ): Cons => {
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
        return alist(car(name), helper(null, cdr(name), namespace, fullName));
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
  };
  return name === null ? T : helper(T, name, namespace, name);
};
