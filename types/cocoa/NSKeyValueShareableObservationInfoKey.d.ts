/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueShareableObservationInfoKey<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSKeyValueShareableObservationInfoKey {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSKeyValueShareableObservationInfoKey>(): R;
      new: <R = NSKeyValueShareableObservationInfoKey>() => R;
    }
  }
}

declare const NSKeyValueShareableObservationInfoKey: cocoa.NSKeyValueShareableObservationInfoKey.CLASS;
