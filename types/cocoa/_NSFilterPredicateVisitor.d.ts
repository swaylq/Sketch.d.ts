/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFilterPredicateVisitor<T0 = void, T1 = void, T2 = void> extends NSObject, NSPredicateVisitorProtocol {
    result<R = unknown>(): R;
    substitutedValueForPredicate<R = unknown, P0 = unknown>(_substitutedValueForPredicate: P0): R;
    reset<R = void>(): R;
    dealloc<R = void>(): R;
    initWithPredicate<R = unknown, P0 = unknown>(_initWithPredicate: P0): R;
  }
  namespace _NSFilterPredicateVisitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSPredicateVisitorProtocol {
      alloc<R = _NSFilterPredicateVisitor>(): R;
      new: <R = _NSFilterPredicateVisitor>() => R;
    }
  }
}
