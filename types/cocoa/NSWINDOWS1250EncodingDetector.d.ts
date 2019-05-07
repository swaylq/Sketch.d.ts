/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1250EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSWINDOWS1250EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1250EncodingDetector>(): R;
      new: <R = NSWINDOWS1250EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1250EncodingDetector: cocoa.NSWINDOWS1250EncodingDetector.CLASS;
