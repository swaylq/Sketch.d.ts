/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPoofView<T0 = void, T1 = void, T2 = void> extends NSView {
    displayPoofImageAtIndex<R = void, P0 = number>(_displayPoofImageAtIndex: P0): R;
  }
  namespace NSPoofView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSPoofView>(): R;
      new: <R = NSPoofView>() => R;
    }
  }
}

declare const NSPoofView: cocoa.NSPoofView.CLASS;
