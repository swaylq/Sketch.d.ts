/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueShareableObservanceKey<T = any> extends cocoa.NSKeyValueObservance {}
  namespace classes {
    export interface NSKeyValueShareableObservanceKey<T = any> extends cocoa.classes.NSKeyValueObservance {
      alloc<R = NSKeyValueShareableObservanceKey>(): R;
      new: <R = NSKeyValueShareableObservanceKey>() => R;
    }
  }
}

declare const NSKeyValueShareableObservanceKey: cocoa.classes.NSKeyValueShareableObservanceKey;
