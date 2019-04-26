/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBigEEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSBigEEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSBigEEncodingDetector>(): R;
      new: <R = NSBigEEncodingDetector>() => R;
    }
  }
}

declare const NSBigEEncodingDetector: cocoa.NSBigEEncodingDetector.CLASS;
