/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN6EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISOLATIN6EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN6EncodingDetector>(): R;
      new: <R = NSISOLATIN6EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN6EncodingDetector: cocoa.NSISOLATIN6EncodingDetector.CLASS;
