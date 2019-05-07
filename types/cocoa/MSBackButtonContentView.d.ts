/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBackButtonContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    isOpaque<R = boolean>(): R;
  }
  namespace MSBackButtonContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSBackButtonContentView>(): R;
      new: <R = MSBackButtonContentView>() => R;
    }
  }
}

declare const MSBackButtonContentView: cocoa.MSBackButtonContentView.CLASS;
