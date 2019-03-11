/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO885911EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISO885911EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSISO885911EncodingDetector>(): R;
      new: <R = NSISO885911EncodingDetector>() => R;
    }
  }
}

declare const NSISO885911EncodingDetector: cocoa.classes.NSISO885911EncodingDetector;
