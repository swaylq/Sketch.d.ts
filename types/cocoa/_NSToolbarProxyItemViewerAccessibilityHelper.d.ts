/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarProxyItemViewerAccessibilityHelper<T0 = void, T1 = void, T2 = void> extends _NSToolbarItemViewerAccessibilityHelper {
    showsAccessibilityDescriptionInIconOnlyMode<R = boolean>(): R;
    realElement<R = unknown>(): R;
  }
  namespace _NSToolbarProxyItemViewerAccessibilityHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSToolbarItemViewerAccessibilityHelper {
      alloc<R = _NSToolbarProxyItemViewerAccessibilityHelper>(): R;
      new: <R = _NSToolbarProxyItemViewerAccessibilityHelper>() => R;
    }
  }
}
