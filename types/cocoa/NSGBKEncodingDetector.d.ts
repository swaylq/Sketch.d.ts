/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGBKEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSGBKEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSGBKEncodingDetector>(): R;
      new: <R = NSGBKEncodingDetector>() => R;
    }
  }
}

declare const NSGBKEncodingDetector: cocoa.NSGBKEncodingDetector.CLASS;
