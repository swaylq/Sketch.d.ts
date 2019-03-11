/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISOLATIN5EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISOLATIN5EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSISOLATIN5EncodingDetector>(): R;
      new: <R = NSISOLATIN5EncodingDetector>() => R;
    }
  }
}

declare const NSISOLATIN5EncodingDetector: cocoa.classes.NSISOLATIN5EncodingDetector;
