/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF32LEEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSUTF32LEEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSUTF32LEEncodingDetector>(): R;
      new: <R = NSUTF32LEEncodingDetector>() => R;
    }
  }
}

declare const NSUTF32LEEncodingDetector: cocoa.NSUTF32LEEncodingDetector.CLASS;
