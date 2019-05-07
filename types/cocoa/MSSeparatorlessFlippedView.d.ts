/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSeparatorlessFlippedView<T0 = void, T1 = void, T2 = void> extends MSSeparatorlessView {
    isFlipped<R = boolean>(): R;
  }
  namespace MSSeparatorlessFlippedView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSeparatorlessView {
      alloc<R = MSSeparatorlessFlippedView>(): R;
      new: <R = MSSeparatorlessFlippedView>() => R;
    }
  }
}

declare const MSSeparatorlessFlippedView: cocoa.MSSeparatorlessFlippedView.CLASS;
