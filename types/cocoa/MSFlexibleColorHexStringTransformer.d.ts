/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlexibleColorHexStringTransformer<T0 = void, T1 = void, T2 = void> extends MSColorHexStringTransformer {}
  namespace MSFlexibleColorHexStringTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorHexStringTransformer {
      alloc<R = MSFlexibleColorHexStringTransformer>(): R;
      new: <R = MSFlexibleColorHexStringTransformer>() => R;
    }
  }
}

declare const MSFlexibleColorHexStringTransformer: cocoa.MSFlexibleColorHexStringTransformer.CLASS;
