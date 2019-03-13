/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSSearchFieldBinderPredicateOptionPair<T = any> extends NSObject {
    visitor<R = unknown>(): R;
    predicate<R = unknown>(): R;
    setPredicateName<R = void, P0 = unknown>(_setPredicateName: P0): R;
    predicateName<R = unknown>(): R;
    setPredicateString<R = void, P0 = unknown>(_setPredicateString: P0): R;
    predicateString<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface _NSSearchFieldBinderPredicateOptionPair<T = any> extends NSObject {
      alloc<R = _NSSearchFieldBinderPredicateOptionPair>(): R;
      new: <R = _NSSearchFieldBinderPredicateOptionPair>() => R;
    }
  }
}
