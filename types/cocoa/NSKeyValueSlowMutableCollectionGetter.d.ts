/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueSlowMutableCollectionGetter<T0 = void, T1 = void, T2 = void> extends NSKeyValueProxyGetter {
    treatNilValuesLikeEmptyCollections<R = boolean>(): R;
    baseSetter<R = unknown>(): R;
    baseGetter<R = unknown>(): R;
    initWithContainerClassID_key_baseGetter_baseSetter_containerIsa_proxyClass<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown>(_initWithContainerClassID: P0, _key: P1, _baseGetter: P2, _baseSetter: P3, _containerIsa: P4, _proxyClass: P5): R;
  }
  namespace NSKeyValueSlowMutableCollectionGetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueProxyGetter {
      alloc<R = NSKeyValueSlowMutableCollectionGetter>(): R;
      new: <R = NSKeyValueSlowMutableCollectionGetter>() => R;
    }
  }
}

declare const NSKeyValueSlowMutableCollectionGetter: cocoa.NSKeyValueSlowMutableCollectionGetter.CLASS;
