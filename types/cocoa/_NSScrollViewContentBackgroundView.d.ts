/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollViewContentBackgroundView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsUpdateLayer<R = boolean>(): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace _NSScrollViewContentBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSScrollViewContentBackgroundView>(): R;
      new: <R = _NSScrollViewContentBackgroundView>() => R;
    }
  }
}
