/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComparisonPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
    variant<R = number>(): R;
    initWithOperatorType_modifier_variant_options<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_initWithOperatorType: P0, _modifier: P1, _variant: P2, _options: P3): R;
    initWithOperatorType_modifier_variant<R = unknown, P0 = number, P1 = number, P2 = number>(_initWithOperatorType: P0, _modifier: P1, _variant: P2): R;
  }
  namespace NSComparisonPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicateOperator {
      alloc<R = NSComparisonPredicateOperator>(): R;
      new: <R = NSComparisonPredicateOperator>() => R;
    }
  }
}

declare const NSComparisonPredicateOperator: cocoa.NSComparisonPredicateOperator.CLASS;
