/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1254EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSWINDOWS1254EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1254EncodingDetector>(): R;
      new: <R = NSWINDOWS1254EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1254EncodingDetector: cocoa.classes.NSWINDOWS1254EncodingDetector;
