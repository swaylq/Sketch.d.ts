/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTIPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
    variant<R = number>(): R;
    initForVariant<R = unknown, P0 = number>(_initForVariant: P0): R;
  }
  namespace NSUTIPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
      alloc<R = NSUTIPredicateOperator>(): R;
      new: <R = NSUTIPredicateOperator>() => R;
    }
  }
}

declare const NSUTIPredicateOperator: cocoa.NSUTIPredicateOperator.CLASS;
