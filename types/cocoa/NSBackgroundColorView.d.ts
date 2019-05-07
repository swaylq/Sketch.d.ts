/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBackgroundColorView<T0 = void, T1 = void, T2 = void> extends NSView {
    _preferredAppearance<R = unknown>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSBackgroundColorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSBackgroundColorView>(): R;
      new: <R = NSBackgroundColorView>() => R;
    }
  }
}

declare const NSBackgroundColorView: cocoa.NSBackgroundColorView.CLASS;
