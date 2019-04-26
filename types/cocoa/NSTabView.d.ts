/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace NSTabView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTabView>(): R;
      new: <R = NSTabView>() => R;
    }
  }
}

declare const NSTabView: cocoa.NSTabView.CLASS;
