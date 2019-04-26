/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBoundedByPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {}
  namespace NSBoundedByPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
      alloc<R = NSBoundedByPredicateOperator>(): R;
      new: <R = NSBoundedByPredicateOperator>() => R;
    }
  }
}

declare const NSBoundedByPredicateOperator: cocoa.NSBoundedByPredicateOperator.CLASS;
