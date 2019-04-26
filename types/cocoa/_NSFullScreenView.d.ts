/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenView<T0 = void, T1 = void, T2 = void> extends NSView {
    isOpaque<R = boolean>(): R;
    initWithColor<R = unknown, P0 = unknown>(_initWithColor: P0): R;
  }
  namespace _NSFullScreenView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSFullScreenView>(): R;
      new: <R = _NSFullScreenView>() => R;
    }
  }
}
