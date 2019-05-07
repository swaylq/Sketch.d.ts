/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArbitraryRangePercentValueTransformer<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {}
  namespace MSArbitraryRangePercentValueTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = MSArbitraryRangePercentValueTransformer>(): R;
      new: <R = MSArbitraryRangePercentValueTransformer>() => R;
      hundredPercentValue<R = number>(): R;
      zeroPercentValue<R = number>(): R;
    }
  }
}

declare const MSArbitraryRangePercentValueTransformer: cocoa.MSArbitraryRangePercentValueTransformer.CLASS;
