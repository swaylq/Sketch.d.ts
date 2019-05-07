/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityReparentingProxy<T0 = void, T1 = void, T2 = void> extends NSAccessibilityProxy {
    description<R = unknown>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithElement_fauxParent<R = unknown, P0 = unknown, P1 = unknown>(_initWithElement: P0, _fauxParent: P1): R;
  }
  namespace NSAccessibilityReparentingProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityProxy {
      alloc<R = NSAccessibilityReparentingProxy>(): R;
      new: <R = NSAccessibilityReparentingProxy>() => R;
      proxyFor_fauxParent<R = unknown, P0 = unknown, P1 = unknown>(_proxyFor: P0, _fauxParent: P1): R;
    }
  }
}

declare const NSAccessibilityReparentingProxy: cocoa.NSAccessibilityReparentingProxy.CLASS;
