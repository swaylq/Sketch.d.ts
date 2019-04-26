/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDoubleClickActionBinder<T0 = void, T1 = void, T2 = void> extends NSActionBinder {}
  namespace NSDoubleClickActionBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSActionBinder {
      alloc<R = NSDoubleClickActionBinder>(): R;
      new: <R = NSDoubleClickActionBinder>() => R;
    }
  }
}

declare const NSDoubleClickActionBinder: cocoa.NSDoubleClickActionBinder.CLASS;
