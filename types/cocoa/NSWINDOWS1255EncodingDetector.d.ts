/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1255EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSWINDOWS1255EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1255EncodingDetector>(): R;
      new: <R = NSWINDOWS1255EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1255EncodingDetector: cocoa.NSWINDOWS1255EncodingDetector.CLASS;
