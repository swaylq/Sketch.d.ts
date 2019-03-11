/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF32EncodingDetector<T = any> extends cocoa.NSEncodingDetector {}
  namespace classes {
    export interface NSUTF32EncodingDetector<T = any> extends cocoa.classes.NSEncodingDetector {
      alloc<R = NSUTF32EncodingDetector>(): R;
      new: <R = NSUTF32EncodingDetector>() => R;
    }
  }
}

declare const NSUTF32EncodingDetector: cocoa.classes.NSUTF32EncodingDetector;
