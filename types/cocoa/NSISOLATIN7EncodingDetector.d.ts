/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN7EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISOLATIN7EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN7EncodingDetector>(): R;
      new: <R = NSISOLATIN7EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN7EncodingDetector: cocoa.NSISOLATIN7EncodingDetector.CLASS;
