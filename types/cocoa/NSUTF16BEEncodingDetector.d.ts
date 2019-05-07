/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF16BEEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSUTF16BaseEncodingDetector {}
  namespace NSUTF16BEEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUTF16BaseEncodingDetector {
      alloc<R = NSUTF16BEEncodingDetector>(): R;
      new: <R = NSUTF16BEEncodingDetector>() => R;
    }
  }
}

declare const NSUTF16BEEncodingDetector: cocoa.NSUTF16BEEncodingDetector.CLASS;
