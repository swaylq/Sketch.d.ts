/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO88597EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISO88597EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISO88597EncodingDetector>(): R;
      new: <R = NSISO88597EncodingDetector>() => R;
    }
  }
}

declare const NSISO88597EncodingDetector: cocoa.NSISO88597EncodingDetector.CLASS;
