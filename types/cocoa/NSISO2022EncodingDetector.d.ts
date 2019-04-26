/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO2022EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSISO2022EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSISO2022EncodingDetector>(): R;
      new: <R = NSISO2022EncodingDetector>() => R;
    }
  }
}

declare const NSISO2022EncodingDetector: cocoa.NSISO2022EncodingDetector.CLASS;
