/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueMethodSetter<T0 = void, T1 = void, T2 = void> extends NSKeyValueSetter {
    method<R = objc_method>(): R;
    initWithContainerClassID_key_method<R = unknown, P0 = unknown, P1 = unknown, P2 = objc_method>(_initWithContainerClassID: P0, _key: P1, _method: P2): R;
  }
  namespace NSKeyValueMethodSetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueSetter {
      alloc<R = NSKeyValueMethodSetter>(): R;
      new: <R = NSKeyValueMethodSetter>() => R;
    }
  }
}

declare const NSKeyValueMethodSetter: cocoa.NSKeyValueMethodSetter.CLASS;
