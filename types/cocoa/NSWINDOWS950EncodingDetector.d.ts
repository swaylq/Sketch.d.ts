/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS950EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSWINDOWS950EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSWINDOWS950EncodingDetector>(): R;
      new: <R = NSWINDOWS950EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS950EncodingDetector: cocoa.NSWINDOWS950EncodingDetector.CLASS;
