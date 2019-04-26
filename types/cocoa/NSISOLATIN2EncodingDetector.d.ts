/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN2EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISOLATIN2EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN2EncodingDetector>(): R;
      new: <R = NSISOLATIN2EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN2EncodingDetector: cocoa.NSISOLATIN2EncodingDetector.CLASS;
