/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueShareableObservanceKey<T0 = void, T1 = void, T2 = void> extends NSKeyValueObservance {}
  namespace NSKeyValueShareableObservanceKey {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueObservance {
      alloc<R = NSKeyValueShareableObservanceKey>(): R;
      new: <R = NSKeyValueShareableObservanceKey>() => R;
    }
  }
}

declare const NSKeyValueShareableObservanceKey: cocoa.NSKeyValueShareableObservanceKey.CLASS;
