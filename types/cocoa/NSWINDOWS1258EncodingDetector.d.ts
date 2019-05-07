/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1258EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSWINDOWS1258EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1258EncodingDetector>(): R;
      new: <R = NSWINDOWS1258EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1258EncodingDetector: cocoa.NSWINDOWS1258EncodingDetector.CLASS;
