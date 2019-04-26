/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCConnectionExportInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    exportCount<R = number>(): R;
    setExportCount<R = void, P0 = number>(_v: P0): R;
    exportedInterface<R = NSXPCInterface>(): R;
    setExportedInterface<R = void, P0 = NSXPCInterface>(_v: P0): R;
    exportedObject<R = unknown>(): R;
    setExportedObject<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace _NSXPCConnectionExportInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSXPCConnectionExportInfo>(): R;
      new: <R = _NSXPCConnectionExportInfo>() => R;
    }
  }
}
