/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1257EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS1257EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1257EncodingDetector>(): R;
      new: <R = NSWINDOWS1257EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1257EncodingDetector: cocoa.classes.NSWINDOWS1257EncodingDetector;