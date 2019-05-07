/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlternatingViewBackgroundView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace NSAlternatingViewBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSAlternatingViewBackgroundView>(): R;
      new: <R = NSAlternatingViewBackgroundView>() => R;
    }
  }
}

declare const NSAlternatingViewBackgroundView: cocoa.NSAlternatingViewBackgroundView.CLASS;
