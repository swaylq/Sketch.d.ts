/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEUCTWEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSEUCTWEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSEUCTWEncodingDetector>(): R;
      new: <R = NSEUCTWEncodingDetector>() => R;
    }
  }
}

declare const NSEUCTWEncodingDetector: cocoa.NSEUCTWEncodingDetector.CLASS;
