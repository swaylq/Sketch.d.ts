/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenUnbufferedWindowContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    isOpaque<R = boolean>(): R;
  }
  namespace _NSFullScreenUnbufferedWindowContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSFullScreenUnbufferedWindowContentView>(): R;
      new: <R = _NSFullScreenUnbufferedWindowContentView>() => R;
    }
  }
}
