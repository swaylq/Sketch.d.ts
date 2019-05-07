/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSearchButtonCellProxy<T0 = void, T1 = void, T2 = void> extends NSAccessibilityReparentingCellProxy {
    _accessibilityPressAction<R = void, P0 = unknown>(__accessibilityPressAction: P0): R;
    accessibilityIsChildrenAttributeSettable<R = boolean>(): R;
    accessibilityChildrenInNavigationOrderAttribute<R = unknown>(): R;
  }
  namespace NSSearchButtonCellProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAccessibilityReparentingCellProxy {
      alloc<R = NSSearchButtonCellProxy>(): R;
      new: <R = NSSearchButtonCellProxy>() => R;
    }
  }
}

declare const NSSearchButtonCellProxy: cocoa.NSSearchButtonCellProxy.CLASS;
