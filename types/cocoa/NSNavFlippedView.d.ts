/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavFlippedView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    awakeFromNib<R = void>(): R;
  }
  namespace NSNavFlippedView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSNavFlippedView>(): R;
      new: <R = NSNavFlippedView>() => R;
    }
  }
}

declare const NSNavFlippedView: cocoa.NSNavFlippedView.CLASS;
