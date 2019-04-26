/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUTF7EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSUTF7EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSUTF7EncodingDetector>(): R;
      new: <R = NSUTF7EncodingDetector>() => R;
    }
  }
}

declare const NSUTF7EncodingDetector: cocoa.NSUTF7EncodingDetector.CLASS;
