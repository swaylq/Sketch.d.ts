/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDictionaryDetailBinder<T0 = void, T1 = void, T2 = void> extends NSArrayDetailBinder {}
  namespace NSDictionaryDetailBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSArrayDetailBinder {
      alloc<R = NSDictionaryDetailBinder>(): R;
      new: <R = NSDictionaryDetailBinder>() => R;
    }
  }
}

declare const NSDictionaryDetailBinder: cocoa.NSDictionaryDetailBinder.CLASS;
