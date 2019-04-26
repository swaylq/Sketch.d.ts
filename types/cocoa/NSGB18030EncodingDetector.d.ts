/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGB18030EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSGB18030EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSGB18030EncodingDetector>(): R;
      new: <R = NSGB18030EncodingDetector>() => R;
    }
  }
}

declare const NSGB18030EncodingDetector: cocoa.NSGB18030EncodingDetector.CLASS;
