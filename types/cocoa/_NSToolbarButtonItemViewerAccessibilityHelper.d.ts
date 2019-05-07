/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarButtonItemViewerAccessibilityHelper<T0 = void, T1 = void, T2 = void> extends _NSToolbarProxyItemViewerAccessibilityHelper {
    _accessibilityToolbarButtonElement<R = unknown>(): R;
  }
  namespace _NSToolbarButtonItemViewerAccessibilityHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSToolbarProxyItemViewerAccessibilityHelper {
      alloc<R = _NSToolbarButtonItemViewerAccessibilityHelper>(): R;
      new: <R = _NSToolbarButtonItemViewerAccessibilityHelper>() => R;
    }
  }
}
