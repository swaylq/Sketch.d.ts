/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollViewFloatingDebugView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    _setDebugColor<R = void, P0 = unknown>(__setDebugColor: P0): R;
  }
  namespace _NSScrollViewFloatingDebugView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSScrollViewFloatingDebugView>(): R;
      new: <R = _NSScrollViewFloatingDebugView>() => R;
    }
  }
}
