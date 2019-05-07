/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEUCKREncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSEUCKREncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSEUCKREncodingDetector>(): R;
      new: <R = NSEUCKREncodingDetector>() => R;
    }
  }
}

declare const NSEUCKREncodingDetector: cocoa.NSEUCKREncodingDetector.CLASS;
