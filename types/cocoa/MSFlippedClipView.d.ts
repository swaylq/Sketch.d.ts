/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlippedClipView<T0 = void, T1 = void, T2 = void> extends NSClipView {}
  namespace MSFlippedClipView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSClipView {
      alloc<R = MSFlippedClipView>(): R;
      new: <R = MSFlippedClipView>() => R;
    }
  }
}

declare const MSFlippedClipView: cocoa.MSFlippedClipView.CLASS;
