/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueIvarGetter<T0 = void, T1 = void, T2 = void> extends NSKeyValueGetter {
    initWithContainerClassID_key_containerIsa_ivar<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = objc_ivar>(_initWithContainerClassID: P0, _key: P1, _containerIsa: P2, _ivar: P3): R;
  }
  namespace NSKeyValueIvarGetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueGetter {
      alloc<R = NSKeyValueIvarGetter>(): R;
      new: <R = NSKeyValueIvarGetter>() => R;
    }
  }
}

declare const NSKeyValueIvarGetter: cocoa.NSKeyValueIvarGetter.CLASS;
