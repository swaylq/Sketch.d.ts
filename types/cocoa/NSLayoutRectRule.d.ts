/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLayoutRectRule<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithFirstLayoutRect_secondLayoutRect_relation<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_initWithFirstLayoutRect: P0, _secondLayoutRect: P1, _relation: P2): R;
    initWithFirstLayoutRect_secondLayoutRect<R = unknown, P0 = unknown, P1 = unknown>(_initWithFirstLayoutRect: P0, _secondLayoutRect: P1): R;
    relation<R = number>(): R;
    setRelation<R = void, P0 = number>(_v: P0): R;
    secondLayoutRect<R = NSLayoutRect>(): R;
    firstLayoutRect<R = NSLayoutRect>(): R;
    ruleDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    identifier<R = NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSLayoutRectRule {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
      alloc<R = NSLayoutRectRule>(): R;
      new: <R = NSLayoutRectRule>() => R;
    }
  }
}

declare const NSLayoutRectRule: cocoa.NSLayoutRectRule.CLASS;
