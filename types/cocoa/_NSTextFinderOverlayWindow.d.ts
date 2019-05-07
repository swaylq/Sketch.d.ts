/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTextFinderOverlayWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _setWindowTag<R = void>(): R;
    accessibilityChildrenAttribute<R = unknown>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
  }
  namespace _NSTextFinderOverlayWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = _NSTextFinderOverlayWindow>(): R;
      new: <R = _NSTextFinderOverlayWindow>() => R;
    }
  }
}
