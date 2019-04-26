/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN5EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISOLATIN5EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN5EncodingDetector>(): R;
      new: <R = NSISOLATIN5EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN5EncodingDetector: cocoa.NSISOLATIN5EncodingDetector.CLASS;
