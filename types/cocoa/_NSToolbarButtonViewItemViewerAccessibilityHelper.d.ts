/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSToolbarButtonViewItemViewerAccessibilityHelper<T0 = void, T1 = void, T2 = void> extends _NSToolbarProxyItemViewerAccessibilityHelper {
    _accessibilityToolbarButtonElement<R = unknown>(): R;
  }
  namespace _NSToolbarButtonViewItemViewerAccessibilityHelper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSToolbarProxyItemViewerAccessibilityHelper {
      alloc<R = _NSToolbarButtonViewItemViewerAccessibilityHelper>(): R;
      new: <R = _NSToolbarButtonViewItemViewerAccessibilityHelper>() => R;
    }
  }
}
