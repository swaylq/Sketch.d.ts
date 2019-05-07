/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHZGB2312EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSISO2022EncodingDetector {}
  namespace NSHZGB2312EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSISO2022EncodingDetector {
      alloc<R = NSHZGB2312EncodingDetector>(): R;
      new: <R = NSHZGB2312EncodingDetector>() => R;
    }
  }
}

declare const NSHZGB2312EncodingDetector: cocoa.NSHZGB2312EncodingDetector.CLASS;
