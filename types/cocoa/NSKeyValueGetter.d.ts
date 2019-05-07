/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyValueGetter<T0 = void, T1 = void, T2 = void> extends NSKeyValueAccessor {}
  namespace NSKeyValueGetter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSKeyValueAccessor {
      alloc<R = NSKeyValueGetter>(): R;
      new: <R = NSKeyValueGetter>() => R;
    }
  }
}

declare const NSKeyValueGetter: cocoa.NSKeyValueGetter.CLASS;
