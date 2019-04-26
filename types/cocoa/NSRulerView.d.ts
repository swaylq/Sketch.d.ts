/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace NSRulerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSRulerView>(): R;
      new: <R = NSRulerView>() => R;
    }
  }
}

declare const NSRulerView: cocoa.NSRulerView.CLASS;
