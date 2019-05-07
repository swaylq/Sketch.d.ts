/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF16EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSUTF16BaseEncodingDetector {}
  namespace NSUTF16EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUTF16BaseEncodingDetector {
      alloc<R = NSUTF16EncodingDetector>(): R;
      new: <R = NSUTF16EncodingDetector>() => R;
    }
  }
}

declare const NSUTF16EncodingDetector: cocoa.NSUTF16EncodingDetector.CLASS;
