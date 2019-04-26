/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1253EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSWINDOWS1253EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1253EncodingDetector>(): R;
      new: <R = NSWINDOWS1253EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1253EncodingDetector: cocoa.NSWINDOWS1253EncodingDetector.CLASS;
