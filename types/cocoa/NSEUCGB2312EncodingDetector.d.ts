/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEUCGB2312EncodingDetector<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {}
  namespace NSEUCGB2312EncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSEncodingDetector {
      alloc<R = NSEUCGB2312EncodingDetector>(): R;
      new: <R = NSEUCGB2312EncodingDetector>() => R;
    }
  }
}

declare const NSEUCGB2312EncodingDetector: cocoa.NSEUCGB2312EncodingDetector.CLASS;
