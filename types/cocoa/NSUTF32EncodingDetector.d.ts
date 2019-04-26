/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF32EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSUTF32EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSUTF32EncodingDetector>(): R;
      new: <R = NSUTF32EncodingDetector>() => R;
    }
  }
}

declare const NSUTF32EncodingDetector: cocoa.NSUTF32EncodingDetector.CLASS;
