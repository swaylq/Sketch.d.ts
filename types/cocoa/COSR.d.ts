/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface COSR<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace COSR {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = COSR>(): R;
      new: <R = COSR>() => R;
    }
  }
}

declare const COSR: cocoa.COSR.CLASS;
