/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyBinding<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    setKey<R = void, P0 = unknown>(_setKey: P0): R;
    key<R = unknown>(): R;
    targetClass<R = unknown>(): R;
  }
  namespace NSKeyBinding {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSKeyBinding>(): R;
      new: <R = NSKeyBinding>() => R;
      suppressCapitalizedKeyWarning<R = void>(): R;
    }
  }
}

declare const NSKeyBinding: cocoa.NSKeyBinding.CLASS;
