/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlignmentLayoutRule<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithAlignedAnchors<R = unknown, P0 = unknown>(_initWithAlignedAnchors: P0): R;
    alignedAnchors<R = NSArray>(): R;
    ruleDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    identifier<R = NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSAlignmentLayoutRule {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
      alloc<R = NSAlignmentLayoutRule>(): R;
      new: <R = NSAlignmentLayoutRule>() => R;
      alignmentWithAnchors<R = unknown, P0 = unknown>(_alignmentWithAnchors: P0): R;
    }
  }
}

declare const NSAlignmentLayoutRule: cocoa.NSAlignmentLayoutRule.CLASS;
