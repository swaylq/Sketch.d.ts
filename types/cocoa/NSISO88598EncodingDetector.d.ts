/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO88598EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISO88598EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISO88598EncodingDetector>(): R;
      new: <R = NSISO88598EncodingDetector>() => R;
    }
  }
}

declare const NSISO88598EncodingDetector: cocoa.NSISO88598EncodingDetector.CLASS;
