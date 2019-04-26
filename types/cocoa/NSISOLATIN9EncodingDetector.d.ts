/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN9EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISOLATIN9EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN9EncodingDetector>(): R;
      new: <R = NSISOLATIN9EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN9EncodingDetector: cocoa.NSISOLATIN9EncodingDetector.CLASS;
