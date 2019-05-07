/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWeakObjectValue<T0 = void, T1 = void, T2 = void> extends NSValue {
    objCType<R = string>(): R;
    dealloc<R = void>(): R;
    initWithObject<R = unknown, P0 = unknown>(_initWithObject: P0): R;
  }
  namespace NSWeakObjectValue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValue {
      alloc<R = NSWeakObjectValue>(): R;
      new: <R = NSWeakObjectValue>() => R;
    }
  }
}

declare const NSWeakObjectValue: cocoa.NSWeakObjectValue.CLASS;
