/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCCodeSigningVerifier<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace BCCodeSigningVerifier {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCCodeSigningVerifier>(): R;
      new: <R = BCCodeSigningVerifier>() => R;
    }
  }
}

declare const BCCodeSigningVerifier: cocoa.BCCodeSigningVerifier.CLASS;
