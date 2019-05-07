/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN8EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISOLATIN8EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN8EncodingDetector>(): R;
      new: <R = NSISOLATIN8EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN8EncodingDetector: cocoa.NSISOLATIN8EncodingDetector.CLASS;
