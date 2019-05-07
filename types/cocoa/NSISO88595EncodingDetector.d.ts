/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO88595EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISO88595EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISO88595EncodingDetector>(): R;
      new: <R = NSISO88595EncodingDetector>() => R;
    }
  }
}

declare const NSISO88595EncodingDetector: cocoa.NSISO88595EncodingDetector.CLASS;
