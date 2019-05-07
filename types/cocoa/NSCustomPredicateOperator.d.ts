/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCustomPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
    initWithCustomSelector_modifier<R = unknown, P0 = string, P1 = number>(_initWithCustomSelector: P0, _modifier: P1): R;
  }
  namespace NSCustomPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
      alloc<R = NSCustomPredicateOperator>(): R;
      new: <R = NSCustomPredicateOperator>() => R;
    }
  }
}

declare const NSCustomPredicateOperator: cocoa.NSCustomPredicateOperator.CLASS;
