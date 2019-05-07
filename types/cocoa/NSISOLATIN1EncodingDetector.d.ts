/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN1EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {}
  namespace NSISOLATIN1EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN1EncodingDetector>(): R;
      new: <R = NSISOLATIN1EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN1EncodingDetector: cocoa.NSISOLATIN1EncodingDetector.CLASS;
