/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserScrollView<T0 = void, T1 = void, T2 = void> extends NSScrollView {
    setAutomaticallyAdjustsContentInsets<R = void, P0 = boolean>(_setAutomaticallyAdjustsContentInsets: P0): R;
    _enclosingBrowserView<R = unknown>(): R;
  }
  namespace _NSBrowserScrollView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSScrollView {
      alloc<R = _NSBrowserScrollView>(): R;
      new: <R = _NSBrowserScrollView>() => R;
    }
  }
}
