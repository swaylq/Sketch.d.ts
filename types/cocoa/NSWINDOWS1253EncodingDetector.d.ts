/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1253EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS1253EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1253EncodingDetector>(): R;
      new: <R = NSWINDOWS1253EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1253EncodingDetector: cocoa.classes.NSWINDOWS1253EncodingDetector;
