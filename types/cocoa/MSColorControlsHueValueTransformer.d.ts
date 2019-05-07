/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorControlsHueValueTransformer<T0 = void, T1 = void, T2 = void> extends MSArbitraryRangePercentValueTransformer {}
  namespace MSColorControlsHueValueTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSArbitraryRangePercentValueTransformer {
      alloc<R = MSColorControlsHueValueTransformer>(): R;
      new: <R = MSColorControlsHueValueTransformer>() => R;
    }
  }
}

declare const MSColorControlsHueValueTransformer: cocoa.MSColorControlsHueValueTransformer.CLASS;
