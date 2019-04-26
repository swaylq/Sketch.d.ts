/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSingleByteEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSSingleByteEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSSingleByteEncodingDetector>(): R;
      new: <R = NSSingleByteEncodingDetector>() => R;
    }
  }
}

declare const NSSingleByteEncodingDetector: cocoa.NSSingleByteEncodingDetector.CLASS;
