/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBig5HKSCSEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSBig5HKSCSEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSBig5HKSCSEncodingDetector>(): R;
      new: <R = NSBig5HKSCSEncodingDetector>() => R;
    }
  }
}

declare const NSBig5HKSCSEncodingDetector: cocoa.NSBig5HKSCSEncodingDetector.CLASS;
