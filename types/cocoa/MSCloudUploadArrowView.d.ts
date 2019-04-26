/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCloudUploadArrowView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    startAnimation<R = void>(): R;
    arrowLayer<R = CALayer>(): R;
    setArrowLayer<R = void, P0 = CALayer>(_v: P0): R;
  }
  namespace MSCloudUploadArrowView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSCloudUploadArrowView>(): R;
      new: <R = MSCloudUploadArrowView>() => R;
    }
  }
}

declare const MSCloudUploadArrowView: cocoa.MSCloudUploadArrowView.CLASS;
