/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIBObjectDataAuxilary<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace NSIBObjectDataAuxilary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSIBObjectDataAuxilary>(): R;
      new: <R = NSIBObjectDataAuxilary>() => R;
    }
  }
}

declare const NSIBObjectDataAuxilary: cocoa.NSIBObjectDataAuxilary.CLASS;
