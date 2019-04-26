/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHTransparentView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    isOpaque<R = boolean>(): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace CHTransparentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = CHTransparentView>(): R;
      new: <R = CHTransparentView>() => R;
    }
  }
}

declare const CHTransparentView: cocoa.CHTransparentView.CLASS;
