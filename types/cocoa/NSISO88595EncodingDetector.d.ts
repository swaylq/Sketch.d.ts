/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO88595EncodingDetector<T = any> extends cocoa.NSSingleByteEncodingDetector {}
  namespace classes {
    export interface NSISO88595EncodingDetector<T = any> extends cocoa.classes.NSSingleByteEncodingDetector {
      alloc<R = NSISO88595EncodingDetector>(): R;
      new: <R = NSISO88595EncodingDetector>() => R;
    }
  }
}

declare const NSISO88595EncodingDetector: cocoa.classes.NSISO88595EncodingDetector;
