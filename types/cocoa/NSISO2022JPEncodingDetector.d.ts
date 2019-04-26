/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO2022JPEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSISO2022EncodingDetector {}
  namespace NSISO2022JPEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSISO2022EncodingDetector {
      alloc<R = NSISO2022JPEncodingDetector>(): R;
      new: <R = NSISO2022JPEncodingDetector>() => R;
    }
  }
}

declare const NSISO2022JPEncodingDetector: cocoa.NSISO2022JPEncodingDetector.CLASS;
