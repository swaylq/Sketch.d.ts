/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF8EncodingDetector<T = any> extends NSEncodingDetector {}
  namespace classes {
    export interface NSUTF8EncodingDetector<T = any> extends NSEncodingDetector {
      alloc<R = NSUTF8EncodingDetector>(): R;
      new: <R = NSUTF8EncodingDetector>() => R;
    }
  }
}

declare const NSUTF8EncodingDetector: cocoa.classes.NSUTF8EncodingDetector;