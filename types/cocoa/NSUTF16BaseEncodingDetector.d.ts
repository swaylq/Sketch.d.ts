/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF16BaseEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSUTF16BaseEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSUTF16BaseEncodingDetector>(): R;
      new: <R = NSUTF16BaseEncodingDetector>() => R;
    }
  }
}

declare const NSUTF16BaseEncodingDetector: cocoa.NSUTF16BaseEncodingDetector.CLASS;
