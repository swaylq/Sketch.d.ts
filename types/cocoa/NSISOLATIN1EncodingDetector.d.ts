/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN1EncodingDetector<T = any> extends NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN1EncodingDetector<T = any> extends NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN1EncodingDetector>(): R;
      new: <R = NSISOLATIN1EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN1EncodingDetector: cocoa.classes.NSISOLATIN1EncodingDetector;