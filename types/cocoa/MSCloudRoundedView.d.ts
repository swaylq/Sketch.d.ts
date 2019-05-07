/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudRoundedView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSCloudRoundedView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSCloudRoundedView>(): R;
      new: <R = MSCloudRoundedView>() => R;
    }
  }
}

declare const MSCloudRoundedView: cocoa.MSCloudRoundedView.CLASS;
