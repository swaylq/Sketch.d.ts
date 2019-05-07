/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStackLayoutRule<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithOrientation_stackedRects_spacing<R = unknown, P0 = number, P1 = unknown, P2 = number>(_initWithOrientation: P0, _stackedRects: P1, _spacing: P2): R;
    spacing<R = number>(): R;
    orientation<R = number>(): R;
    stackedRects<R = NSArray>(): R;
    ruleDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    identifier<R = NSString>(): R;
    hash<R = number>(): R;
    debugDescription<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSStackLayoutRule {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
      alloc<R = NSStackLayoutRule>(): R;
      new: <R = NSStackLayoutRule>() => R;
      verticalStackWithRects_spacing<R = unknown, P0 = unknown, P1 = number>(_verticalStackWithRects: P0, _spacing: P1): R;
      horizontalStackWithRects_spacing<R = unknown, P0 = unknown, P1 = number>(_horizontalStackWithRects: P0, _spacing: P1): R;
      stackWithOrientation_stackedRects_spacing<R = unknown, P0 = number, P1 = unknown, P2 = number>(_stackWithOrientation: P0, _stackedRects: P1, _spacing: P2): R;
    }
  }
}

declare const NSStackLayoutRule: cocoa.NSStackLayoutRule.CLASS;
