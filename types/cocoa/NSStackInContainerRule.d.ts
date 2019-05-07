/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSStackInContainerRule<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
    dealloc<R = void>(): R;
    initWithOrientation_stackedRects_containingRect_spacing<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = number>(_initWithOrientation: P0, _stackedRects: P1, _containingRect: P2, _spacing: P3): R;
    containingRect<R = NSLayoutRect>(): R;
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
  namespace NSStackInContainerRule {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSLayoutRuleProtocol {
      alloc<R = NSStackInContainerRule>(): R;
      new: <R = NSStackInContainerRule>() => R;
      verticalStackWithRects_inContainer_spacing<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_verticalStackWithRects: P0, _inContainer: P1, _spacing: P2): R;
      horizontalStackWithRects_inContainer_spacing<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_horizontalStackWithRects: P0, _inContainer: P1, _spacing: P2): R;
      stackWithOrientation_stackedRects_inContainer_spacing<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = number>(_stackWithOrientation: P0, _stackedRects: P1, _inContainer: P2, _spacing: P3): R;
    }
  }
}

declare const NSStackInContainerRule: cocoa.NSStackInContainerRule.CLASS;
