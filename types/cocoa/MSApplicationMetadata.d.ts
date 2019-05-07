/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplicationMetadata<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MSApplicationMetadata {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSApplicationMetadata>(): R;
      new: <R = MSApplicationMetadata>() => R;
      applicationKeys<R = unknown>(): R;
      metadata<R = unknown>(): R;
    }
  }
}

declare const MSApplicationMetadata: cocoa.MSApplicationMetadata.CLASS;
