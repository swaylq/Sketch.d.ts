/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueIvarSetter<T0 = void, T1 = void, T2 = void> extends NSKeyValueSetter {
    ivar<R = objc_ivar>(): R;
    initWithContainerClassID_key_containerIsa_ivar<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = objc_ivar>(_initWithContainerClassID: P0, _key: P1, _containerIsa: P2, _ivar: P3): R;
  }
  namespace NSKeyValueIvarSetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueSetter {
      alloc<R = NSKeyValueIvarSetter>(): R;
      new: <R = NSKeyValueIvarSetter>() => R;
    }
  }
}

declare const NSKeyValueIvarSetter: cocoa.NSKeyValueIvarSetter.CLASS;
