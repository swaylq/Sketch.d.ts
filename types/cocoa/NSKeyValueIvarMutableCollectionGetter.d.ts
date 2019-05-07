/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueIvarMutableCollectionGetter<T0 = void, T1 = void, T2 = void> extends NSKeyValueProxyGetter {
    ivar<R = objc_ivar>(): R;
    initWithContainerClassID_key_containerIsa_ivar_proxyClass<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = objc_ivar, P4 = unknown>(_initWithContainerClassID: P0, _key: P1, _containerIsa: P2, _ivar: P3, _proxyClass: P4): R;
  }
  namespace NSKeyValueIvarMutableCollectionGetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueProxyGetter {
      alloc<R = NSKeyValueIvarMutableCollectionGetter>(): R;
      new: <R = NSKeyValueIvarMutableCollectionGetter>() => R;
    }
  }
}

declare const NSKeyValueIvarMutableCollectionGetter: cocoa.NSKeyValueIvarMutableCollectionGetter.CLASS;
