/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConstantDimensionRule<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithConstant_dimensions<R = unknown, P0 = number, P1 = unknown>(_initWithConstant: P0, _dimensions: P1): R;
    constant<R = number>(): R;
    dimensions<R = NSArray>(): R;
    ruleDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    identifier<R = NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSConstantDimensionRule {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
      alloc<R = _NSConstantDimensionRule>(): R;
      new: <R = _NSConstantDimensionRule>() => R;
      ruleWithConstant_dimensions<R = unknown, P0 = number, P1 = unknown>(_ruleWithConstant: P0, _dimensions: P1): R;
    }
  }
}
