/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStringPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
    flags<R = number>(): R;
    _modifierString<R = unknown>(): R;
    initWithOperatorType_modifier_variant<R = unknown, P0 = number, P1 = number, P2 = number>(_initWithOperatorType: P0, _modifier: P1, _variant: P2): R;
  }
  namespace NSStringPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
      alloc<R = NSStringPredicateOperator>(): R;
      new: <R = NSStringPredicateOperator>() => R;
    }
  }
}

declare const NSStringPredicateOperator: cocoa.NSStringPredicateOperator.CLASS;
