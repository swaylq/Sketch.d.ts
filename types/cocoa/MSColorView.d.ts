/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace MSColorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSColorView>(): R;
      new: <R = MSColorView>() => R;
    }
  }
}

declare const MSColorView: cocoa.MSColorView.CLASS;
