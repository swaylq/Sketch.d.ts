/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEventAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSEventAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSEventAuxiliary>(): R;
      new: <R = NSEventAuxiliary>() => R;
    }
  }
}

declare const NSEventAuxiliary: cocoa.NSEventAuxiliary.CLASS;
