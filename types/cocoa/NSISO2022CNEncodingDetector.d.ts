/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO2022CNEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSISO2022EncodingDetector {}
  namespace NSISO2022CNEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSISO2022EncodingDetector {
      alloc<R = NSISO2022CNEncodingDetector>(): R;
      new: <R = NSISO2022CNEncodingDetector>() => R;
    }
  }
}

declare const NSISO2022CNEncodingDetector: cocoa.NSISO2022CNEncodingDetector.CLASS;
