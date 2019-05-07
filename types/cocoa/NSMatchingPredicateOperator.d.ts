/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMatchingPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSStringPredicateOperator {
    _shouldEscapeForLike<R = boolean>(): R;
    dealloc<R = void>(): R;
    _clearContext<R = void>(): R;
  }
  namespace NSMatchingPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStringPredicateOperator {
      alloc<R = NSMatchingPredicateOperator>(): R;
      new: <R = NSMatchingPredicateOperator>() => R;
    }
  }
}

declare const NSMatchingPredicateOperator: cocoa.NSMatchingPredicateOperator.CLASS;
