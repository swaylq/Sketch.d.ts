/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInterceptingView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSInterceptingView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSInterceptingView>(): R;
      new: <R = MSInterceptingView>() => R;
    }
  }
}

declare const MSInterceptingView: cocoa.MSInterceptingView.CLASS;
