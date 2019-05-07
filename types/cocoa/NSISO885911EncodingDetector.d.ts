/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO885911EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISO885911EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISO885911EncodingDetector>(): R;
      new: <R = NSISO885911EncodingDetector>() => R;
    }
  }
}

declare const NSISO885911EncodingDetector: cocoa.NSISO885911EncodingDetector.CLASS;
