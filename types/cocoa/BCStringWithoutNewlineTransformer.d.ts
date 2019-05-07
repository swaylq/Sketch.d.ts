/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCStringWithoutNewlineTransformer<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {}
  namespace BCStringWithoutNewlineTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = BCStringWithoutNewlineTransformer>(): R;
      new: <R = BCStringWithoutNewlineTransformer>() => R;
    }
  }
}

declare const BCStringWithoutNewlineTransformer: cocoa.BCStringWithoutNewlineTransformer.CLASS;
