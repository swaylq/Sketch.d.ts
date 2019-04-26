/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAccessibilityTableHeaderCellProxy<T0 = void, T1 = void, T2 = void> extends NSAccessibilityReparentingCellProxy {}
  namespace NSAccessibilityTableHeaderCellProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityReparentingCellProxy {
      alloc<R = NSAccessibilityTableHeaderCellProxy>(): R;
      new: <R = NSAccessibilityTableHeaderCellProxy>() => R;
    }
  }
}

declare const NSAccessibilityTableHeaderCellProxy: cocoa.NSAccessibilityTableHeaderCellProxy.CLASS;
