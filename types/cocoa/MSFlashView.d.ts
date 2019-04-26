/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlashView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSFlashView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSFlashView>(): R;
      new: <R = MSFlashView>() => R;
    }
  }
}

declare const MSFlashView: cocoa.MSFlashView.CLASS;
