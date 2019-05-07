/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSInPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
    flags<R = number>(): R;
    dealloc<R = void>(): R;
    stringVersion<R = unknown>(): R;
  }
  namespace NSInPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
      alloc<R = NSInPredicateOperator>(): R;
      new: <R = NSInPredicateOperator>() => R;
    }
  }
}

declare const NSInPredicateOperator: cocoa.NSInPredicateOperator.CLASS;
