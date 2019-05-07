/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueSlowSetter<T0 = void, T1 = void, T2 = void> extends NSKeyValueSetter {
    initWithContainerClassID_key_containerIsa<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithContainerClassID: P0, _key: P1, _containerIsa: P2): R;
  }
  namespace NSKeyValueSlowSetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueSetter {
      alloc<R = NSKeyValueSlowSetter>(): R;
      new: <R = NSKeyValueSlowSetter>() => R;
    }
  }
}

declare const NSKeyValueSlowSetter: cocoa.NSKeyValueSlowSetter.CLASS;
