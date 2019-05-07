/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBetweenPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {}
  namespace NSBetweenPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
      alloc<R = NSBetweenPredicateOperator>(): R;
      new: <R = NSBetweenPredicateOperator>() => R;
    }
  }
}

declare const NSBetweenPredicateOperator: cocoa.NSBetweenPredicateOperator.CLASS;
