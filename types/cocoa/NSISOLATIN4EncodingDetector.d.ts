/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN4EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISOLATIN4EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN4EncodingDetector>(): R;
      new: <R = NSISOLATIN4EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN4EncodingDetector: cocoa.NSISOLATIN4EncodingDetector.CLASS;
