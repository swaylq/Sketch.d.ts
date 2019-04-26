/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHangingGlyphView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    textView<R = NSTextView>(): R;
    setTextView<R = void, P0 = NSTextView>(_v: P0): R;
  }
  namespace MSHangingGlyphView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSHangingGlyphView>(): R;
      new: <R = MSHangingGlyphView>() => R;
    }
  }
}

declare const MSHangingGlyphView: cocoa.MSHangingGlyphView.CLASS;
