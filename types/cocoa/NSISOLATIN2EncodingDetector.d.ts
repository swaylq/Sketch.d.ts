/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN2EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN2EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN2EncodingDetector>(): R;
      new: <R = NSISOLATIN2EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN2EncodingDetector: cocoa.classes.NSISOLATIN2EncodingDetector;
