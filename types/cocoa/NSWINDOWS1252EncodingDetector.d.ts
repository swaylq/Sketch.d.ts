/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1252EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSWINDOWS1252EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1252EncodingDetector>(): R;
      new: <R = NSWINDOWS1252EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1252EncodingDetector: cocoa.NSWINDOWS1252EncodingDetector.CLASS;
