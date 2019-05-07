/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLikePredicateOperator<T0 = void, T1 = void, T2 = void> extends NSMatchingPredicateOperator {}
  namespace NSLikePredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMatchingPredicateOperator {
      alloc<R = NSLikePredicateOperator>(): R;
      new: <R = NSLikePredicateOperator>() => R;
    }
  }
}

declare const NSLikePredicateOperator: cocoa.NSLikePredicateOperator.CLASS;
