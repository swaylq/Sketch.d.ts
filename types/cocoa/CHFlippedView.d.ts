/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHFlippedView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
  }
  namespace CHFlippedView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = CHFlippedView>(): R;
      new: <R = CHFlippedView>() => R;
    }
  }
}

declare const CHFlippedView: cocoa.CHFlippedView.CLASS;
