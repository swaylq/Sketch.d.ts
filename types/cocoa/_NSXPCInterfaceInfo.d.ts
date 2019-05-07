/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCInterfaceInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    remoteVersion<R = number>(): R;
    setRemoteVersion<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSXPCInterfaceInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSXPCInterfaceInfo>(): R;
      new: <R = _NSXPCInterfaceInfo>() => R;
    }
  }
}
