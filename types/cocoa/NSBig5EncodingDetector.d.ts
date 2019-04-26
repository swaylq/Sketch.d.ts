/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBig5EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSBig5EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSBig5EncodingDetector>(): R;
      new: <R = NSBig5EncodingDetector>() => R;
    }
  }
}

declare const NSBig5EncodingDetector: cocoa.NSBig5EncodingDetector.CLASS;
