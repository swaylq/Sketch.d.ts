/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1251EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSWINDOWS1251EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1251EncodingDetector>(): R;
      new: <R = NSWINDOWS1251EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1251EncodingDetector: cocoa.NSWINDOWS1251EncodingDetector.CLASS;
