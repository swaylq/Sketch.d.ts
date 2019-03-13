/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1258EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS1258EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1258EncodingDetector>(): R;
      new: <R = NSWINDOWS1258EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1258EncodingDetector: cocoa.classes.NSWINDOWS1258EncodingDetector;