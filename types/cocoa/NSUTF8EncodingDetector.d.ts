/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF8EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSUTF8EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSUTF8EncodingDetector>(): R;
      new: <R = NSUTF8EncodingDetector>() => R;
    }
  }
}

declare const NSUTF8EncodingDetector: cocoa.NSUTF8EncodingDetector.CLASS;
