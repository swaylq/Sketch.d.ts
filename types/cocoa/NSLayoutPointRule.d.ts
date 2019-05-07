/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutPointRule<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithFirstLayoutPoint_secondLayoutPoint<R = unknown, P0 = unknown, P1 = unknown>(_initWithFirstLayoutPoint: P0, _secondLayoutPoint: P1): R;
    secondLayoutPoint<R = NSLayoutPoint>(): R;
    firstLayoutPoint<R = NSLayoutPoint>(): R;
    ruleDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    identifier<R = NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSLayoutPointRule {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
      alloc<R = NSLayoutPointRule>(): R;
      new: <R = NSLayoutPointRule>() => R;
    }
  }
}

declare const NSLayoutPointRule: cocoa.NSLayoutPointRule.CLASS;
