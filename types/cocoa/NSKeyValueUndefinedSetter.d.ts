/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueUndefinedSetter<T0 = void, T1 = void, T2 = void> extends NSKeyValueSetter {
    initWithContainerClassID_key_containerIsa<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithContainerClassID: P0, _key: P1, _containerIsa: P2): R;
  }
  namespace NSKeyValueUndefinedSetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueSetter {
      alloc<R = NSKeyValueUndefinedSetter>(): R;
      new: <R = NSKeyValueUndefinedSetter>() => R;
    }
  }
}

declare const NSKeyValueUndefinedSetter: cocoa.NSKeyValueUndefinedSetter.CLASS;
