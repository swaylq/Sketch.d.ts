/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorControlsSaturationValueTransformer<T0 = void, T1 = void, T2 = void> extends MSArbitraryRangePercentValueTransformer {}
  namespace MSColorControlsSaturationValueTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSArbitraryRangePercentValueTransformer {
      alloc<R = MSColorControlsSaturationValueTransformer>(): R;
      new: <R = MSColorControlsSaturationValueTransformer>() => R;
    }
  }
}

declare const MSColorControlsSaturationValueTransformer: cocoa.MSColorControlsSaturationValueTransformer.CLASS;
