/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1254EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSWINDOWS1254EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1254EncodingDetector>(): R;
      new: <R = NSWINDOWS1254EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1254EncodingDetector: cocoa.NSWINDOWS1254EncodingDetector.CLASS;
