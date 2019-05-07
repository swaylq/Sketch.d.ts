/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCCrypto<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace BCCrypto {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCCrypto>(): R;
      new: <R = BCCrypto>() => R;
    }
  }
}

declare const BCCrypto: cocoa.BCCrypto.CLASS;
