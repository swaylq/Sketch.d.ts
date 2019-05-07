/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlippedView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
  }
  namespace MSFlippedView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSFlippedView>(): R;
      new: <R = MSFlippedView>() => R;
    }
  }
}

declare const MSFlippedView: cocoa.MSFlippedView.CLASS;
