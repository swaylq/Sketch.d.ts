/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO2022KREncodingDetector<T0 = void, T1 = void, T2 = void> extends NSISO2022EncodingDetector {}
  namespace NSISO2022KREncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSISO2022EncodingDetector {
      alloc<R = NSISO2022KREncodingDetector>(): R;
      new: <R = NSISO2022KREncodingDetector>() => R;
    }
  }
}

declare const NSISO2022KREncodingDetector: cocoa.NSISO2022KREncodingDetector.CLASS;
