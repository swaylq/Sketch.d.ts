/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueSetter<T0 = void, T1 = void, T2 = void> extends NSKeyValueAccessor {}
  namespace NSKeyValueSetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueAccessor {
      alloc<R = NSKeyValueSetter>(): R;
      new: <R = NSKeyValueSetter>() => R;
    }
  }
}

declare const NSKeyValueSetter: cocoa.NSKeyValueSetter.CLASS;
