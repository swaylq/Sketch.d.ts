/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorDisplayView<T0 = void, T1 = void, T2 = void> extends NSView {
    wantsLayer<R = boolean>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    color<R = NSColor>(): R;
    setColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSColorDisplayView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSColorDisplayView>(): R;
      new: <R = NSColorDisplayView>() => R;
    }
  }
}

declare const NSColorDisplayView: cocoa.NSColorDisplayView.CLASS;
