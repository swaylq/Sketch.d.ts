/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWindowTitleBinder<T0 = void, T1 = void, T2 = void> extends NSTitleBinder {
    window_didSetTitle<R = void, P0 = unknown, P1 = unknown>(_window: P0, _didSetTitle: P1): R;
  }
  namespace NSWindowTitleBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTitleBinder {
      alloc<R = NSWindowTitleBinder>(): R;
      new: <R = NSWindowTitleBinder>() => R;
    }
  }
}

declare const NSWindowTitleBinder: cocoa.NSWindowTitleBinder.CLASS;
