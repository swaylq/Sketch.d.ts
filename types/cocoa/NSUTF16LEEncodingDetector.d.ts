/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF16LEEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSUTF16BaseEncodingDetector {}
  namespace NSUTF16LEEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUTF16BaseEncodingDetector {
      alloc<R = NSUTF16LEEncodingDetector>(): R;
      new: <R = NSUTF16LEEncodingDetector>() => R;
    }
  }
}

declare const NSUTF16LEEncodingDetector: cocoa.NSUTF16LEEncodingDetector.CLASS;
