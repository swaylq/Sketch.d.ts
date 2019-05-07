/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS874EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSWINDOWS874EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS874EncodingDetector>(): R;
      new: <R = NSWINDOWS874EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS874EncodingDetector: cocoa.NSWINDOWS874EncodingDetector.CLASS;
