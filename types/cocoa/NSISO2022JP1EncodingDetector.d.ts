/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISO2022JP1EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSISO2022EncodingDetector {}
  namespace NSISO2022JP1EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSISO2022EncodingDetector {
      alloc<R = NSISO2022JP1EncodingDetector>(): R;
      new: <R = NSISO2022JP1EncodingDetector>() => R;
    }
  }
}

declare const NSISO2022JP1EncodingDetector: cocoa.NSISO2022JP1EncodingDetector.CLASS;
