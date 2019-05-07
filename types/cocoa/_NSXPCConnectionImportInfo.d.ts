/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCConnectionImportInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    _valueForEntitlement_auditToken<R = unknown, P0 = unknown, P1 = unknown>(__valueForEntitlement: P0, _auditToken: P1): R;
    removeProxy<R = boolean, P0 = unknown>(_removeProxy: P0): R;
    addProxy<R = void, P0 = unknown>(_addProxy: P0): R;
    dealloc<R = void>(): R;
  }
  namespace _NSXPCConnectionImportInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSXPCConnectionImportInfo>(): R;
      new: <R = _NSXPCConnectionImportInfo>() => R;
    }
  }
}
