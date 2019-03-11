/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSharingServiceReserved<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSSharingServiceReserved<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSSharingServiceReserved>(): R;
      new: <R = NSSharingServiceReserved>() => R;
    }
  }
}

declare const NSSharingServiceReserved: cocoa.classes.NSSharingServiceReserved;
