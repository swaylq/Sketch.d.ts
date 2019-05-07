/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOUndefined<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace MOUndefined {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOUndefined>(): R;
      new: <R = MOUndefined>() => R;
      undefined<R = undefined>(): R;
    }
  }
}

declare const MOUndefined: cocoa.MOUndefined.CLASS;
