/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEqualityPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
    setNegation<R = void, P0 = boolean>(_setNegation: P0): R;
    isNegation<R = boolean>(): R;
    initWithOperatorType_modifier_negate_options<R = unknown, P0 = number, P1 = number, P2 = boolean, P3 = number>(_initWithOperatorType: P0, _modifier: P1, _negate: P2, _options: P3): R;
    initWithOperatorType_modifier_negate<R = unknown, P0 = number, P1 = number, P2 = boolean>(_initWithOperatorType: P0, _modifier: P1, _negate: P2): R;
  }
  namespace NSEqualityPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
      alloc<R = NSEqualityPredicateOperator>(): R;
      new: <R = NSEqualityPredicateOperator>() => R;
    }
  }
}

declare const NSEqualityPredicateOperator: cocoa.NSEqualityPredicateOperator.CLASS;
