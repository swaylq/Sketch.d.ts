/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSModelObjectCacheGeneration<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSModelObjectCacheGeneration {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSModelObjectCacheGeneration>(): R;
      new: <R = MSModelObjectCacheGeneration>() => R;
    }
  }
}

declare const MSModelObjectCacheGeneration: cocoa.MSModelObjectCacheGeneration.CLASS;
