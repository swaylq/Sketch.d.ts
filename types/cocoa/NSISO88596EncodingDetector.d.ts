/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO88596EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISO88596EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISO88596EncodingDetector>(): R;
      new: <R = NSISO88596EncodingDetector>() => R;
    }
  }
}

declare const NSISO88596EncodingDetector: cocoa.NSISO88596EncodingDetector.CLASS;
