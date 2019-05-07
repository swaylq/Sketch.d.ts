/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COSPreprocessor<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace COSPreprocessor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = COSPreprocessor>(): R;
      new: <R = COSPreprocessor>() => R;
      preprocessCode<R = NSString, P0 = NSString>(_preprocessCode: P0): R;
      preprocessCode_withBaseURL<R = NSString, P0 = NSString, P1 = NSURL>(_preprocessCode: P0, _withBaseURL: P1): R;
    }
  }
}

declare const COSPreprocessor: cocoa.COSPreprocessor.CLASS;
