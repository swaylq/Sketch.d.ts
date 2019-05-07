/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutAnchorRule<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
    makeLayoutConstraint<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithFirstAnchor_secondAnchor_relation_multiplier_constant_priority_identifier<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number, P4 = number, P5 = number, P6 = unknown>(_initWithFirstAnchor: P0, _secondAnchor: P1, _relation: P2, _multiplier: P3, _constant: P4, _priority: P5, _identifier: P6): R;
    multiplier<R = number>(): R;
    priority<R = number>(): R;
    identifier<R = NSString>(): R;
    constant<R = number>(): R;
    relation<R = number>(): R;
    secondAnchor<R = NSLayoutAnchor>(): R;
    firstAnchor<R = NSLayoutAnchor>(): R;
    ruleDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSLayoutAnchorRule {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
      alloc<R = NSLayoutAnchorRule>(): R;
      new: <R = NSLayoutAnchorRule>() => R;
    }
  }
}

declare const NSLayoutAnchorRule: cocoa.NSLayoutAnchorRule.CLASS;
