/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1252EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS1252EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1252EncodingDetector>(): R;
      new: <R = NSWINDOWS1252EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1252EncodingDetector: cocoa.classes.NSWINDOWS1252EncodingDetector;