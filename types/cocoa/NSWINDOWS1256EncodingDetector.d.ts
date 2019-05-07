/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWINDOWS1256EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSWINDOWS1256EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSWINDOWS1256EncodingDetector>(): R;
      new: <R = NSWINDOWS1256EncodingDetector>() => R;
    }
  }
}

declare const NSWINDOWS1256EncodingDetector: cocoa.NSWINDOWS1256EncodingDetector.CLASS;
