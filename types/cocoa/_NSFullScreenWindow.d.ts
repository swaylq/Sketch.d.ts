/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    canBecomeKeyWindow<R = boolean>(): R;
  }
  namespace _NSFullScreenWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = _NSFullScreenWindow>(): R;
      new: <R = _NSFullScreenWindow>() => R;
    }
  }
}
