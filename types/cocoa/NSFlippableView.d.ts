/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFlippableView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace NSFlippableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSFlippableView>(): R;
      new: <R = NSFlippableView>() => R;
      newFlipped<R = unknown, P0 = boolean>(_newFlipped: P0): R;
    }
  }
}

declare const NSFlippableView: cocoa.NSFlippableView.CLASS;
