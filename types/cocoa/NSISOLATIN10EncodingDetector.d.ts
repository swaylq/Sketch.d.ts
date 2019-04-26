/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN10EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISOLATIN10EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN10EncodingDetector>(): R;
      new: <R = NSISOLATIN10EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN10EncodingDetector: cocoa.NSISOLATIN10EncodingDetector.CLASS;
