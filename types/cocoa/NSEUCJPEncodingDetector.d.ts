/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEUCJPEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSEUCJPEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSEUCJPEncodingDetector>(): R;
      new: <R = NSEUCJPEncodingDetector>() => R;
    }
  }
}

declare const NSEUCJPEncodingDetector: cocoa.NSEUCJPEncodingDetector.CLASS;
