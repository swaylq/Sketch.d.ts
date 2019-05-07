/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingServiceReserved<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSSharingServiceReserved {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSharingServiceReserved>(): R;
      new: <R = NSSharingServiceReserved>() => R;
    }
  }
}

declare const NSSharingServiceReserved: cocoa.NSSharingServiceReserved.CLASS;
