/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSubstringPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSStringPredicateOperator {
    position<R = number>(): R;
    initWithOperatorType_modifier_variant_position<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_initWithOperatorType: P0, _modifier: P1, _variant: P2, _position: P3): R;
  }
  namespace NSSubstringPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSStringPredicateOperator {
      alloc<R = NSSubstringPredicateOperator>(): R;
      new: <R = NSSubstringPredicateOperator>() => R;
    }
  }
}

declare const NSSubstringPredicateOperator: cocoa.NSSubstringPredicateOperator.CLASS;
