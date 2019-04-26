/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueFastMutableCollection1Getter<T0 = void, T1 = void, T2 = void> extends NSKeyValueProxyGetter {
    mutatingMethods<R = unknown>(): R;
    nonmutatingMethods<R = unknown>(): R;
    initWithContainerClassID_key_nonmutatingMethods_mutatingMethods_proxyClass<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_initWithContainerClassID: P0, _key: P1, _nonmutatingMethods: P2, _mutatingMethods: P3, _proxyClass: P4): R;
  }
  namespace NSKeyValueFastMutableCollection1Getter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueProxyGetter {
      alloc<R = NSKeyValueFastMutableCollection1Getter>(): R;
      new: <R = NSKeyValueFastMutableCollection1Getter>() => R;
    }
  }
}

declare const NSKeyValueFastMutableCollection1Getter: cocoa.NSKeyValueFastMutableCollection1Getter.CLASS;
