/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteSetChange<T0 = void, T1 = void, T2 = void> extends NSSetChange {
    value<R = unknown>(): R;
    changeType<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSConcreteSetChange {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSetChange {
      alloc<R = NSConcreteSetChange>(): R;
      new: <R = NSConcreteSetChange>() => R;
    }
  }
}

declare const NSConcreteSetChange: cocoa.NSConcreteSetChange.CLASS;
