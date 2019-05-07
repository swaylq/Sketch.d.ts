/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueProxyGetter<T0 = void, T1 = void, T2 = void> extends NSKeyValueGetter {
    proxyClass<R = unknown>(): R;
    initWithContainerClassID_key_proxyClass<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithContainerClassID: P0, _key: P1, _proxyClass: P2): R;
  }
  namespace NSKeyValueProxyGetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueGetter {
      alloc<R = NSKeyValueProxyGetter>(): R;
      new: <R = NSKeyValueProxyGetter>() => R;
    }
  }
}

declare const NSKeyValueProxyGetter: cocoa.NSKeyValueProxyGetter.CLASS;
