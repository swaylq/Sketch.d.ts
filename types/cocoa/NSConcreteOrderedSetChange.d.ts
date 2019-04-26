/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteOrderedSetChange<T0 = void, T1 = void, T2 = void> extends NSOrderedSetChange {
    value<R = unknown>(): R;
    destinationIndex<R = number>(): R;
    sourceIndex<R = number>(): R;
    changeType<R = number>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSConcreteOrderedSetChange {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOrderedSetChange {
      alloc<R = NSConcreteOrderedSetChange>(): R;
      new: <R = NSConcreteOrderedSetChange>() => R;
    }
  }
}

declare const NSConcreteOrderedSetChange: cocoa.NSConcreteOrderedSetChange.CLASS;
