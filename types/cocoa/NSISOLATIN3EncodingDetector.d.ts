/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN3EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISOLATIN3EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN3EncodingDetector>(): R;
      new: <R = NSISOLATIN3EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN3EncodingDetector: cocoa.NSISOLATIN3EncodingDetector.CLASS;
