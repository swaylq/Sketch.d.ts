/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF32BEEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSUTF32BEEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSUTF32BEEncodingDetector>(): R;
      new: <R = NSUTF32BEEncodingDetector>() => R;
    }
  }
}

declare const NSUTF32BEEncodingDetector: cocoa.NSUTF32BEEncodingDetector.CLASS;
