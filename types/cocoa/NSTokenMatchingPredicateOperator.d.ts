/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTokenMatchingPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSStringPredicateOperator {}
  namespace NSTokenMatchingPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStringPredicateOperator {
      alloc<R = NSTokenMatchingPredicateOperator>(): R;
      new: <R = NSTokenMatchingPredicateOperator>() => R;
    }
  }
}

declare const NSTokenMatchingPredicateOperator: cocoa.NSTokenMatchingPredicateOperator.CLASS;
