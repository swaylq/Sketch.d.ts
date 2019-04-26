/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueProxyCachingProtocol<T0 = void, T1 = void, T2 = void> {
    _proxyNonGCFinalize<R = void>(): R;
    _proxyInitWithContainer_getter<R = unknown, P0 = NSObject, P1 = unknown>(__proxyInitWithContainer: P0, _getter: P1): R;
    _proxyLocator<R = unknown>(): R;
  }
  namespace NSKeyValueProxyCachingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      _proxyShare<R = NSHashTable>(): R;
    }
  }
}
