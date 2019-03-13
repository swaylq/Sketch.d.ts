/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFlippableView<T = any> extends NSView {}
  namespace classes {
    export interface NSFlippableView<T = any> extends NSView {
      alloc<R = NSFlippableView>(): R;
      new: <R = NSFlippableView>() => R;
      newFlipped<R = unknown, P0 = boolean>(_newFlipped: P0): R;
    }
  }
}

declare const NSFlippableView: cocoa.classes.NSFlippableView;