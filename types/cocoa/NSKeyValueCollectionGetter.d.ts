/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueCollectionGetter<T0 = void, T1 = void, T2 = void> extends NSKeyValueProxyGetter {
    methods<R = unknown>(): R;
    initWithContainerClassID_key_methods_proxyClass<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithContainerClassID: P0, _key: P1, _methods: P2, _proxyClass: P3): R;
  }
  namespace NSKeyValueCollectionGetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueProxyGetter {
      alloc<R = NSKeyValueCollectionGetter>(): R;
      new: <R = NSKeyValueCollectionGetter>() => R;
    }
  }
}

declare const NSKeyValueCollectionGetter: cocoa.NSKeyValueCollectionGetter.CLASS;
