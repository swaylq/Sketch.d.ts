/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCConnectionExportedObjectTable<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    invalidate<R = void>(): R;
    receivedReleaseForProxyNumber_userQueue<R = void, P0 = number, P1 = unknown>(_receivedReleaseForProxyNumber: P0, _userQueue: P1): R;
    decrementOutstandingReplyCount<R = void>(): R;
    incrementOutstandingReplyCount<R = void>(): R;
    releaseExportedObject<R = void, P0 = number>(_releaseExportedObject: P0): R;
    proxyNumberForExportedObject_interface<R = number, P0 = unknown, P1 = unknown>(_proxyNumberForExportedObject: P0, _interface: P1): R;
    interfaceForProxyNumber<R = unknown, P0 = number>(_interfaceForProxyNumber: P0): R;
    setInterface_forProxyNumber<R = void, P0 = unknown, P1 = number>(_setInterface: P0, _forProxyNumber: P1): R;
    exportedObjectForProxyNumber<R = unknown, P0 = number>(_exportedObjectForProxyNumber: P0): R;
    setExportedObject_forProxyNumber<R = void, P0 = unknown, P1 = number>(_setExportedObject: P0, _forProxyNumber: P1): R;
    dealloc<R = void>(): R;
  }
  namespace _NSXPCConnectionExportedObjectTable {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSXPCConnectionExportedObjectTable>(): R;
      new: <R = _NSXPCConnectionExportedObjectTable>() => R;
    }
  }
}
