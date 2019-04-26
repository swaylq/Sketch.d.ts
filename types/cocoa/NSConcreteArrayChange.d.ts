/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteArrayChange<T0 = void, T1 = void, T2 = void> extends NSArrayChange {
    value<R = unknown>(): R;
    destinationIndex<R = number>(): R;
    sourceIndex<R = number>(): R;
    changeType<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSConcreteArrayChange {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSArrayChange {
      alloc<R = NSConcreteArrayChange>(): R;
      new: <R = NSConcreteArrayChange>() => R;
    }
  }
}

declare const NSConcreteArrayChange: cocoa.NSConcreteArrayChange.CLASS;
