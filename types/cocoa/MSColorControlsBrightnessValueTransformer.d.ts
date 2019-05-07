/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorControlsBrightnessValueTransformer<T0 = void, T1 = void, T2 = void> extends MSArbitraryRangePercentValueTransformer {}
  namespace MSColorControlsBrightnessValueTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSArbitraryRangePercentValueTransformer {
      alloc<R = MSColorControlsBrightnessValueTransformer>(): R;
      new: <R = MSColorControlsBrightnessValueTransformer>() => R;
    }
  }
}

declare const MSColorControlsBrightnessValueTransformer: cocoa.MSColorControlsBrightnessValueTransformer.CLASS;
