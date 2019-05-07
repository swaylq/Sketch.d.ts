/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserHeaderClipView<T0 = void, T1 = void, T2 = void> extends NSClipView {
    headerView<R = NSView>(): R;
    setHeaderView<R = void, P0 = NSView>(_v: P0): R;
  }
  namespace _NSBrowserHeaderClipView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSClipView {
      alloc<R = _NSBrowserHeaderClipView>(): R;
      new: <R = _NSBrowserHeaderClipView>() => R;
    }
  }
}
