/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCompoundPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
    evaluatePredicates_withObject_substitutionVariables<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_evaluatePredicates: P0, _withObject: P1, _substitutionVariables: P2): R;
    evaluatePredicates_withObject<R = boolean, P0 = unknown, P1 = unknown>(_evaluatePredicates: P0, _withObject: P1): R;
  }
  namespace NSCompoundPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
      alloc<R = NSCompoundPredicateOperator>(): R;
      new: <R = NSCompoundPredicateOperator>() => R;
      notPredicateOperator<R = unknown>(): R;
      orPredicateOperator<R = unknown>(): R;
      andPredicateOperator<R = unknown>(): R;
    }
  }
}

declare const NSCompoundPredicateOperator: cocoa.NSCompoundPredicateOperator.CLASS;
