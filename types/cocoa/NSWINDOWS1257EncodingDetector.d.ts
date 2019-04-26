/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1257EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSWINDOWS1257EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1257EncodingDetector>(): R;
      new: <R = NSWINDOWS1257EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1257EncodingDetector: cocoa.NSWINDOWS1257EncodingDetector.CLASS;
